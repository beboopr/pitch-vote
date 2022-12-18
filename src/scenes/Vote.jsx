import { Link } from 'react-router-dom'
import MenuBar from '../components/common/MenuBar'
import VotingForm from '../components/voting/VotingForm'
import StartupTitle from '../components/voting/StartupTitle'

export default function Vote() {
  return (
    <>
      <MenuBar title={<Link to="/">&lt; Go Back</Link>} />
      <section style={{ paddingTop: 72 }}>
        <StartupTitle />
        <VotingForm />
      </section>
    </>
  )
}