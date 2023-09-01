import _Button from './Button.vue';
import { withInstall } from '../../utils/with-install';

export const Button = withInstall(_Button);

export default Button;

declare module 'vue' {
  export interface GlobalComponents {
    WButton: typeof Button;
  }
}
