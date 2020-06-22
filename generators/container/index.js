const componentExists = require('../componentExists.js');

module.exports = {
  description: 'create container (pages, dummy, templates)',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of container',
      default: 'pages',
      choices: () => ['pages', 'dummy', 'templates']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the container name?',
      default: 'Home',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A container with this name already exists'
            : true;
        }
        return 'The name is required';
      }
    }
  ],
  actions: (data) => {
    const componentTemplate = './container/add/class.hbs';
    let targetRoot = data.type;
    if (data.type === 'dummy') targetRoot = 'pages/Dummy';

    const path = `../src/container/${targetRoot}/{{properCase name}}/index.js`;
    const stylePath = `../src/container/${targetRoot}/{{properCase name}}/styles.scss`;
    const readmePath = `../src/container/${targetRoot}/{{properCase name}}/readme.md`;

    const actions = [
      {
        type: 'add',
        path,
        templateFile: componentTemplate
      },
      {
        type: 'add',
        path: stylePath,
        templateFile: './container/add/styles.hbs'
      },
      {
        type: 'add',
        path: readmePath,
        templateFile: './container/add/readme.hbs'
      },
      {
        type: 'modify',
        path: `../src/container/${targetRoot}/index.js`,
        pattern: /export {/g,
        templateFile: './container/modify/import.hbs'
      },
      {
        type: 'modify',
        path: `../src/container/${targetRoot}/index.js`,
        pattern: /};/g,
        templateFile: './container/modify/export.hbs'
      },
      {
        type: 'modify',
        path: `../src/container/${targetRoot}/index.js`,
        pattern: /\/\* don't.remove.init.index \*\//g,
        templateFile: './container/modify/init.hbs'
      }
    ];

    actions.push({
      type: 'lint:fix'
    });

    return actions;
  }
};
