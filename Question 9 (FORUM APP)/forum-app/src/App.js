import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Answers from './Pages/Answers';
import Questions from './Pages/Questions';
// Create a forum app in React with different routes for:

// Home page
// Questions page
// Answer page
// The Home page shows a welcome message with the user's name. The Questions page will list all the questions with 3 buttons: upvote, downvote, and answers. On click of answers button, Answer page should display with that particular question and answer.
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/answer/:questionId" element={<Answers/>}/>
        <Route path="/question" element={<Questions/>}/>
      </Routes>
    </div>
  );
}

export default App;
