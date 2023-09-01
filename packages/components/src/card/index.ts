import _Card from './Card.vue';
import { withInstall } from '../../utils/with-install';

export const Card = withInstall(_Card);

export default Card;

declare module 'vue' {
  export interface GlobalComponents {
    Card: typeof Card;
  }
}
