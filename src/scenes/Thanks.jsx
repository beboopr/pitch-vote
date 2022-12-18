import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import SectionTitle from '../components/common/SectionTitle'
import bocaCodeImage from "../assets/boca-code-logo.png"
import "./thankyou.css"

export default function Thanks() {
  const navigate = useNavigate()
  return (

    <div>
      <SectionTitle title="VOTE SUBMITTED!" />
      <p className="thank-you-text">Thank You for Voting!</p>
      <Button className="back-to-startups-button" type="primary"
        style={{ background: '#54BAB9', padding: '8px 24px', width: '60vw' }}
        onClick={() => navigate('/')}>
        &lt; Back to Startups</Button>
      <div className='thanks-bc-main-container'>
        <div className='thanks-section-img-container'>
          <img src={bocaCodeImage} alt="Boca code students" className="boca-img" />
        </div>
        <div className='thanks-bc-students-text'>
          <p>App designed and built by students at <a id='bc-link-text' href="https://www.bocacode.com/">Boca Code</a> </p>
        </div>
      </div>
    </div>

  )
}