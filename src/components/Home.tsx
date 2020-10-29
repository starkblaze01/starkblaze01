import * as React from 'react';
import injectSheet from "react-jss";
import { Typography, Tooltip } from "antd";
import { LinkedinOutlined, GithubOutlined, TwitterCircleFilled, PaperClipOutlined } from '@ant-design/icons'

const {Title} = Typography;
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
        color: '#0057e3',
    },
    card: {
        height: '300px',
        width: '250px',
        border: '1px solid #8f8f8f',
        boxShadow: '5px 5px 5px 5px',
        borderRadius: '10px 10px',
    }
});

class Home extends React.PureComponent<any, any> {
    state: any = {
        name: '',
    }

    render() {
        return (
            <>
            <Title style={{ color: "coral", marginTop: '100px' }}>Hi!</Title>
            <h1 style={{ color: "coral" }}>
                I am Mayank Pathela!
              </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "12em"
              }}
            >
              <a
                href="https://www.linkedin.com/in/mayank-pathela/"
              >
                <LinkedinOutlined style={{ fontSize: "2em" }} />
              </a>
              <a href="https://github.com/starkblaze01/" >
                <GithubOutlined style={{ fontSize: "2em" }} />
              </a>
              <a href="https://twitter.com/StarkBlaze01" >
                <TwitterCircleFilled style={{ fontSize: "2em" }} />
              </a>
              <a href="https://drive.google.com/file/d/1jfzHUiLJATl27dqZBh8KGaR48Gqf8Lqe/view?usp=sharing" >
                <Tooltip title="Resume"><PaperClipOutlined style={{ fontSize: "2em" }} /></Tooltip>
              </a>
            </div>
            </>
        );
    }
}

const HomeStyled = injectSheet(styles)(Home)
export default HomeStyled;