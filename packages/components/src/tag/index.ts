import _Tag from './Tag.vue';
import { withInstall } from '../../utils/with-install';

export const Tag = withInstall(_Tag);

export default Tag;

declare module 'vue' {
  export interface GlobalComponents {
    Tag: typeof Tag;
  }
}
