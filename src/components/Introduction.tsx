import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particle";
import ParticlesDark from "./ParticlesDark";
import {  Switch, Layout,  Menu } from "antd";
import { SmileOutlined, SmileFilled } from '@ant-design/icons'
import Projects from './Projects';
import Blog from './Blog';
import About from './About';
import Home from './Home';

const { Header, Content, Footer } = Layout;
const {Item} = Menu;

const styles = (theme: any) => ({
  align: {
    zIndex: 2,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: "center",
    alignContent: "center",
    // verticleAlign: "middle !important",
    paddingTop: "10%",
  },
  footer: {
    textAlign: 'center',
    zIndex: 2,
    background: '#1c211d',
    bottom: 0,
    position: 'fixed',
    left: 0,
    width: '100%',
    color: '#e36600',
    maxHeight: '5px'
  }
});

class Introduction extends React.PureComponent<any, any> {

  state: any = {
    mode: false,
    page: 'home'
  };

  handleClick = (e:any) => {
    this.setState({page: e.key})
    console.log(e.key)
  }

  render() {
    const compo: any = {
      'about': <About/>,
      'projects': <Projects/>,
      'home': <Home/>,
      'blog': <Blog/>
    }
    const { classes } = this.props;
    return (
      <Layout>
        {this.state.mode ? <Particle /> : <ParticlesDark />}
        <Header style={{display:'flex', justifyContent:'space-between', zIndex: 2}}>
          <div></div>
          <Menu theme="dark" mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.page]}>
            <Item key="home">
              Home
            </Item>
            <Item key="about">
              About Me
            </Item>
            <Item key="projects">
              Projects
            </Item>
            <Item key="blog">
              Blog
            </Item>
          </Menu>
          <div>
          <Switch
            checkedChildren={<SmileOutlined />}
            unCheckedChildren={<SmileFilled />}
            onChange={() => {
              this.setState({ mode: !this.state.mode });
            }}
          />
          </div>
        </Header>
        <Content className={classes.align}>
          <div >
            {compo[this.state.page]}
          </div>
        </Content>
        <Footer className={classes.footer}>
          Copyright &copy; <a href="mailto:mp.pathela@gmail.com">Mayank Pathela </a>{new Date().getFullYear()}
        </Footer>
      </Layout>
    );
  }
}



const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
