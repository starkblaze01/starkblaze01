import * as React from 'react';
import injectSheet from "react-jss";
import { getAIRepodetails, getJeneretaRepoDetails, getSentimentRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons'

const {Title}  = Typography;
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
        const { classes, sentiment, ai, jenereta } = this.props;

        return(
            <div className={classes.cards}>
                <Title>My Projects and Repos</Title>
                <div className={classes.card}>
                    {this.props.loadingSentiment ? <div><Spin size="large" /></div> :
                        <div>
                            <h1 style={{ color: '#e36600' }}>{sentiment.name}</h1>
                            <div>Stars Count: {sentiment.stargazers_count}</div>
                            <div>Language: {sentiment.language}</div>
                            {sentiment.homepage && sentiment.homepage.length ?
                                <div>Homepage:
                      {sentiment.homepage}
                                </div> : ''}
                            <br />
                            <div> Description: {sentiment.description}</div>
                            <br />
                    Star Me:<a href={sentiment.html_url}><StarFilled /></a>
                        </div>
                    }
                </div>
                <div className={classes.card}>
                    {this.props.loadingJenereta ? <div><Spin size="large" /></div> :
                        <div>
                            <h1 style={{ color: '#e36600' }}>{jenereta.name}</h1>
                            <div>Stars Count: {jenereta.stargazers_count}</div>
                            <div>Language: {jenereta.language}</div>
                            {jenereta.homepage && jenereta.homepage.length ?
                                <div>Homepage:
                      <a href={jenereta.homepage}>{jenereta.homepage}</a>
                                </div> : ''}
                            <br />
                            <div> Description: {jenereta.description}</div>
                            <br />
                    Star Me:<a href={jenereta.html_url}><StarFilled /></a>
                        </div>
                    }
                </div>
                <div className={classes.card}>
                    {this.props.loadingAI ? <div><Spin size="large" /></div> :
                        <div>
                            <h1 style={{ color: '#e36600' }}>{ai.name}</h1>
                            <div>Stars Count: {ai.stargazers_count}</div>
                            <div>Language: {ai.language}</div>
                            {ai.homepage && ai.homepage.length ?
                                <div>Homepage:
                      <a href={ai.homepage}>{ai.homepage}</a>
                                </div> : ''}
                            <br />
                            <div> Description: {ai.description}</div>
                            <br />
                    Star Me:<a href={ai.html_url}><StarFilled /></a>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
    sentiment: gitrepoReducer.sentiment ? gitrepoReducer.sentiment.data : null,
    ai: gitrepoReducer.ai ? gitrepoReducer.ai.data : null,
    jenereta: gitrepoReducer.jenereta ? gitrepoReducer.jenereta.data : null,
    loadingSentiment: gitrepoReducer.loadingSentiment,
    loadingAI: gitrepoReducer.loadingAI,
    loadingJenereta: gitrepoReducer.loadingJenereta,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
    getJeneretaRepoDetails,
    getAIRepodetails,
    getSentimentRepoDetails,
}, dispatch))

const ProjectsStyled = injectSheet(styles)(Projects)
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsStyled);