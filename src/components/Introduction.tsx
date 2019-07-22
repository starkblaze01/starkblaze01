import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particles";
import { Typography } from "antd";
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
    count: 0
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Particle />
        <div className={classes.align}>
          <Title>Hi!</Title>
          <h1>I am Mayank Pathela!</h1>
          {/* <Animate /> */}
        </div>
      </>
    );
  }
}

const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
