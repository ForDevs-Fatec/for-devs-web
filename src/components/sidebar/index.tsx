import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styles from './styles.module.css'
import { LayoutDashboard, LogOut, Menu as MenuIcon, Search, Users } from 'lucide-react';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
interface tokenDecoded {
  name: string;
  email: string;
  role: number;
}

export function SideBar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  // pegar dados do usuario logado
  const token = localStorage.getItem('token');

  const decoded = jwt_decode<tokenDecoded>(token as string);

  // logout do usuario
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <Sidebar
        onBackdropClick={
          () => setToggle(false)
        }
        toggled={toggle}
        breakPoint="always"

        backgroundColor='#121214'


      >
        <Menu
          menuItemStyles={{
            button: {
              '&:hover': {
                backgroundColor: '#1f1f23',
              },
            },
          }}

          className={styles.sidebar_wrapper}
        >
          {decoded.role === 0 ? (
            <>
              <Link to='/dashboard'>
                <MenuItem icon={<LayoutDashboard size={24} color='#ffffff' />} rootStyles={{
                    color: '#ffffff',
                    '&:hover': {
                      color: '#00b4f1',
                    },
                  }}>
                  Dashboard
                </MenuItem>
              </Link>
              <Link to='/search'>
                <MenuItem icon={<Search size={24} color='#ffffff' />} rootStyles={{
                    color: '#ffffff',
                    '&:hover': {
                      color: '#00b4f1',
                    },
                  }}>
                  Pesquisa
                </MenuItem>
              </Link>
              <MenuItem icon={<Users size={24} color='#ffffff' />} rootStyles={{
                    color: '#ffffff',
                    '&:hover': {
                      color: '#00b4f1',
                    },
                  }}> Usuários </MenuItem>
            </>
          ) : (
            <>
              <Link to='/dashboard'>
                <MenuItem
                  icon={
                    <LayoutDashboard
                      size={24}
                      color='#ffffff'
                    />
                  }

                  rootStyles={{
                    color: '#ffffff',
                    '&:hover': {
                      color: '#00b4f1',
                    },
                  }}
                > Dashboard </MenuItem>
              </Link>

              <Link to='Search' className='link'>
                <MenuItem icon={<Search size={24} color='#ffffff' />} rootStyles={{
                    color: '#ffffff',
                    '&:hover': {
                      color: '#00b4f1',
                    },
                  }}> Pesquisa </MenuItem>
              </Link>
            </>
          )}
        </Menu>

        <Menu
          menuItemStyles={{
            button: {
              '&:hover': {
                backgroundColor: '#1f1f23',
              },
            },
          }}
          onClick={handleLogout}
        >
          <MenuItem icon={<LogOut size={24} color='#ffffff' />} rootStyles={{
                    color: '#ffffff',
                    '&:hover': {
                      color: '#00b4f1',
                    },
                  }}> Sair </MenuItem>
        </Menu>
      </Sidebar>
      <main >
        <div>
          <button className={styles.sb_button} onClick={() => setToggle(!toggle)}>
            <MenuIcon size={32} color="#ffffff" />
          </button>
        </div>
      </main>
    </div >
  )
};