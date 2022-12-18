import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { UserContext } from "../../App";

export default function LogoutButton() {
  const navigate = useNavigate()
  const { setUser, setToken } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken();
    localStorage.removeItem('user');
    setUser();
    navigate('/');
  }
  return (
    <Button type="link" onClick={handleLogout}>Logout</Button>
  )
}
