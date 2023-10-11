import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects} from "./components/Projects";
import { Footer } from "./components/Footer";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects/>
      <Footer />
    </div>
  );
}

// /** EXTRA JS Here  */
// const st = {};

// st.flap = document.querySelector('#flap');
// st.toggle = document.querySelector('.toggle');

// st.choice1 = document.querySelector('#choice1');
// st.choice2 = document.querySelector('#choice2');

// st.flap.addEventListener('transitionend', () => {

//     if (st.choice1.checked) {
//         st.toggle.style.transform = 'rotateY(-15deg)';
//         setTimeout(() => st.toggle.style.transform = '', 400);
//     } else {
//         st.toggle.style.transform = 'rotateY(15deg)';
//         setTimeout(() => st.toggle.style.transform = '', 400);
//     }

// })

// st.clickHandler = (e) => {

//     if (e.target.tagName === 'LABEL') {
//         setTimeout(() => {
//             st.flap.children[0].textContent = e.target.textContent;
//         }, 250);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
// });

// document.addEventListener('click', (e) => st.clickHandler(e));

// /** EXTRA JS Here  */

export default Home;
