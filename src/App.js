import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from './scenes/HomePage';
import SessionChoice from './scenes/SessionChoice';
import ChooseStartup from './scenes/ChooseStartup';
import Vote from './scenes/Vote';
import Thanks from './scenes/Thanks';
import AddStartup from './scenes/AddStartup';
import AddJudge from './scenes/AddJudge';
import Results from './scenes/Results';
import { admins } from './userList.js';
import './App.css';

export const UserContext = createContext(null);
export const SessionContext = createContext(null);

export default function App() {
  
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [session, setSession] = useState('EGLA')
  const [thisStartup, setThisStartup] = useState()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if(user && user.email && admins.includes(user.email.toLowerCase())) {
      setIsAdmin(true)
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken }}>
      <SessionContext.Provider value={{ session, thisStartup, setSession, setThisStartup }}>
        <Layout className='app-body'>
          {!user
            ? <HomePage />
            : !session
              ? <SessionChoice />
              : <Routes>
                  <Route index element={<ChooseStartup />} />
                  <Route path="/vote/:startupId" element={<Vote />} />
                  <Route path="/thanks" element={<Thanks />} />
                  {isAdmin &&
                  <>
                    <Route path="/admin" element={<AddStartup />} />
                    <Route path="/judges" element={<AddJudge />} />
                    <Route path="/results" element={<Results />} />
                  </>
                  }
                </Routes>
          }
        </Layout>
      </SessionContext.Provider>
    </UserContext.Provider>
  )
}

//Final