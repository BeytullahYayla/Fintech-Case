
import './App.css';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import Navbar from './layouts/Navbar';


function App() {
  return (
    <div className="App">
      <Container>
        <Navbar></Navbar>
        <br></br>
    
        <Dashboard></Dashboard>
      </Container>
      
     
    </div>
  );
}

export default App;
