import Arrow from '../vectors/Arrow';

export default function Btn({ text, className }) {
  return (
    <div className={`btn ${className}`}>
      <span>{text}</span>
      <div className='arrow'>
        <Arrow />
        <div className='btn__hover'></div>
      </div>
    </div>
  );
}
