import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particles";
import ParticlesDark from "./ParticlesDark";
import { Typography, Switch, Icon } from "antd";
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
  state: any = {
    mode: false
  };
  render() {
    const { classes } = this.props;
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
              <div className={classes.card}></div>
              <div className={classes.card}></div>
              <div className={classes.card}></div>
            </div>
          </div>
          {/* <Animate /> */}
          {this.state.mode ? (
            ""
          ) : (
              <>
                <Title style={{ color: "coral", zIndex: 2 }}>Hi!</Title>
                <h1 style={{ color: "coral", zIndex: 2 }}>
                  I am Mayank Pathela!
              </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "8em"
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/mayank-pathela-1a165b154/"
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
                </div>
              </>
            )}
        </div>
      </>
    );
  }
}

const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
