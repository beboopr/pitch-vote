import Hero from '../components/common/Hero'
import SectionTitle from '../components/common/SectionTitle'
import BocaCodeCredit from '../components/common/BocaCodeCredit'
import SignInButton from '../components/signin/SignInButton'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SectionTitle title="RaiseLink's Pitch Competition Voting App Powered by Boca Code" />
      <SignInButton />
      <BocaCodeCredit />
    </div>
  )
}