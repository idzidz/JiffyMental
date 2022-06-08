import Navbar from './Navbar';
import Home from './Home';
import BriefQ from './BriefQ';
import Login from './Login';
import About from './About';
import {Routes, Route} from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/briefQuestionnaire" element={<BriefQ></BriefQ>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/about" element={<About></About>} />
            </Routes>

            {/*<Navbar></Navbar>*/}
            {/*<div className="content">*/}
            {/*    <Home></Home>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
