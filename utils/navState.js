import { proxy } from 'valtio';

const navState = proxy({
  open: false,
});

export { navState };
