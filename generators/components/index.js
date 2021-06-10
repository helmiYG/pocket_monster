const componentExists = require('../componentExists.js');

module.exports = {
  description: 'create component (atoms, molecules, organisms)',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'atoms',
      choices: () => ['atoms', 'molecules', 'organisms']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the component name?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }
        return 'The name is required';
      }
    }
  ],
  actions: (data) => {
    let componentTemplate;
    componentTemplate = './components/add/function.hbs';
    // }
    const actions = [
      {
        type: 'add',
        path: `../src/components/${data.type}/{{properCase name}}/index.js`,
        templateFile: componentTemplate
      },
      {
        type: 'add',
        path: `../src/components/${data.type}/{{properCase name}}/styles.scss`,
        templateFile: './components/add/styles.hbs'
      },
      {
        type: 'add',
        path: `../src/components/${data.type}/{{properCase name}}/readme.md`,
        templateFile: './components/add/readme.hbs'
      },
      {
        type: 'modify',
        path: `../src/components/${data.type}/index.js`,
        pattern: /export {/g,
        templateFile: './components/modify/import.hbs'
      },
      {
        type: 'modify',
        path: `../src/components/${data.type}/index.js`,
        pattern: /};/g,
        templateFile: './components/modify/export.hbs'
      },
      {
        type: 'modify',
        path: `../src/components/${data.type}/index.js`,
        pattern: /\/\* don't.remove.init.index \*\//g,
        templateFile: './components/modify/init.hbs'
      }
    ];

    actions.push({
      type: 'lint:fix'
    });

    return actions;
  }
};
