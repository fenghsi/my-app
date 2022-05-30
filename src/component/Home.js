import React from 'react';
import { Timeline, Icon } from 'antd';
import { Layout } from 'antd';
import { Typography} from 'antd';
import feyu from '../images/feyu.jpg';
import csg from '../images/csg.png';
import ecomm from '../images/e-comm.png';
import MMA from '../images/MMA.png';
import { Collapse } from 'antd';
import twitter from '../images/twitter.jpg';
import c4me from '../images/c4me.png';
import webgen from '../images/Webgen.png';
import { Card, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


function Home(props) {
    return (
            <div id = "homepage">
                <Layout className="layout">
                    <Header>
                    </Header>
                    <Content className = "content" >
                        <div class = "blocks" >
                            <div class="odd">
                                <Title style={{ textAlign: 'center' }} >Fenghsi Yu</Title>
                                <img src={feyu} alt="Avatar" class="prof_picture" ></img>
                            </div>
                            <div class="even">
                                <Typography className = "typolog" >
                                    <Title >About Me</Title>
                                    <Paragraph className = "self_intro">
                                    My name is Fenghsi Yu. Completed both Master and Bachelor degrees at <b>Stony Brook University</b>. I'm currently a full-time Software Developement Engineer at <b>Amazon</b> in Tempe, Arizona.
                                    </Paragraph>
                                    <br />
                                </Typography>
                            </div>
        
                            <div id = "Timeline" class="odd" >
                                <Title >Experience</Title>
                                <Timeline mode="alternate">
                                    <Timeline.Item color="silver">
                                        <h3> Now </h3>
                                    </Timeline.Item>
                                    <Timeline.Item color="orange">
                                        <h3>Amazon</h3> <h4>June 2022 - Current</h4> <b>Software Development Engineer</b> (Tempe, Arizona)
                                    </Timeline.Item>
                                    <Timeline.Item color="blue">
                                        <h3>General Motors</h3> <h4>June 2021 - May 2022</h4> <b>Software Developer</b> (Chandler, Arizona)
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Stony Brook University</h3> <h4>Aug 2020 - May 2021</h4> Completed <b>Master Degree</b> (Stony Brook, NY)
                                    </Timeline.Item>
                                    <Timeline.Item color="purple">
                                        <h3>MMA Pan Asia Fund</h3> <h4>June 2020 - Aug 2020</h4> <b>Software Engineering Intern</b> (Taipei, Taiwan)
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Stony Brook University</h3> <h4>Aug 2020 - May 2021</h4> Completed <b>Bachelor Degree</b> (Stony Brook, NY)
                                    </Timeline.Item>
                                    <Timeline.Item color="brown">
                                        <h3>Stony Brook University CS Department </h3><h4>July 2019 - May 2020</h4> <b>Web Assistant</b> (Stony Brook, NY)
                                    </Timeline.Item>

                                </Timeline>
                            </div>
                            <div class="even" >
                                <Title >Major Projects</Title>
                                <div class="card-section">
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card className="projects" title="MMADB" bordered={false}>
                                                <img src={MMA}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text">Private Source</div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="C4me" bordered={false}>
                                                <img src={c4me}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/fenghsi/College4me">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Twitter Clone" bordered={false}>
                                                <img src={twitter}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/fenghsi/twitter-clone">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card className="projects" title="WebGen" bordered={false}>
                                                <img src={webgen}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://web4bio.github.io/webgen/">Go to Website</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="E-Commerce Website" bordered={false}>
                                                <img src={ecomm}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/fenghsi/e-commerce-project">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Course site Generator" bordered={false}>
                                                <img src={csg}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/fenghsi/course_site_generator">Go to Github</a></div>
                                                </div>              
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div class="odd">
                            <Title >Minor Projects</Title>
                            <Collapse accordion>
                                <Panel header="Tic Tac Toe" key="1">
                                <p>Tic Tac toe is a simple gaming project. We implement front-end in react and backend in Express, which intergrates with mongodb. </p>
                                </Panel>
                                <Panel header="SBML" key="2">
                                <p>SBML is a unique programing language, which was built in python lex and yacc. <a href="https://github.com/fenghsi/sbml/tree/master">Click here to view</a></p>
                                </Panel>
                                <Panel header="DNS Experiment" key="3">
                                <p>Write a python Script to generate an DNS-like server for browsing</p>
                                </Panel>
                            </Collapse>
                            </div>
                        </div>
                        <div class="even">
                                <Typography className = "typolog" >
                                    <Title >Contact</Title>
                                    <Paragraph className = "self_intro">
                                       Email: markyu0915@gmail.com
                                    </Paragraph>
                                    <br /><br /><br />
                                </Typography>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', marginTop:'-100px' }}>©2022 Created by Fenghsi Yu</Footer>

                </Layout>
            </div>
     );
}

export default Home; 