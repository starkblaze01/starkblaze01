import * as React from "react";
import injectSheet from "react-jss";

const styles = (theme: any) => ({});

class Introduction extends React.PureComponent<any, any> {
  render() {
    return (
      <>
        <h1>Hello There</h1>
      </>
    );
  }
}

const IntroductionStyled = injectSheet(styles)(Introduction);
export default IntroductionStyled;
