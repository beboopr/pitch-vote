import { useContext, useEffect, useState } from 'react'
import { List, Radio } from 'antd'
import PageLayout from '../components/common/PageLayout'
import MenuBar from '../components/common/MenuBar'
import StartupPlaceItem from '../components/startups/StartupPlaceItem'
import { SessionContext } from '../App'

export default function Results() {
  const { session } = useContext(SessionContext)
  const [scores, setScores] = useState('public')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://pitch-vote-api.web.app/startups/${session}`)
      // fetch(`http://localhost:5002/startups/${session}`)
      .then((res) => res.json())
      .then(body => {
        const _startupList = body.map(startup => {
          const [publicAverage, publicCount] = calcScores(startup.publicScores)
          const [judgeAverage, judgeCount] = calcScores(startup.judgeScores)
          return {...startup, publicAverage, publicCount, judgeAverage, judgeCount, }
      })
        sortData(_startupList)
      })
      .catch(() => {
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [session, scores])

  const calcScores = (scoreList) => {
    let scoreCount = 0
    let scoreTotal = 0
    for(const user in scoreList) {
      for(const score in scoreList[user]) {
        scoreTotal += scoreList[user][score]
        scoreCount++
      }
    }
    const scoreAverage = scoreCount ? scoreTotal/scoreCount : 0
    console.log({scoreAverage, scoreCount})
    return [scoreAverage, scoreCount/10]
  }

  const sortData = (startupList) => {
    const _startupList = startupList.sort((a,b) => {
      return (scores === 'public') ? b.publicAverage - a.publicAverage : b.judgeAverage - a.judgeAverage
    })
    setData(_startupList)
    setLoading(false)
  }

  const handleSwitch = ({ target: { value } }) => {
    setLoading(true)
    setScores(value) // switch between Audience / Judges
    sortData(data)
  }

  return (
    <>
      <MenuBar title={'Choose Startup'} />
      <section style={{ paddingTop: 72 }}>
        <PageLayout>
          <Radio.Group
            options={[{ label: 'Audience', value: 'public' },
            { label: 'Judges', value: 'judges' },]}
            onChange={handleSwitch}
            value={scores}
            optionType="button"
            buttonStyle="solid"
          />
          <div id="scrollableDiv" style={{ marginTop: '2em'}}>
            <List
              loading={loading}
              dataSource={data}
              renderItem={(item, index) => (
                <>
                  {
                    item.startupId
                      ? <StartupPlaceItem
                          index={index}
                          startup={item}
                          key={item.startupId}
                          scores={scores} />
                      : null
                  }
                </>
              )}
            />
          </div>
        </PageLayout>
      </section>
    </>
  )
}
