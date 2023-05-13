import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes';


function App() {

  const user = 123;

  const [isMenu, setIsMenu] = useState(false)
  
  const handleMenu = () => {
    setIsMenu(!isMenu);
  }

  return (
    <div className="App">
      <Router>
        <Navbar user={user} isMenu = {isMenu}  handleMenu={handleMenu}/>
        <AllRoutes user={user} isMenu={isMenu}/>
      </Router>
    </div>
  );
}

export default App;
