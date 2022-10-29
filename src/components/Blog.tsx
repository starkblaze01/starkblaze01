import * as React from 'react';
import injectSheet from "react-jss";
import {Typography, Spin} from 'antd';
import { getAllBlogs } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = (theme: any) => ({
    grid:{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridGap: '20px',
    }
});

const { Title } = Typography;

class Blog extends React.PureComponent<any, any> {
    async componentDidMount() {
        await this.props.getAllBlogs();
    }
    render() {
        const { classes, loadingBlog, blog } = this.props;
        let display = (blog && blog.length) ? blog.map((el:any) => 
            <div key={el.title} className="box">
                <div className="content">
                    <h2><a href={el.url}>{el.title}</a></h2>
                    <br/>
                    <p>Last Updated at: {new Date(el.edited_at).toDateString()}</p>
                    <p>Read Minutes: {el.reading_time_minutes}</p>
                    <p>Reactions: {el.public_reactions_count}</p>
                </div>
                </div>
        ) : ''
        return (
            <>
                <Title style={{color: 'coral'}}>Beware!  tl;dr  Section Ahead</Title>
                {loadingBlog ? <Spin size="large"/> : ''}
                <div className={classes.grid}>
                    {display}
                </div>
                <div style={{height: '100px'}}></div>
            </>
        );
    }
}


const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
    blog: gitrepoReducer.blog ? gitrepoReducer.blog.data : null,
    loadingBlog: gitrepoReducer.loadingBlog,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
    getAllBlogs,
}, dispatch))

const BlogStyled = injectSheet(styles)(Blog)
export default connect(mapStateToProps, mapDispatchToProps)(BlogStyled);