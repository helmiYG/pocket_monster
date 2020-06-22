const { exec } = require('child_process');

const componentGenerator = require('./components/index.js');
const containerGenerator = require('./container/index.js');
const storesGenerator = require('./stores/index.js');

module.exports = (plop) => {
  plop.setGenerator('components', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('stores', storesGenerator)
  plop.setHelper(
    'prefix-component-style-name',
    (folderName) => `${folderName.toLowerCase().substring(0, 1)}`
  );
  plop.setActionType('lint:fix', () => exec(`yarn lint:fix`));
}