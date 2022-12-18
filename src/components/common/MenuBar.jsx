import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import LogoutButton from '../signin/LogoutButton'
import ResetSession from './ResetSession';
import { UserContext } from '../../App';
import { admins } from '../../userList.js';

export default function MenuBar({ title }) {
  const { user } = useContext(UserContext);
  const isAdmin = admins.includes(user.email);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout.Header style={{ position: 'absolute', zIndex: 1,
      marginBottom: '1em', width: '100%', }}>
      <div className="logo">
        <div className="menu-items">
          <span></span>
          {title}
          <Button className="hamburger-button" type="link" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </div>
      </div>
      <Drawer placement="right" onClose={onClose} open={open}>
        <ResetSession />
        {isAdmin
          ? <>
              <br /><Link to="/results">RESULTS</Link>
              <br /><Link to="/admin">Add Startup</Link>
              <br /><Link to="/judges">Add Judge</Link>
          </>
          : null
        }
        <br />
        <LogoutButton />
      </Drawer>
    </Layout.Header>
  )
}