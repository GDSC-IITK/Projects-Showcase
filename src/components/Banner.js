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

  return (
    <section className="banner" id="home">
      <Container>

        <Row style={{justifyContent:'space-between'}}>
          <div >
                <h1>{`Projects`} </h1>
                  <p style={{textAlign:'justify',textJustify:'inter-word'}}>Google Developer Student Clubs (GDSC) projects encompass a diverse range of innovative initiatives driven by the collaborative efforts of student developers. These projects reflect the GDSC mission to foster technological skills and problem-solving abilities among students while creating a positive impact on their communities and the world. GDSC projects often span various domains, including mobile app development, web applications, machine learning, and more.</p>
                  <div id="infoStrip" className="infoStrip">Winter Projects are here. Applications begin 8th December!!</div>

              </div>

          {/* <Col xs={12} md={6} xl={5}>
          <img src={banner} alt="Description of the image" className="img-fluid" style={{ width: '40%', height: 'auto', justifyItems:'center',alignItems:'center' }} />
        </Col> */}
          {/* <Col xs={12} md={6} xl={5}>
            <div class="loader">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              <div class="dot dot4"></div>
              <div class="dot dot5"></div>
              <div class="dot dot6"></div>
              <div class="dot dot7"></div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}
