// 组件
import WIcon from './icon/index';
import WButton from './button/index';
import WLoadbar from './loadbar/index';

const waterCpt = {
  WIcon,
  WButton,
  WLoadbar,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(key, waterCpt[key]);
  });


  if (!Vue.prototype.$WLoadbar) {
    Object.defineProperties(Vue.prototype, {
      $WLoadbar: {
        get() {
          return WLoadbar;
        },
      },
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  WLoadbar,
  install,
};
