import React from 'react';
import { Button, Header, Icon, Modal, Image, Menu } from 'semantic-ui-react'
import robot from '../img/robot.png';
export default function MenuModal(props) {
    return (
        <Modal
            basic
            onClose={() => props.setClose(false)}
            open={props.menuDialog}
            size='small'
        >
            <Header icon>
                <Image src={robot} size='medium' circular verticalAlign='middle' />
                Dave Lape - Full Stack Developer
            </Header>
            <Modal.Content>
                <Menu inverted vertical fluid>
                    <Menu.Item
                        name='home'
                        icon="home"
                        active={props.activeItem === 'home'}
                        onClick={() => { props.propsActiveItem('home') }}
                    />
                    <Menu.Item
                        name='about'
                        icon='info circle'
                        active={props.activeItem === 'about'}
                        onClick={() => { props.propsActiveItem('about') }}
                    />
                    <Menu.Item
                        name='portfolio'
                        icon='folder open'
                        active={props.activeItem === 'portfolio'}
                        onClick={() => { props.propsActiveItem('portfolio') }}
                    />
                    <Menu.Item
                        name='contact'
                        icon='id card'
                        active={props.activeItem === 'contact'}
                        onClick={() => { props.propsActiveItem('contact') }}
                    />
                    <Menu icon inverted floated='right'>
                        {
                            props.ico.map((row) => 
                                <Menu.Item key={row.key} active={props.activeIcon === row.name} href={row.link} target='_blank' >
                                    <Icon name={row.name} 
                                    size="large"
                                    color={row.color} />
                                </Menu.Item>
                            )
                        }
                    </Menu>
                </Menu>
            </Modal.Content>
            <Modal.Actions>
                <Button color='grey' inverted onClick={() => props.setClose(false)}>
                    <Icon name='remove' size="small" /> Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
}