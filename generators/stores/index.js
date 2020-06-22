const componentExists = require('../componentExists.js');

module.exports = {
  description: 'create redux (actions, reducers)',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the Redux type',
      default: 'actions',
      choices: () => ['actions', 'reducers', 'actions & reducers']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the function name?',
      default: 'progressBarAction',
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
    let storesTemplate;
    const targetRoot = 'reducers';
    let actions = [];
    if (data.type === 'actions') {
      storesTemplate = './stores/add/actions.hbs';
      actions = [
        {
          type: 'add',
          path: `../src/stores/${data.type}/{{camelCase name}}/index.js`,
          templateFile: storesTemplate
        },
        {
          type: 'add',
          path: `../src/stores/${data.type}/{{camelCase name}}/readme.md`,
          templateFile: './stores/add/readme.hbs'
        }
      ];
    } else if (data.type === 'reducers') {
      storesTemplate = './stores/add/reducers.hbs';
      actions = [
        {
          type: 'add',
          path: `../src/stores/${data.type}/{{camelCase name}}/index.js`,
          templateFile: storesTemplate
        },
        {
          type: 'add',
          path: `../src/stores/${data.type}/{{camelCase name}}/readme.md`,
          templateFile: './stores/add/readme.hbs'
        },
        {
          type: 'modify',
          path: `../src/stores/${targetRoot}/index.js`,
          pattern: /export default \(history\) =>\n {2}combineReducers\({/g,
          templateFile: './stores/modify/import.hbs'
        },
        {
          type: 'modify',
          path: `../src/stores/${targetRoot}/index.js`,
          pattern: /}\);/g,
          templateFile: './stores/modify/export.hbs'
        },
        {
          type: 'modify',
          path: `../src/stores/${targetRoot}/index.js`,
          pattern: /\/\* don't.remove.init.index \*\//g,
          templateFile: './stores/modify/init.hbs'
        }
      ];
    } else {
      const reducerTemplate = './stores/add/reducers.hbs';
      const actionsTemplate = './stores/add/actions.hbs';
      actions = [
        {
          type: 'add',
          path: `../src/stores/actions/{{camelCase name}}/index.js`,
          templateFile: actionsTemplate
        },
        {
          type: 'add',
          path: `../src/stores/actions/{{camelCase name}}/readme.md`,
          templateFile: './stores/add/readme.hbs'
        },
        {
          type: 'add',
          path: `../src/stores/reducers/{{camelCase name}}/index.js`,
          templateFile: reducerTemplate
        },
        {
          type: 'add',
          path: `../src/stores/reducers/{{camelCase name}}/readme.md`,
          templateFile: './stores/add/readme.hbs'
        },
        {
          type: 'modify',
          path: `../src/stores/${targetRoot}/index.js`,
          pattern: /export default \(history\) =>\n {2}combineReducers\({/g,
          templateFile: './stores/modify/import.hbs'
        },
        {
          type: 'modify',
          path: `../src/stores/${targetRoot}/index.js`,
          pattern: /}\);/g,
          templateFile: './stores/modify/export.hbs'
        },
        {
          type: 'modify',
          path: `../src/stores/${targetRoot}/index.js`,
          pattern: /\/\* don't.remove.init.index \*\//g,
          templateFile: './stores/modify/init.hbs'
        }
      ];
    }
    // actions.push({
    //   type: 'lint:fix'
    // });

    return actions;
  }
};
