import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import banner from '../assets/img/banner.png'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Explore", "Enjoy", "Innovate", ];
  const period = 2000;

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

  const targetDate = new Date('2023-12-08T20:00:00').getTime();

  const calculateTimeRemaining = () => {
    const currentDate = new Date().getTime();
    return targetDate - currentDate;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  const isTimerReached = timeRemaining <= 0;

  return (
    <section className="banner" id="home">
      <Container>

        <Row style={{justifyContent:'space-between'}}>
        <div>
          <h1>{`Projects`} </h1>
          <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Google Developer Student Clubs (GDSC) projects encompass a diverse range of innovative initiatives driven by the collaborative efforts of student developers. These projects reflect the GDSC mission to foster technological skills and problem-solving abilities among students while creating a positive impact on their communities and the world. GDSC projects often span various domains, including mobile app development, web applications, machine learning, and more.
          </p>
          <div id="infoStrip" className="infoStrip">
            {isTimerReached ? (
              <div >
                Winter Projects are here. <a style={{color:'green'}} href="https://docs.google.com/forms/d/e/1FAIpQLSfUKFZU5VNrP2SBrVy2BuWS-xP-1ieSPxX5Rze6JJD4wy3lpA/viewform" target="blank">Apply here!</a>
              </div>
            ) : (
              <div >
                Winter Projects are coming. <a style={{color:'white'}}>Applications begin in: {days}d {hours}h {minutes}m {seconds}s</a>
              </div>
            )}
          </div>
        </div>
        </Row>
      </Container>
    </section>
  )
}
