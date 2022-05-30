import YeoLogo from '../vectors/YeoLogo';

export default function FooterLogo() {
  return (
    <div className='footer__yeo__logo'>
      <a
        href='https://yeomedia.group'
        rel='noreferrer'
        target='_blank'
        title='Visit the Yeomedia Group website'
      >
        <YeoLogo />
      </a>
    </div>
  );
}
