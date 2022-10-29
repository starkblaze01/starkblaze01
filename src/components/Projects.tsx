import * as React from 'react';
import injectSheet from "react-jss";
import { getAllRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin, Typography } from 'antd';
// import {  } from '@ant-design/icons'


const {Title}  = Typography;
const styles = (theme: any) => ({
    grid:{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridGap: '20px',
    }
});

class Projects extends React.PureComponent<any, any> {
    async componentDidMount() {
        await this.props.getAllRepoDetails();
    }
    render(){
        const { classes, all, loadingAll } = this.props;
        let fi = all ? all.filter((el:any)=> !el.fork && !el.private) : ''
        let arr = fi.length ? fi.sort((a: any, b: any) => { return b.stargazers_count - a.stargazers_count}) : ''
        let display = (arr && arr.length) ? arr.map((el:any) => 
            <div key={el.name} className="box">
                <span ></span>
                <span ></span>
                <span ></span>
                <span ></span>
                <div className="content">
                    <h2><a href={el.html_url}>{el.name}</a></h2>
                    <p>{el.description}</p>
                    {el.homepage ? <p><a href={el.homepage}>{el.homepage}</a></p>: ''}
                    <p>Stars: {el.stargazers_count}</p>
                    <p>Forks: {el.forks}</p>
                </div>
                </div>
        ) : ''
        return(
            <>
                <Title style={{color: 'coral'}}>My Projects and Repos</Title>
                {loadingAll ? <Spin size="large"/> : ''}
                <div className={classes.grid}>
                    {display}
                </div>
                <div style={{height: '100px'}}></div>
            </>
        );
    }
}

const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
    all: gitrepoReducer.all ? gitrepoReducer.all.data : null,
    loadingAll: gitrepoReducer.loadingAll,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
    getAllRepoDetails,
}, dispatch))

const ProjectsStyled = injectSheet(styles)(Projects)
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsStyled);