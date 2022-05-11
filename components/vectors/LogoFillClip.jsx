export default function LogoFillClip({ fill }) {
  return (
    <svg className='clip__svg'>
      <clipPath id='logoClip' clipPathUnits='objectBoundingBox'>
        <path d='M1,1 L0.999,0.469 C0.983,0.207,0.766,0,0.5,0 C0.224,0,0,0.224,0,0.5 C0,0.766,0.207,0.983,0.469,0.999 L0.468,1 H1'></path>
      </clipPath>
    </svg>
  );
}
