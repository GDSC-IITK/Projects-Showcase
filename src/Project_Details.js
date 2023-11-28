import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner_Exp } from "./components/Banner_Exp";
import { Footer } from "./components/Footer";
import { Projects_Kushh } from "./components/Project_Kushh";
import {useLocation} from 'react-router-dom';

function Project() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <a>{location.id}</a>
      <Banner_Exp/>

      <Footer />
    </div>
  );
}
export default Project