import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particles";
import ParticlesDark from "./ParticlesDark";
import { Typography, Switch, Icon } from "antd";
import { Link } from "react-router-dom";
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
    marginTop: "10px"
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
          <Title>Hi!</Title>
          <h1>I am Mayank Pathela!</h1>
          {/* <Animate /> */}
          {this.state.mode ? (
            ""
          ) : (
            <Title style={{ color: "coral", zIndex: 1 }}>
              Under Maintenance
            </Title>
          )}
          <Link to="https://www.linkedin.com/in/mayank-pathela-1a165b154">
            <Icon type="linkedin" style={{ zIndex: 10 }} />
          </Link>
          <Link to="https://github.com/starkblaze01/">
            <Icon type="github" style={{ zIndex: 10 }} />
          </Link>
          {/* <a href="https://www.linkedin.com/in/mayank-pathela-1a165b154">ddd</a> */}
        </div>
      </>
    );
  }
}

const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
