import { useContext } from 'react';
import './App.css';
import { DataContext } from './Contexts/DataContext';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom"
import Todos from './Pages/Todos';
import OpenTodo from './Pages/OpenTodo';
import DoneTodo from './Pages/DoneTodo';
import ExpandTodo from './Components/ExpandTodo';

function App() {
  const {error} = useContext(DataContext);

  return (
    <div className="App">
      {!error && <Navbar/>}
      <div>
        <Routes>
            <Route path="/" element={<Todos/>}/>
            <Route path="/opentodo" element={<OpenTodo/>}/>
            <Route path="/donetodo" element={<DoneTodo/>}/>
            <Route path="/expandtodo/:todoId" element={<ExpandTodo/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
