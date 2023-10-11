import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailed } from "./ProjectDetailed";
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects_Kushh = () => {
    const project =
        {
          title: "Web Development",
          description: "Design & Development",
          deadline: "10th September",
          participants : "Ron Weasley",
          imgUrl: projImg1,
        }
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
            < ProjectDetailed {...project} />
        </Row>
      </Container>
    </section>
  )
}
