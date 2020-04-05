import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particles";
import ParticlesDark from "./ParticlesDark";
import { Typography, Switch, Icon, Tooltip } from "antd";
import { getAIRepodetails, getJeneretaRepoDetails, getSentimentRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
// import { Link } from "react-router-dom";
// import { useTransition, animated } from "react-spring";

const styles = (theme: any) => ({
  align: {
    zIndex: 3,
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

// const Animate: React.SFC<any> = (props: any) => {
//   const [items, set] = React.useState(["1", "2", "3", "4"]);
//   const transitions = useTransition(items, item => item, {
//     from: { transform: "translate3d(0,-40px,0)" },
//     enter: { transform: "translate3d(0,0px,0)" },
//     leave: { transform: "translate3d(0,-40px,0)" }
//   });
//   return transitions.map(({ item, props, key }) => (
//     <animated.div key={key} style={props}>
//       {item}
//     </animated.div>
//   ));
// };

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
      <>
        {this.state.mode ? <Particle /> : <ParticlesDark />}
        <div className={classes.switch}>
          <Switch
            checkedChildren={<Icon type="smile" />}
            unCheckedChildren={<Icon type="smile" theme="filled" />}
            onChange={() => {
              this.setState({ mode: !this.state.mode });
            }}
          />
        </div>
        <div className={classes.align}>
          <div style={{ position: 'fixed', width: '100%' }}>
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
                    Star Me:<a href={sentiment.html_url}><Icon type="star" theme="filled" /></a>
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
                    Star Me:<a href={jenereta.html_url}><Icon type="star" theme="filled" /></a>
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
                    Star Me:<a href={ai.html_url}><Icon type="star" theme="filled" /></a>
                  </div>
                }
              </div>
            </div>
          </div>
          {/* <Animate /> */}
          {this.state.mode ? (
            ""
          ) : (
              <>
                <Title style={{ color: "coral", zIndex: 2, marginTop: '100px' }}>Hi!</Title>
                <h1 style={{ color: "coral", zIndex: 2 }}>
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
                    style={{ zIndex: 2 }}
                  >
                    <Icon type="linkedin" style={{ fontSize: "2em" }} />
                  </a>
                  <a href="https://github.com/starkblaze01/" style={{ zIndex: 1 }}>
                    <Icon type="github" style={{ fontSize: "2em" }} />
                  </a>
                  <a href="https://twitter.com/StarkBlaze01" style={{ zIndex: 1 }}>
                    <Icon
                      type="twitter-circle"
                      theme="filled"
                      style={{ fontSize: "2em" }}
                    />
                  </a>
                  <a href="https://drive.google.com/file/d/1divtO8ndNi68e9FdijrhT3oAIuMXh2Zj/view?usp=sharing" style={{ zIndex: 1 }}>
                    <Tooltip title="Resume"><Icon type="paper-clip" style={{ fontSize: "2em" }} /></Tooltip>
                  </a>
                </div>
              </>
            )}
        </div>
      </>
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
