import styles from './App.module.css';
import { NavBar } from './components/NavBar/NavBar';
import { Person } from './components/Person/Person';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';

function App() {
  

  return (
    <div className={styles.App}>
      <NavBar/>
      <Person/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
