import * as React from "react";
import injectSheet from "react-jss";
import Particle from "./Particles";
import { Typography } from "antd";

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
class Introduction extends React.PureComponent<any, any> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Particle />
        <div className={classes.align}>
          <Title>Hi!</Title>
        </div>
      </>
    );
  }
}

const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
