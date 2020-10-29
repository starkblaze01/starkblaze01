import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particle";
import ParticlesDark from "./ParticlesDark";
import { Typography, Switch, Layout,  Menu } from "antd";
import { getAIRepodetails, getJeneretaRepoDetails, getSentimentRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SmileOutlined, SmileFilled, HeartTwoTone } from '@ant-design/icons'
import Projects from './Projects';
import Blog from './Blog';
import About from './About';
import Home from './Home';

const { Header, Content, Footer } = Layout;
const {Item} = Menu;

const styles = (theme: any) => ({
  align: {
    zIndex: 2,
    fontColor: "blue",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    verticleAlign: "middle !important",
    height: "100vh",
    paddingTop: "10%"
  },
  switch: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    position: "fixed",
    alignItems: "center",
    alignContent: "center",
    marginTop: "10px",
    zIndex: 2,
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    margin: 'auto',
    color: '#0057e3',
  },
  card: {
    height: '300px',
    width: '250px',
    border: '1px solid #8f8f8f',
    boxShadow: '5px 5px 5px 5px',
    borderRadius: '10px 10px',
  }
});
const { Title } = Typography;

class Introduction extends React.PureComponent<any, any> {

  async componentDidMount() {
    await this.props.getJeneretaRepoDetails();
    await this.props.getAIRepodetails();
    await this.props.getSentimentRepoDetails();
  }

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
        {/* <ParticlesDark/> */}
        <Header style={{display:'flex', justifyContent:'space-between', zIndex: 2}}>
          <div></div>
          <Menu theme="dark" mode="horizontal" onClick={this.handleClick}>
            <Item key="home">
              Home
            </Item>
            <Item key="about">
              About
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
          <div style={{ width: '100vh' }}>
            {compo[this.state.page]}
          </div>
        </Content>
        <Footer style={{textAlign:'center', zIndex: 2, background: 'black'}}>
          Made with <HeartTwoTone twoToneColor="#eb2f96" />
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
  sentiment: gitrepoReducer.sentiment ? gitrepoReducer.sentiment.data : null,
  ai: gitrepoReducer.ai ? gitrepoReducer.ai.data : null,
  jenereta: gitrepoReducer.jenereta ? gitrepoReducer.jenereta.data : null,
  loadingSentiment: gitrepoReducer.loadingSentiment,
  loadingAI: gitrepoReducer.loadingAI,
  loadingJenereta: gitrepoReducer.loadingJenereta,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
  getJeneretaRepoDetails,
  getAIRepodetails,
  getSentimentRepoDetails,
}, dispatch))

const IntroductionStyled = injectSheet(styles)(Introduction);
export default connect(mapStateToProps, mapDispatchToProps)(IntroductionStyled);
