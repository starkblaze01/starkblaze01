import * as React from 'react';
import injectSheet from "react-jss";
import { Typography, Tooltip } from "antd";
import { LinkedinOutlined, GithubOutlined, TwitterCircleFilled, PaperClipOutlined, CodeOutlined, InstagramOutlined } from '@ant-design/icons'

const {Title} = Typography;
const styles = (theme: any) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: '30em',
    margin: 'auto',
    paddingTop: '5em',
  },
  anchor: {
    '&:hover': {
      boxShadow: '1px 1px 1px 1px #34ebeb'
    }
  },
  textAnimation: {
    animationDuration: '4s',
    animationName: '$slidein',
    // animationIterationCount: 'infinite',
    // animationDirection: 'alternate',
  },
  '@keyframes slidein': {
  from: {
    marginLeft: '100%',
    width: '300%',
  },

  to: {
    marginLeft: '0%',
    width: '100%',
  },
},
});

class Home extends React.PureComponent<any, any> {

    render() {
      const {classes} = this.props;
        return (
            <>
            <Title style={{ color: "coral", marginTop: '10px' }}>Hi!</Title>
            <h1 style={{ color: "coral" }} className={classes.textAnimation}>
              I am Mayank Pathela, a full-stack developer who keeps exploring new stuffs and read Physics in leisure time.
            </h1>
            <div
              className= {classes.main}
            >
              <a
                href="https://www.linkedin.com/in/mayank-pathela/"
                className={classes.anchor}
              >
                <Tooltip title="LinkedIn"><LinkedinOutlined style={{ fontSize: "2em" }} /></Tooltip>
              </a>
              <a href="https://github.com/starkblaze01/"
                className={classes.anchor}
              >
                <Tooltip title="GitHub"><GithubOutlined style={{ fontSize: "2em" }} /></Tooltip>
              </a>
              <a href="https://twitter.com/StarkBlaze01"
                className={classes.anchor}
              >
                <Tooltip title="Twitter"><TwitterCircleFilled style={{ fontSize: "2em" }} /></Tooltip>
              </a>
              <a href="https://drive.google.com/file/d/1tMcgHjGKg0E_GniUUKGbmNz6JPk6SUTr/view?usp=sharing"
                className={classes.anchor}
              >
                <Tooltip title="Resume"><PaperClipOutlined style={{ fontSize: "2em" }} /></Tooltip>
              </a>
              <a href="https://sourcerer.io/starkblaze01" className={classes.anchor}>
                <Tooltip title="sourcerer.io">
                  <CodeOutlined style={{fontSize: "2em"}}/>
                </Tooltip>
              </a>
              <a href="https://www.instagram.com/starkblaze01/" className={classes.anchor}>
                <Tooltip title="Instagram">
                  <InstagramOutlined style={{fontSize: "2em"}}/>
                </Tooltip>
              </a>
            </div>
            </>
        );
    }
}

const HomeStyled = injectSheet(styles)(Home)
export default HomeStyled;