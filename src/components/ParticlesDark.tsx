import * as React from "react";
import injectSheet from "react-jss";
import Particles from "react-particles-js";

const styles = (theme: any) => ({
  background: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});

class ParticleDark extends React.PureComponent<any, any> {
  param: any = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 400,
          duration: 4
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

const ParticleDarkStyled = injectSheet(styles)(ParticleDark);
export default ParticleDarkStyled;
