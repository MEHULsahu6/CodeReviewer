import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Docs from './assets/Docs';
import './App.css';

function App() {
  const [code, setCode] = useState(`
    // When life throws an 'Error', use 'try...catch' to handle it gracefully.
    try { 
          throw new Error("Monday");
        }catch (e) {
            console.log("Coffee loaded."); 
          }`);
  const [review, setReview] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true);
    setReview(`*Fetching code review...*`);
    try {
      const response = await axios.post('https://code-reviewer-jade-eight.vercel.app/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error(error);
      setReview(`Failed to connect to backend server.`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            {/* Left Panel */}
            <div className="left">
              <div className="code">
                <Editor
                  value={code}
                  onValueChange={setCode}
                  highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%",
                    color: "#ccc",
                    overflowY: "auto"
                  }}
                />
              </div>
              <div
                onClick={isLoading ? null : reviewCode}
                className={`review ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? 'Reviewing...' : 'Review'}
              </div>
            </div>

            {/* Right Panel */}
            <div className="right">
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            </div>
          </main>
        } />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Docs Page */}
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
