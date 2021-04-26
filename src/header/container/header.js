import React from 'react'
import { Layout, Menu } from 'antd';
import {  Link } from 'react-router-dom';
const { Header } = Layout;
const HeaderBar = () => {
    return(
     <Header>
         <div className="logo" />
     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
         <Menu.Item>
            <Link to="/">Programar Misa</Link>
         </Menu.Item>
         <Menu.Item>
           <Link to="/reading">Lecturas</Link>
         </Menu.Item>
         <Menu.Item>
           <Link to="/writing">Escrituras</Link>
         </Menu.Item>
         <Menu.Item>
           <Link to="/rite">Rites</Link>
         </Menu.Item>
      </Menu>
     </Header>
    )
  
}

export default HeaderBar