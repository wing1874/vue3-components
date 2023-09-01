import type { App, Component } from 'vue';

type WithInstallType<T> = T & {
  install(app: App): void;
};

// 这个方法就是为传入的组件增加一个 install 方法，这样就可以使用 app.use做全局挂载了
export function withInstall<T extends Component>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options;
    if (name) {
      app.component(name, options);
    }
  };

  return options as WithInstallType<T>;
}
