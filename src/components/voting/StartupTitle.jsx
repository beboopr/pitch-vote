import { useContext } from 'react'
import { SessionContext } from '../../App'
import './startup-title.css'

export default function StartupTitle() {
  const { thisStartup } = useContext(SessionContext)
  return (
    <div className="startup-title">
      <h3>{thisStartup.name}</h3>
      <h4>{thisStartup.presenter}</h4>
    </div>
  )
}