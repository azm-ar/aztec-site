import Image from 'next/image';

export default function DotLogo({ img }) {
  return (
    <div className='dots'>
      <Image src={img} layout='fill' alt='#' />
    </div>
  );
}
