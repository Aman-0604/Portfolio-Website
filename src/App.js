import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main">
        <div className="left_main">
            <Navbar />
        </div>
        <div className="right_main">
            <Main />
        </div>
    </div>
  );
}

export default App;
