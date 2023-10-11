import { useState, useEffect } from "react";
import Papa from 'papaparse';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img from "../assets/img/1.jpg";
import Data from './unt.csv';

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

    return (
        <section className="banner-exp" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    {projects.map((project, index) => {
                                        if (index == data.index)
                                            return (
                                                <div>
                                                    <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                                                    <div class="detail-heading"> Problem Statement </div>
                                                    <div class="detail-text" > {project.problem} </div>
                                                    <div class="detail-heading"> Proposed Solution </div>
                                                    <div class="detail-text" > {project.solution} </div>
                                                    <div class="detail-heading"> Time-Line </div>
                                                    <div class="detail-text" > {project.deadline}
                                                    </div>
                                                    <div class="detail-heading"> Participants </div>
                                                    <div class="detail-text" > {project.number}
                                                    </div>
                                                </div>
                                            )
                                    })}

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={img} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
