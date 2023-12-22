import React from 'react';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';
import { motion } from "framer-motion"
import me from '../img/me.png';
import {useCheckMobileScreen} from '../utils/commonFunc';
function HomeContent() {
    const style = { color: 'white', padding: 0, margin: 0 };

    return (
        <Segment placeholder basic style={{ alignItems: 'center', height: '95%', zIndex: 1, padding: 0 }}>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0, scale:0.5 }} style={{width: '100%'}}
                        animate={{ opacity: 1, scale:1 }} transition={{ duration: 2 }} >
                <Grid divided='vertically' textAlign="center" verticalAlign="middle">
                    <Grid.Row style={style}>
                        <Grid.Column style={style}>
                            <Grid stackable divided='vertically'>
                                <Grid.Row columns={2}>
                                    <Grid.Column textAlign={useCheckMobileScreen() ? "center":"right"} style={style}>
                                        <Image src={me} circular verticalAlign='middle' />
                                    </Grid.Column>
                                    <Grid.Column textAlign="left" style={style}>
                                        <Grid textAlign="left" verticalAlign="middle" style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}>
                                            <Grid.Row textAlign={useCheckMobileScreen() ? "center":"left"}>
                                                <Grid.Column style={{ textAlign: `${useCheckMobileScreen() ? "center":"left"}` }}>
                                                    <Header as='h1' size='huge' style={{ margin: 0, fontSize: '50px', color: 'white', fontStyle: 'oblique'}}><b>Hello World!</b></Header>
                                                    <Header as='h3' style={{ margin: 0, display: 'inline-flex', color: 'white', fontStyle: 'italic' }}>
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
