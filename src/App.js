import './App.css';
// import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Experience } from './Experience';
import { BackgroundAnimation } from './BackgroundAnimation';

function App() {
  /* 
  const [theme, setTheme] = useState(0);

  function toggleTheme () {
    theme === 1 ? setTheme(0) : setTheme(1);
  }
  

    useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  */

  const exps = [
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxryUOrLyJrZIC2BLcJMx9OdoQPC3vEQqrkw&s', name: "ibm", title: 'software engineer intern', date: 'may 2026 - aug. 2026', color: 'teal'},
    {img: 'https://pbs.twimg.com/profile_images/1414735088621813760/3NZOfCUw_400x400.png', name: "scale ai", title: 'gen ai - technical advisor', date: 'oct. 2025 - may 2026', color: 'pink'},
    {img: 'https://www.hstoday.us/wp-content/uploads/2019/09/mantech.jpg', name: "mantech", title: 'software engineer intern', date: 'dec. 2024 - mar. 2025', color: 'red'},
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LrCGpehZ9ga1kHGwL7quOAMGAyigDWEjPw&s', name: "virginia tech", title: 'b.s. in computer science', date: 'aug. 2023 - dec. 2026', color: 'orange'},
  ]

  return (
    <div className="App">
      <BackgroundAnimation />
      <div className='Header'>
        {/* <button onClick={toggleTheme}>
          <FaMoon></FaMoon>
        </button>
        */}
      </div>
      <div className="About">
          <span className='pfp'><img src="/pfp.jpg" alt="face"></img></span>
          <h2>hi, i'm landon</h2>
          <div className="desc">
          <p>i'm a junior at <span className='college'>virginia tech</span> studying computer science.</p>
          <p>
            i'm interested in infrastructure, distributed systems, and full-stack development.
            in my free time i enjoy playing basketball, watching sports, and reading.
          </p>
            <div className='links'>
              <a href="https://github.com/landonDuba" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/landonduba/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:landonduba@vt.edu" target="_blank" rel="noreferrer">
                <MdEmail />
              </a>
            </div>
          </div>
      </div>
      <div className='Experiences'>
        <h1>experiences</h1>
        {exps.map((curr_exp) => (
          <Experience exp={curr_exp}/>
        ))}
      </div>
    </div>
  );
}

export default App;
