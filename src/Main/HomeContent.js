import React from 'react';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';
import { motion } from "framer-motion"
import robot from '../img/robot.png';
function HomeContent() {
    const style = { color: 'white', padding: 0, margin: 0 };
    return (
        <Segment placeholder basic style={{ alignItems: 'center', height: '95%', zIndex: 1, padding: 0 }}>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0, scale:0.5 }} style={{width: '100%'}}
                        animate={{ opacity: 1, scale:1 }} transition={{ duration: 2 }} >
                <Grid divided='vertically' textAlign="center" verticalAlign="middle" style={{ width: "100%" }}>
                    <Grid.Row style={style}>
                        <Grid.Column style={style}>
                            <Grid divided='vertically' style={{ width: "100%" }, style}>
                                <Grid.Row columns={2}>
                                    <Grid.Column textAlign="right" style={style}>
                                        <Image src={robot} size='medium' circular verticalAlign='middle' />
                                    </Grid.Column>
                                    <Grid.Column textAlign="left" style={style}>
                                        <Grid textAlign="left" verticalAlign="middle" style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}>
                                            <Grid.Row textAlign="left">
                                                <Grid.Column style={{ textAlign: 'left' }}>
                                                    <Header as='h1' size='huge' style={{ margin: 0, fontSize: '50px', color: 'white' }}><b>Hello World!,</b></Header>
                                                    <Header as='h3' style={{ margin: 0, display: 'inline-flex', color: 'white' }}>
                                                        I'm Dave, Full Stack Developer
                                                </Header>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </motion.div>
        </Segment>
    );
}

export default HomeContent;
