import PageLayout from '../components/common/PageLayout'
import MenuBar from '../components/common/MenuBar'
import StartupList from '../components/startups/StartupList'
import WelcomeBanner from '../components/common/WelcomeBanner'

export default function ChooseStartup() {
  return (
    <>
      <MenuBar title={'Choose Startup'} />
      <section style={{ paddingTop: 72 }}>
        <WelcomeBanner />
        <PageLayout>
          <StartupList />
        </PageLayout>
      </section>
    </>
  )
}