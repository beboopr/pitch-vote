import { List, Avatar, Badge } from 'antd'

export default function StartupPlaceItem({ startup, index, scores }) {
  const scoreCount = (scores === 'public') ? startup.publicCount : startup.judgeCount
  if(!scoreCount) {
    return null
  }
  return (
    <List.Item>
      <List.Item.Meta
        avatar={
          <Badge color="cyan" count={(scores === 'public') ? startup.publicCount : startup.judgeCount}>
            <Avatar style={{ verticalAlign: 'middle', backgroundColor: '#3C4048' }} size="large">
              #{index + 1}
            </Avatar>
          </Badge>
        }
        title={startup.name}
        description={startup.presenter}
      />
    </List.Item>
  )
}
