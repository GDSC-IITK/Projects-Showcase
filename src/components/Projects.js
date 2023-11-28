import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectList } from "./ProjectList"
import projImg1 from "../assets/img/logobg.png";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DateFilter from './DateFilter';
import Papa from 'papaparse';
import { useEffect } from 'react';
import Data from './unt.csv';

export const Projects = () => {

    //   const projects = [
    //     {
    //       title: "Web Development",
    //       description: "Design & Development",
    //       imgUrl: projImg1,
    //       deadline: new Date('2023-10-7')
    //     },
    //     {
    //       title: "Web Development",
    //       description: "Design & Development",
    //       imgUrl: projImg2,
    //       deadline: new Date('2023-10-7')
    //     },
    //     {
    //       title: "Web Development",
    //       description: "Design & Development",
    //       imgUrl: projImg3,
    //       deadline: new Date('2023-10-7')
    //     },
    //     {
    //       title: "Web Development",
    //       description: "Design & Development",
    //       imgUrl: projImg1,
    //       deadline: new Date('2023-10-7')
    //     },
    //     {
    //       title: "Web Development",
    //       description: "Design & Development",
    //       imgUrl: projImg2,
    //       deadline: new Date('2023-10-7')
    //     },
    //     {
    //       title: "Web Development",
    //       description: "Design & Development",
    //       imgUrl: projImg3,
    //       deadline: new Date('2023-10-7')
    //     },
    //   ];

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

    const [selectedOption, setSelectedOption] = useState('option1');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [view, setView] = useState(true)
    const toggleView = () => {
        setView(prev => !prev)
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
                                <div style={{flexDirection:'column'}}>
                                    <div className="proj-filter-radio">
                                        {/* <DateFilter onFilter={handleFilter} /> */}

                                        {/* <div className="toggler">
                                            <p className="toggler-grid">Grid</p>
                                            <div className={view ? "grid" : "list"} onClick={toggleView}>
                                                <div className="toggler-slider-circle"></div>
                                            </div>
                                            <p className="toggler-list">List</p>
                                        </div> */}
                                    </div>

                                    { <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row> 
                                    // :
                                    //     <div>
                                    //         {
                                    //             projects.map((project, index) => {
                                    //                 return (
                                    //                     <ProjectList
                                    //                         key={index}
                                    //                         {...project}
                                    //                         index={index}
                                    //                     />
                                    //                 )
                                    //             })
                                    //         }
                                    //     </div>
                                        }

                                </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}