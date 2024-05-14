import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: (
      <a href="#nav" target="" rel="noopener noreferrer">
       HOME
      </a>
    ),
    key: 'mail',
  },
  {
    label: (
      <a href="#profesionals" target="" rel="noopener noreferrer">
       QUIENES SOMOS
      </a>
    ),
    key: 'Services',
    
   
  },
  
  {
    key: 'alipay',
    label: (
      <a href="#services" target="" rel="noopener noreferrer">
       NUESTROS SERVICIOS
      </a>
    ),
  },
];

const Nav: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  style={{maxWidth: '100%'}} id='nav'/>;
};

export default Nav;