import { useContext } from 'react'
import { Button } from 'antd'
import Hero from '../components/common/Hero'
import WelcomeBanner from '../components/common/WelcomeBanner'
import SectionTitle from '../components/common/SectionTitle'
import { SessionContext } from '../App'
import './session-choice.css'

export default function SessionChoice() {
  const { setSession } = useContext(SessionContext)
  return (
    <>
      <Hero />
      <WelcomeBanner />
      <div className='choose-session-container'>
        <section className='choose-session-box'>
          <SectionTitle title="Choose your session:" />
        </section>
        <div className='session-choice-button-box'>
          <Button className='session-choice-button'
            type="primary"
            onClick={() => setSession('EGLA')}>The Eglavator Pitch Competition</Button>
          {/* <Button className='session-choice-button'
            type="primary"
            onClick={() => setSession('FRI')}>FRI: 6:30 PM</Button>
          <Button className='session-choice-button'
            type="primary"
            onClick={() => setSession('1030')}>SAT: 10:30 AM</Button>
          <Button className='session-choice-button'
            type="primary"
            onClick={() => setSession('130')}>SAT: 1:30 PM</Button>
          <Button className='session-choice-button'
            type="primary"
            onClick={() => setSession('330')}>SAT: 3:30 PM</Button> */}
        </div>
      </div>
    </>
  )
}