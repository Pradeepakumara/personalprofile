
// import { Route, Router, Switch } from 'react-router-dom';
// import './App.scss';

import About from './components/portfolioContainer/about/About';
import Contact from './components/portfolioContainer/contactMe/Contact';
import Experience from './components/portfolioContainer/experience/Experience';
import Footer from './components/portfolioContainer/footer/Footer';
import Profile from './components/portfolioContainer/home/Profile';
import Navbar from './components/portfolioContainer/navbar/Navbar';
import Projects from './components/portfolioContainer/projects/Projects';

function App() {
  return (
    <>
    <Navbar />
    <Profile />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    
      {/* <Switch>
        <Route path='/' exact component={Profile} />
        <Route path='/about' exact component={About} />
        <Route path='/project' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/exp' exact component={Experience} />
      </Switch> */}
    </>
  );
}

export default App;
