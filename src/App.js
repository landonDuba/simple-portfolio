import './App.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState(0);

  function toggleTheme () {
    theme === 1 ? setTheme(0) : setTheme(1);
  }

    useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <button onClick={toggleTheme}>light mode</button>
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
              <a href="https://github.com/landonDuba" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/landonDuba" target="_blank" rel="noreferrer">
                <MdEmail />
              </a>
            </div>
          </div>
      </div>
      <div className='Experiences'>
        <h1>Experiences</h1>
      </div>
    </div>
  );
}

export default App;
