import * as React from 'react';
import injectSheet from "react-jss";
import { getAllRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons'
import './cards.css';

const {Title}  = Typography;
const styles = (theme: any) => ({
    
});

class Projects extends React.PureComponent<any, any> {
    state: any = {
        name: '',
    }
    async componentDidMount() {
        await this.props.getAllRepoDetails();
    }
    render(){
        const { classes, all } = this.props;
        console.log(all)
        return(
            <>
                <Title style={{color: 'coral'}}>My Projects and Repos</Title>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gridGap: '10px'}}>
                <div className="box">
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <div className="content">
                        <h2>oh my god</h2>
                        <p>Hi, you don't know me. But I do know you!</p>
                    </div>
                </div>
                <div className="box">
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <div className="content">
                        <h2>oh my god</h2>
                        <p>Hi, you don't know me. But I do know you!</p>
                    </div>
                </div>
                <div className="box">
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <div className="content">
                        <h2>oh my god</h2>
                        <p>Hi, you don't know me. But I do know you!</p>
                    </div>
                </div>
                <div className="box">
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <div className="content">
                        <h2>oh my god</h2>
                        <p>Hi, you don't know me. But I do know you!</p>
                    </div>
                </div>
                </div>
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