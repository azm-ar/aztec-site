export default function LogoFill({ fill }) {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M64 64L63.9367 30.0167C62.9119 13.2676 49.0056 0 32.0021 0C14.327 0 0 14.3254 0 32.0014C0 49.0068 13.2673 62.9119 30.0189 63.9367L29.954 64H64Z'
        fill={fill ? fill : '#38505D'}
      />
    </svg>
  );
}
