import { useContext, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Layout, Form, Select } from "antd"
import { UserContext } from "../../App"
import categories from "../../categories"
import './votingForm.css'

export default function VotingForm() {
  const { token } = useContext(UserContext)
  const { startupId } = useParams()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleFormSubmit = (values) => {
    setLoading(true)
    // fetch(`http://localhost:5002/vote/${startupId}`, {
    fetch(`https://pitch-vote-api.web.app/vote/${startupId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => {
        navigate('/thanks')
        setLoading(false)
      })
      .catch(err => {
        alert(err)
        setLoading(true)
      })
  }
  return (
    <Form onFinish={handleFormSubmit}>
      <Layout.Content style={{ marginTop: 24 }}>
        <div className="voting-form-main-container"
          style={{ padding: '16px 1em 4px 1em', textAlign: 'left' }}>
          {/* <div className="voting-title-container">
            <h4 className="title-text"> Category
            </h4>
            <h4 className="title-text">  Vote
            </h4>
          </div> */}
          {categories.map(category => (
            <div key={category.value} className="form-item-container">
              <Form.Item name={category.value} rules={[{
                required: true,
                message: 'Please score for this category'
              }]}>
                <Select placeholder={category.label}
                  options={category.options}
                  dropdownStyle={{ textAlign: 'left' }}
                />
              </Form.Item>
            </div>
          ))}
        </div>
      </Layout.Content>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit Vote</Button>
    </Form>
  )
}
