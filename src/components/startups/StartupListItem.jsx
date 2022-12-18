import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { List, Checkbox } from 'antd';
import { SessionContext, UserContext } from "../../App";

export default function StartupListItem({ startup }) {
  const { setThisStartup } = useContext(SessionContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleStartupSelect = () => {
    setThisStartup(startup)
    navigate(`/vote/${startup.startupId}`)
  }
  const checked = startup && ((startup.publicScores && startup.publicScores[user.uid]) || (startup.judgeScores && startup.judgeScores[user.uid]))
  return (
    <List.Item onClick={handleStartupSelect} style={{ cursor: 'pointer' }}>
      <List.Item.Meta
        title={startup.name}
        description={startup.presenter}
      />
      <Checkbox checked={checked} disabled />
    </List.Item>
  )
}