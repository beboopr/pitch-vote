import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { SessionContext } from "../../App";
import { Button } from "antd";



export default function ResetSession() {
  const { setSession } = useContext(SessionContext);
  const navigate = useNavigate()
  const handleClick = () => {
    setSession()
    navigate("/")
  }

  return (
    <Button type="link" onClick={handleClick}>
      Change Session
    </Button>
  );
}
