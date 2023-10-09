import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React,{useState} from "react";
import { ProjectCard } from "./ProjectCard";
import {ProjectList} from "./ProjectList"
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DateFilter from './DateFilter';

export const Projects1 = () => {

  const projects = [
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg1,
      deadline: new Date('2023-10-7')
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg2,
      deadline: new Date('2023-10-7')
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg3,
      deadline: new Date('2023-10-7')
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg1,
      deadline: new Date('2023-10-7')
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg2,
      deadline: new Date('2023-10-7')
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg3,
      deadline: new Date('2023-10-7')
    },
  ];

    const [selectedOption, setSelectedOption] = useState('option1');
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [view,setView]=useState(true)
    const toggleView=()=>{
      setView(prev=>!prev)
    }
    const [filteredItems, setFilteredItems] = useState(projects);
    const handleFilter = (startDate, endDate) => {
      const filtered = projects.filter((item) => {
        const deadline = new Date(item.deadline);
        return (!startDate || deadline >= startDate) && (!endDate || deadline <= endDate);
      });
  
      setFilteredItems(filtered);
    };

  
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Google Developer Student Clubs (GDSC) projects encompass a diverse range of innovative initiatives driven by the collaborative efforts of student developers. These projects reflect the GDSC mission to foster technological skills and problem-solving abilities among students while creating a positive impact on their communities and the world. GDSC projects often span various domains, including mobile app development, web applications, machine learning, and more.</p>
                <div className="proj-filter-radio">
                  <DateFilter onFilter={handleFilter}/>


                  {/* <div className="proj-radio">
                    <label>
                      <input
                        type="radio"
                        className="radio"
                        id="radio-1"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                      />
                      Grid
                    </label>

                    <label>
                      <input
                      type="radio"
                      className="radio"
                      id="radio-2"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                      />
                      List
                    </label>
                  </div> */}

                  <div className="body1">
                    <div className="container1">
                      <form className="toggle">
                        <input type="radio" id="choice1" name="choice" value="creative" />
                        <label htmlFor="choice1">List</label>
                        <input type="radio" id="choice2" name="choice" value="productive" />
                        <label htmlFor="choice2">Grid</label>
                        <div id="flap">
                          <span className="content">productive</span>
                        </div>
                      </form>
                    </div>
                  </div>
          





                  {/* <div className="toggler">
                    <p className="toggler-grid">Grid</p>
                    <div className={view?"grid":"list"} onClick={toggleView}>
                      <div className="toggler-slider-circle"></div>
                    </div>
                    <p className="toggler-list">List</p>
                  </div> */}



                  
                  </div>
                  
                {selectedOption==='option1'?<Row>
                        {
                          filteredItems.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>:
                        <div>
                          {
                          filteredItems.map((project,index)=>{
                            return(
                              <ProjectList
                                key={index}
                                {...project}
                                index={index}
                              />
                            )
                          })
                        }
                      </div>}
                      
              </div>}
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
