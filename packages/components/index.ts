import * as components from './src/index';

import type { App } from 'vue';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};

export * from './src/index';
