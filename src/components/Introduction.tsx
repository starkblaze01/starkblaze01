import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particle";
import ParticlesDark from "./ParticlesDark";
import { Typography, Switch, Tooltip, Layout, Spin, Menu } from "antd";
import { getAIRepodetails, getJeneretaRepoDetails, getSentimentRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SmileOutlined, SmileFilled, StarFilled, LinkedinOutlined, GithubOutlined, TwitterCircleFilled, PaperClipOutlined, HeartTwoTone } from '@ant-design/icons'
import Projects from './Projects';

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
    mode: false
  };
  render() {
    const { classes, sentiment, ai, jenereta } = this.props;
    return (
      <Layout>
        {/* {this.state.mode ? <Particle /> : <ParticlesDark />} */}
        <ParticlesDark/>
        <Header style={{display:'flex', justifyContent:'space-between', zIndex: 2}}>
          <div></div>
          <Menu theme="dark" mode="horizontal" >
            <Item key="about">
              About
            </Item>
            <Item key="projects">
              Projects
            </Item>
            <Item>Will see</Item>
          <Item key="switch">
            
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
            <Title style={{ color: "coral", marginTop: '100px' }}>Hi!</Title>
            <h1 style={{ color: "coral" }}>
              I am Mayank Pathela!
              </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "12em"
              }}
            >
              <a
                href="https://www.linkedin.com/in/mayank-pathela/"
              >
                <LinkedinOutlined style={{ fontSize: "2em" }} />
              </a>
              <a href="https://github.com/starkblaze01/" >
                <GithubOutlined style={{ fontSize: "2em" }} />
              </a>
              <a href="https://twitter.com/StarkBlaze01" >
                <TwitterCircleFilled style={{ fontSize: "2em" }} />
              </a>
              <a href="https://drive.google.com/file/d/1jfzHUiLJATl27dqZBh8KGaR48Gqf8Lqe/view?usp=sharing" >
                <Tooltip title="Resume"><PaperClipOutlined style={{ fontSize: "2em" }} /></Tooltip>
              </a>
            </div>
          <div style={{ width: '100%' }}>
            <Projects/>
            <Title>My Projects and Repos</Title>
            <div className={classes.cards}>
              <div className={classes.card}>
                {this.props.loadingSentiment ? <div><Spin size="large" /></div> :
                  <div>
                    <h1 style={{ color: '#e36600' }}>{sentiment.name}</h1>
                    <div>Stars Count: {sentiment.stargazers_count}</div>
                    <div>Language: {sentiment.language}</div>
                    {sentiment.homepage && sentiment.homepage.length ?
                      <div>Homepage:
                      {sentiment.homepage}
                      </div> : ''}
                    <br />
                    <div> Description: {sentiment.description}</div>
                    <br />
                    Star Me:<a href={sentiment.html_url}><StarFilled /></a>
                  </div>
                }
              </div>
              <div className={classes.card}>
                {this.props.loadingJenereta ? <div><Spin size="large" /></div> :
                  <div>
                    <h1 style={{ color: '#e36600' }}>{jenereta.name}</h1>
                    <div>Stars Count: {jenereta.stargazers_count}</div>
                    <div>Language: {jenereta.language}</div>
                    {jenereta.homepage && jenereta.homepage.length ?
                      <div>Homepage:
                      <a href={jenereta.homepage}>{jenereta.homepage}</a>
                      </div> : ''}
                    <br />
                    <div> Description: {jenereta.description}</div>
                    <br />
                    Star Me:<a href={jenereta.html_url}><StarFilled /></a>
                  </div>
                }
              </div>
              <div className={classes.card}>
                {this.props.loadingAI ? <div><Spin size="large" /></div> :
                  <div>
                    <h1 style={{ color: '#e36600' }}>{ai.name}</h1>
                    <div>Stars Count: {ai.stargazers_count}</div>
                    <div>Language: {ai.language}</div>
                    {ai.homepage && ai.homepage.length ?
                      <div>Homepage:
                      <a href={ai.homepage}>{ai.homepage}</a>
                      </div> : ''}
                    <br />
                    <div> Description: {ai.description}</div>
                    <br />
                    Star Me:<a href={ai.html_url}><StarFilled /></a>
                  </div>
                }
              </div>
            </div>
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
