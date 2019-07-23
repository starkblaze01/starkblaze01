import * as React from "react";
import injectSheet from "react-jss";
import Particles from "react-particles-js";

const styles = (theme: any) => ({
  background: {
    position: "absolute",
    width: "100%"
  }
});

class Particle extends React.PureComponent<any, any> {
  param: any = {
    particles: {
      number: {
        value: 150
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
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#FFFFFF"
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#FFFFFF",
        opacity: 0.4,
        width: 0.4
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
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
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 150,
          size: 6,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 150,
          duration: 0.4
        }
      }
    },
    retina_detect: true
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

const ParticleStyled = injectSheet(styles)(Particle);
export default ParticleStyled;
