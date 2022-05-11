import { useState } from 'react';
import Arrow from '../../vectors/Arrow';
import PlannerFormRow from './PlannerFormRow';
import DotLogo from '../../../components/vectors/DotLogo';
import LogoFillClip from '../../../components/vectors/LogoFillClip';

export default function PlannerForm() {
  const [selectedPart, setSelectedPart] = useState(1);

  return (
    <section className='planner__form'>
      <section className='dot__logo'>
        <DotLogo img='/dots.svg' />
        <LogoFillClip />
      </section>
      <form className='form' action='/api/forms/planner'>
        <div className={`part part1 ${selectedPart === 1 ? 'selected' : ''}`}>
          <PlannerFormRow
            label='name'
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
          />
          <PlannerFormRow
            label='email'
            type='text'
            name='email'
            id='email'
            placeholder='Email Address'
          />
          <PlannerFormRow
            label='phone'
            type='text'
            name='phone'
            id='phone'
            placeholder='Telephone'
          />
          <div className='btns'>
            <div className='next' onClick={() => setSelectedPart(2)}>
              <div className='btn'>
                <span>Next</span>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`part part2 ${selectedPart === 2 ? 'selected' : ''}`}>
          <PlannerFormRow
            label='company'
            type='text'
            name='company'
            id='company'
            placeholder='Your Company'
          />
          <PlannerFormRow
            label='service'
            type='text'
            name='service'
            id='service'
            placeholder='Services Required'
          />
          <PlannerFormRow
            label='budget'
            type='text'
            name='budget'
            id='budget'
            placeholder='Budget'
          />
          <div className='btns'>
            <div className='prev' onClick={() => setSelectedPart(1)}>
              <div className='btn'>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
                <span>Previous</span>
              </div>
            </div>
            <div className='next' onClick={() => setSelectedPart(3)}>
              <div className='btn'>
                <span>Next</span>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`part part3 ${selectedPart === 3 ? 'selected' : ''}`}>
          <div className='row'>
            <label htmlFor='details'>Details</label>
            <textarea
              type='text'
              name='details'
              id='details'
              placeholder='Tell us about your project'
            ></textarea>
            <div className='slide'></div>
          </div>
          <div className='btns'>
            <div className='prev' onClick={() => setSelectedPart(2)}>
              <div className='btn'>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
                <span>Previous</span>
              </div>
            </div>
            <button type='submit' className='btn submit'>
              <span>Send Enquiry</span>
              <div className='arrow'>
                <Arrow />
                <div className='btn__hover'></div>
              </div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
