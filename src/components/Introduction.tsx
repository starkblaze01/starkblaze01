import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particles";
import ParticlesDark from "./ParticlesDark";
import { Typography, Switch, Icon } from "antd";
// import { useTransition, animated } from "react-spring";

const styles = (theme: any) => ({
  align: {
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
    justifyContent: "space-between",
    position: "fixed",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "95%",
    marginTop: "2%"
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
    mode: "dark"
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        {/* {this.state.mode === "light" ? <Particle /> : <ParticlesDark />} */}
        <ParticlesDark />
        <div className={classes.switch}>
          <Switch
            checkedChildren={<Icon type="smile" />}
            unCheckedChildren={<Icon type="smile" theme="filled" />}
            defaultChecked
          />
        </div>
        <div className={classes.align}>
          <Title>Hi!</Title>
          <h1>I am Mayank Pathela!</h1>
          <h2>Under Maintenance</h2>
          {/* <Animate /> */}
        </div>
      </>
    );
  }
}

const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
