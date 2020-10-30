import * as React from 'react';
import injectSheet from "react-jss";
import {Typography} from 'antd';


const styles = (theme: any) => ({
    
});

const { Title } = Typography;

class Blog extends React.PureComponent<any, any> {
    state: any = {
        name: '',
    }

    render() {

        return (
            <Title style={{color: 'coral'}}>Coming Soon!</Title>
        );
    }
}

const BlogStyled = injectSheet(styles)(Blog)
export default BlogStyled;