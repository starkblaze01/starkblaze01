import * as React from 'react';
import injectSheet from "react-jss";
import {Typography, Divider} from 'antd';

const styles = (theme: any) => ({
    paragraph: {
        color: '#50dfdb',
        fontSize: '20px',
        maxWidth: '600px',
        background: 'rgb(23, 32, 90, 0.5)',
    }
});

const {Title, Paragraph} = Typography;
class About extends React.PureComponent<any, any> {
    state: any = {
        name: '',
    }

    render() {
        const {classes} = this.props;
        return (
            <div style={{paddingBottom: '100px'}}>
                <Title style={{ color: 'coral' }} code={true}>A litle about me:</Title>
                <Paragraph className={classes.paragraph} strong={true} code={true}> Hi, I am Mayank Pathela, a full-stack developer who is curious all the time and want to explore everything.!
                    I have been doing Web Development since 2017, and have used React for most of my projects. I also have a Nanodegree in Deep Learning,
                    and love to implement AI algorithms also read research papers sometimes. I love to watch Anime, read books, play football, and discuss Physics.
                </Paragraph>
                <Divider orientation="center" style={{ background: 'coral'}}/>
                <Title style={{ color: 'coral' }} code={true}>My Motivation:</Title>
                <Paragraph className={classes.paragraph} strong={true} code={true}> 
                    I got my first computer when I was 7 years old and have always been
                    amazed by the power of Computers and the Internet. They can do anything which we can think of. My love for computers and father's unfulfilled dream
                    to become an Engineer motivated me to pursue Engineering.
                </Paragraph>
                <Divider orientation="center" style={{ background: 'coral' }} />
                <Title style={{ color: 'coral' }} code={true}>My Ideology:</Title>
                <Paragraph className={classes.paragraph} strong={true} code={true}> 
                    Nature itself was in Equilibrium until the human's greed kicked in. We have been exploiting nature since ages, but now the time has come for us to change.
                    Nature needs time to get adapted to human's unsatisfied needs. We can't change everyone, but we do can start by changing ourselves.
                    As an engineer, it's our job to invent, design, and build things for everyone. Let's do our best not to build anything which can harm our environment.
                </Paragraph>                
            </div>
        );
    }
}

const AboutStyled = injectSheet(styles)(About)
export default AboutStyled;