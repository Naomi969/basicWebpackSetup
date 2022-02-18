import React from 'react';
// import { Header } from './components/Header';
// import Particles from "./components/layouts/Effect";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
// import "aos/dist/aos.css";
import { animation } from "./info";

 export function App() {
    // useEffect(() => {
    //     AOS.init({
    //       duration: animation.duration,
    //       once: animation.once,
    //       disable: !animation.animate,
    //     });
    //     // eslint-disable-next-line
    //   }, []);
    return(
      <div id='particles-js'>
      <Header />
      {/* <Particles
        /> */}
      <About />
      <Works />
      <Contact />
      </div>
    )
}

// export default App;