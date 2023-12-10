import React, { useState, useEffect } from 'react'
import { Segment, Menu, Icon } from 'semantic-ui-react';
import MenuModal from './MenuModal';
const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (width <= 768);
}

export default function NavBarTop(props) {
  const [activeItem, setActiveItem] = useState('home');
  const [activeIcon, setActiveIcon] = useState(-1);
  const [menuDialog, setMenuDialog] = useState(false);
  const style = { color: 'white', zIndex: 2 }
  const ico = [
    { key: "1", name: "linkedin", color:'teal', value: 1, link: "https://www.linkedin.com/in/dave-lape-b065a1114/" },
    { key: "2", name: "github", color: 'grey', value: 2, link: "https://github.com/Deeeeb" },
    { key: "3", name: "stack overflow", color: 'orange', value: 3, link: "https://stackoverflow.com/users/8453463/deee" },
    { key: "4", name: "facebook f", color: 'blue', value: 4, link: "https://web.facebook.com/Dave.niaga123" }
  ];

  function setClose(data){
    setMenuDialog(false)
  }

  function propsActiveItem(data){
    setActiveItem(data);
  }

  return (
    <Segment basic padded style={style}>
      <MenuModal 
      menuDialog={menuDialog}
      activeItem={activeItem}
      ico={ico}
      propsActiveItem={propsActiveItem}
      setClose={setClose}/>
      {
        useCheckMobileScreen() ?
          <div style={{float: 'right'}}>
            <Icon name="bars" size="big" onClick={()=> setMenuDialog(true)}/>
          </div>
          :
          <Menu secondary inverted>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={() => setActiveItem('home')}
            />
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={() => setActiveItem('about')}
            />
            <Menu.Item
              name='portfolio'
              active={activeItem === 'portfolio'}
              onClick={() => setActiveItem('portfolio')}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={() => setActiveItem('contact')}
            />
            <Menu.Menu position='right'>
              {
                ico.map((row) =>
                  <Menu.Item key={row.key} active={activeIcon === row.name} href={row.link} target='_blank' >
                    <Icon name={row.name}
                      size={activeIcon === row.value ? "large" : ""}
                      color={row.color}
                      onMouseOver={() => setActiveIcon(row.value)} onMouseOut={() => setActiveIcon(-1)} />
                  </Menu.Item>
                )
              }
            </Menu.Menu>
          </Menu>
      }
    </Segment>
  );
}
