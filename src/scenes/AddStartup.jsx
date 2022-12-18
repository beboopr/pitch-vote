import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Input, Select } from 'antd'
import MenuBar from '../components/common/MenuBar'
import PageLayout from '../components/common/PageLayout'
import { UserContext } from '../App'

const API_URL = 'https://pitch-vote-api.web.app'
// const API_URL = 'http://127.0.0.1:5002'

export default function AddStartup() {
  const { token } = useContext(UserContext)
  const handleSubmit = (values) => {
    fetch(`${API_URL}/startups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(values)
    })
      .then(() => alert('Startup Added'))
      .catch(alert)
  }
  return (
    <>
      <MenuBar title={<Link to="/">&lt; Go Back</Link>} />
      <section style={{ paddingTop: 72 }}>
        <PageLayout>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            onFinish={handleSubmit}
          >
            <Form.Item label="Statup Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Presenter" name="presenter">
              <Input />
            </Form.Item>
            <Form.Item label="Session" name="sessionId">
              <Select>
                <Select.Option value="EGLA">The Eglavator Pitch Competition</Select.Option>
                {/* <Select.Option value="FRI">FRI: 6:30 PM</Select.Option>
                    <Select.Option value='1030'>SAT: 10:30 AM</Select.Option>
                    <Select.Option value='130'>SAT: 1:30 PM</Select.Option>
                    <Select.Option value='330'>SAT: 3:30 PM</Select.Option> */}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType='submit'>Add Startup</Button>
            </Form.Item>
          </Form>
        </PageLayout>
      </section>
    </>
  )
}
