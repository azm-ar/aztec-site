import Link from 'next/link';
import Btn from '../../general/Btn';

export default function ViewALlWork() {
  return (
    <div className='view__all__work'>
      <Btn href='/work' text='View all work' />
      <div className='view__all__work__btns'>
        <Link href='/'>
          <a>Commercial</a>
        </Link>
        <Link href='/'>
          <a>Education</a>
        </Link>
        <Link href='/'>
          <a>Charities</a>
        </Link>
      </div>
    </div>
  );
}
