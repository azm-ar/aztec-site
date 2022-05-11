import { useEffect } from 'react';
import { navState } from '../../utils/navState';
import { useSnapshot } from 'valtio';

export default function Layout({ children }) {
  const navStateSnapshot = useSnapshot(navState);

  useEffect(() => {
    navState.open = false;
  }, [children]);

  return (
    <>
      <div className={`wrapper ${navStateSnapshot.open ? 'nav--open' : ''}`}>
        {children}
      </div>
    </>
  );
}
