import './App.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Experience } from './Experience';

function App() {
  const [theme, setTheme] = useState(0);

  function toggleTheme () {
    theme === 1 ? setTheme(0) : setTheme(1);
  }

    useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const exps = [
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxryUOrLyJrZIC2BLcJMx9OdoQPC3vEQqrkw&s', name: "IBM", title: 'Software Engineering Intern', date: 'May 2026 - Aug. 2026'},
    {img: 'https://pbs.twimg.com/profile_images/1414735088621813760/3NZOfCUw_400x400.png', name: "Scale AI", title: 'GenAI - Technical Advisor Intern', date: 'Oct. 2025 - May 2026'},
    {img: 'https://www.hstoday.us/wp-content/uploads/2019/09/mantech.jpg', name: "ManTech", title: 'Software Engineering Intern', date: 'Dec. 2024 - Mar. 2025'},
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LrCGpehZ9ga1kHGwL7quOAMGAyigDWEjPw&s', name: "Virginia Tech", title: 'BS in Computer Science', date: 'Aug. 2023 - Dec. 2026'},
  ]

  return (
    <div className="App">
      <div className='Header'>
        <button onClick={toggleTheme}>
          <FaMoon></FaMoon>
        </button>
      </div>
      <div className="About">
          <span className='pfp'><img src="/pfp.jpg" alt="face"></img></span>
          <h2>Hi, I'm Landon</h2>
          <div className="desc">
          <p>I'm a junior at Virginia Tech studying Computer Science.</p>
          <p>
            I'm interested in infrastructure, distributed systems, and full-stack development.
            In my free time I enjoy playing basketball, watching sports, and reading.
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
        <h1>Experiences</h1>
        {exps.map((curr_exp) => (
          <Experience exp={curr_exp}/>
        ))}
      </div>
    </div>
  );
}

export default App;
