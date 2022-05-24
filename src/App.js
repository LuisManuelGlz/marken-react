import { useState } from 'react';
import { marked } from 'marked';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('# hello');

  return (
    <div>
      <nav className='navigation'>
        <img className='logo' src={logo} alt="logo" />
      </nav>
      <div className="container">
        <div className='input-container'>


          <textarea
            className="input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        <div className='viewer' dangerouslySetInnerHTML={{ __html: marked(input) }} />
      </div>
    </div>
  );
}

export default App;
