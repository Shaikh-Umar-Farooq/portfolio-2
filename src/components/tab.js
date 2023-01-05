import React from 'react';
import Project from './project';
import dicegame from "../images/dicegame.png";
import drumkit from "../images/drumkit.png";
import simongame from "../images/simon-img.png";
import webdevwebsite from "../images/webdevwebsite.png";
import classroom from "../images/classroom.png";
import acmevents from "../images/acmevents.png";
import markdown from "../images/markdown.png";



const Tabcontent = (props) => {



    return (
        <>
            <div className="tabs">
                <Tabs>
                    <Tab label="Front-end work">
                        <div class="project-container">
                            <div class="project-flex">
                                <Project img={webdevwebsite} url="https://acm-webdev-site.netlify.app/" name="Web dev guide" language="HTML:57.5% CSS:21.2% JS:21.3%"></Project>
                                <Project img={markdown} url="https://shaikh-umar-farooq.github.io/markdown/" name="Markdown editor" language="HTML:34.6% CSS:42.6% JS:22.8%"></Project>


                                <Project img={simongame} url="https://shaikh-umar-farooq.github.io/simon-game/" name="Simon Game" language="HTML:44.4% CSS:21.3% JS:34.3%"></Project>
                                <Project img={drumkit} url="https://shaikh-umar-farooq.github.io/drum-kit/" name="Drum Kit" language="HTML:36.8% CSS:34.6% JS:28.6%"></Project>
                                <Project img={dicegame} url="https://shaikh-umar-farooq.github.io/dicegame/" name="Dice Game" language="HTML:35.9% CSS:24.6% JS:39.5%"></Project>


                            </div>
                        </div>
                    </Tab>
                    <Tab label="UI/UX work">
                        <div class="project-container">
                            <div class="project-flex">
                                <Project img={classroom} url="https://www.figma.com/file/xwanx9WBOenr9m5w8XetvR/classroom?node-id=0%3A1&t=TdOREl81RTtGExSa-1" name="Classroom" language="Classroom is a website to connect students with their teachers. students can give practice quizzes as well as evaluative quizzes too. Teachers and students can view their stats and rank. "></Project>
                                <Project img={acmevents} url="https://www.figma.com/file/lvXD9BuKUOrYW09VKN74o5/acm-event-app?node-id=0%3A1&t=ThjgzeKZ7PKNx3Mt-1" name="ACM events" language="ACM events is an app to inform students about upcoming events in organized way, they can view details and can register for any event of their choice. "></Project>

                            </div>
                        </div>
                    </Tab>

                </Tabs>
            </div>


        </>
    );


}


class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default Tabcontent;