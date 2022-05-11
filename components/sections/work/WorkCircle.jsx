import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import LogoFillClip from '../../vectors/LogoFillClip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function WorkCircle({ item, index }) {
  const articleRef = useRef(null);

  useEffect(() => {
    let amount = (index / 2) * 50;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work__circles',
        start: 'top 10%',
        scrub: 1,
      },
    });

    tl.fromTo(articleRef.current, { y: 0 }, { yPercent: -amount });
  }, [articleRef, index]);

  return (
    <article className='work__circle' ref={articleRef}>
      <Link href={`/work/${item.attributes.alias}`}>
        <a>
          <div className='logo__bg'></div>
          <div className='img'>
            <figure>
              <Image
                src={`https://aztec.yeomedia.dev${item.attributes.mainImage.data.attributes.url}`}
                layout='fill'
                alt={`Aztec Media Our Work ${item.attributes.title}`}
                className='work__circle__img'
                data-itemname={item.attributes.title}
              />
            </figure>
            <LogoFillClip />
          </div>
          <div className='hover__circle'>
            <h4>{item.attributes.title}</h4>
            <p>{item.attributes.service1}</p>
            <LogoFillClip />
          </div>
        </a>
      </Link>
    </article>
  );
}
