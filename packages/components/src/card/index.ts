import _Card from './Card.vue';
import { withInstall } from '../../utils/with-install';

export const Card = withInstall(_Card);

export default Card;

declare module 'vue' {
  // 告诉Volar 插件，全局注册组件的时候，有 TS 提示，
  export interface GlobalComponents {
    WCard: typeof Card;
  }
}
