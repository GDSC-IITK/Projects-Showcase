import { useState, useEffect } from "react";
import Papa from 'papaparse';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img from "../assets/img/1.jpg";
import Data from './unt.csv';
import styled from 'styled-components';

export const Banner_Exp = () => {

    const [projects, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(Data);
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csvData = decoder.decode(result.value);
            const parsedData = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true
            }).data;
            setData(parsedData);
        };
        fetchData();
    }, []);


    var data = JSON.parse(localStorage.getItem('indexy'));
    var namey = JSON.parse(localStorage.getItem('namey'));
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [namey.title, namey.title, namey.title];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    function hasDeadlinePassed(deadline) {
        const deadlineDate = new Date(deadline);
        const currentDate = new Date();
        return currentDate > deadlineDate;
    }

    function tagsCreate(tag) {
        var tags = [];
        tags = tag.split("&&");
        return tags;
    }
    
    const deadlineStatusList = projects.map(project => hasDeadlinePassed(project.deadline));
    const tagsList = projects.map(project => tagsCreate(project.tags));

    const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;

    const Tag = styled.div`
        background-color: #ccc;
        color: #333;
        padding: 5px 20px;
        border-radius: 15px;
        margin-right: 20px;
        margin-bottom: 10px;
        font-size: 20px;
    `;

    const Tag1 = styled.div`
        background-color: #D3D3D3;
        border-style: solid;
        border-color: #000000;
        border-width: 1px;
        color: #333;
        padding: 7px 40px;
        border-radius: 5px;
        margin-right: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 25px;
    `;

    const StyledSection = styled.section`
    // background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px; /* Adjust the padding as needed */
    background-color: rgba(255, 255, 255, 0.2); /* Adjust the last value for opacity (0 to 1) */
`;


    return (
        <section className="banner-exp" id="home">
            <StyledSection className="banner-exp" id="home">
            <Container>
                <Row className="aligh-items-center">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    {projects.map((project, index) => {
                                        if (index == data.index)
                                            return (
                                                <div>
                                                    <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                                                    <div id="projectsContainer">
                                                    </div>
                                                    <TagsContainer id="tagsContainer" className="tags">
                                                    {tagsList[index].map((tag, tagIndex) => (
                                                        <Tag key={tagIndex}>{tag}</Tag>
                                                    ))}
                                                </TagsContainer>
                                                    <div class="detail-heading"> Problem Statement </div>
                                                    <div class="detail-text" > {project.problem} </div>
                                                    <div class="detail-heading"> Proposed Solution </div>
                                                    <div class="detail-text" > {project.solution} </div>
                                                    <div class="detail-heading"> Tech Stacks </div>
                                                    <TagsContainer id="tagsContainer" className="tags">
                                                        {tagsList[index].map((tag, tagIndex) => (
                                                            <Tag1 key={tagIndex}>{tag}</Tag1>
                                                        ))}
                                                    </TagsContainer>
                                                    <div class="detail-heading"> Application Deadline </div>
                                                    <div class="detail-text" > {project.deadline}
                                                    </div>
                                                    {!deadlineStatusList[index]&&<a href={project.apply_link} id="applicationLink" class="detail-text" style={{color:'blue'}}>Apply Now</a>}
                                                    {deadlineStatusList[index]&&<div class="detail-text">Application Deadline is over</div>}

                                                    <div class="detail-heading"> Participants </div>
                                                    <div class="detail-text" > {project.number}
                                                    </div>
                                                    {
                                                        projects.link&&
                                                        <a href="#" class="detail-heading">Project Link</a>
                                                    }
                                                </div>
                                            )
                                    })}

                                </div>}
                        </TrackVisibility>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src={img} />
                    </Col> */}
                </Row>
            </Container>
            </StyledSection>
        </section>
    )
}
