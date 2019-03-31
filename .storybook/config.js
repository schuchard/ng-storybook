import { configure } from '@storybook/angular';
import { setConsoleOptions } from '@storybook/addon-console';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
setConsoleOptions({
  panelExclude: [],
});
configure(loadStories, module);
