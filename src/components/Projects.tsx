import * as React from 'react';
import injectSheet from "react-jss";

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

class Projects extends React.PureComponent<any, any> {
    state: any = {
        name: '',
    }

    render(){
        return(
            <>Here will be the projects</>
        );
    }
}

const ProjectsStyled = injectSheet(styles)(Projects)
export default ProjectsStyled;