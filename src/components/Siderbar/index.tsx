import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styles from './styles.module.css'
import { LayoutDashboard, LogOut, Menu as MenuIcon, Search } from 'lucide-react';

export function SideBar() {
  const [toggle, setToggle] = useState(false);

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
          <MenuItem icon={<LayoutDashboard size={24} color='#ffffff'/>}> Dashboard </MenuItem>
          <MenuItem icon={<Search size={24} color='#ffffff'/>}> Pesquisa </MenuItem>
        </Menu>

        <Menu
          menuItemStyles={{
            button: {
              '&:hover': {
                backgroundColor: '#1f1f23',
              },
            },
          }}
        >
          <MenuItem icon={<LogOut size={24} color='#ffffff'/>}> Sair </MenuItem>
        </Menu>
      </Sidebar>
      <main >
        <div>
          <button className={styles.sb_button} onClick={() => setToggle(!toggle)}>
            <MenuIcon size={32} color="#ffffff"/>
          </button>
        </div>
      </main>
    </div >
  )
};