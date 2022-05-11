import TeamSplide from '../sections/sliders/TeamSplide';

export default function MeetTheTeam({ team }) {
  return (
    <section className='meet__the__team'>
      <TeamSplide direction='ltr' teamData={team} text='Our Team' />
      <TeamSplide direction='rtl' teamData={team} text='Our Team' />
    </section>
  );
}
