import * as React from "react";
import injectSheet from "react-jss";
import Particles from "react-particles-js";

const styles = (theme: any) => ({
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#000"
  }
});

class ParticlesDark extends React.PureComponent<any, any> {
  param: any = {
    particles: {
      number: {
        value: 100
      },
      size: {
        value: 3
      },
      color: {
        value: [
          "#DF1818",
          "#159AD5",
          "#1ED620",
          "#FBFBFB",
          "#C111C1",
          "#DBF307"
        ]
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div id="particles">
        <Particles params={this.param} className={classes.background} />
      </div>
    );
  }
}

const ParticlesDarkStyled = injectSheet(styles)(ParticlesDark);
export default ParticlesDarkStyled;
