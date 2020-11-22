import { atom } from 'recoil';
import { initContact } from 'src/web/models/contactObject';

export const contactState = atom({
  key: 'ContactState',
  default: initContact(),
});
