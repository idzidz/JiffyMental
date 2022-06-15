import Navbar from './Navbar';
import Home from './Home';
import BriefQ from './BriefQ';
import Login from './Login';
import About from './About';
import Doctor from './Doctor';
import Patient from './Patient';
import GADS7 from './GADS7';
import PSS from './PSS';
import PHQ9 from './PHQ9';
import Crisis from './Crisis';
import Recovery from './Recovery';
import Signup from './Signup';
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
                <Route path="/doctor" element={<Doctor></Doctor>} />
                <Route path="/patient" element={<Patient></Patient>} />
                <Route path="/gads7" element={<GADS7></GADS7>} />
                <Route path="/pss" element={<PSS></PSS>} />
                <Route path="/phq9" element={<PHQ9></PHQ9>} />
                <Route path="/crisis" element={<Crisis></Crisis>} />
                <Route path="/forgotPwd" element={<Recovery></Recovery>} />
                <Route path="/signup" element={<Signup></Signup>} />
            </Routes>

            {/*todo:   1. Create the 3 "eh" buttons on patient page + skip button*/}
            {/*        2. If "eh" buttons are pressed, lead to 3 wellness checks*/}
            {/*        3. Wellness checks are independent. The result of one does not affect the other.*/}
            {/*        4. Make them go through all 3 checks before login page is allowed*/}

        </div>
    );
}

export default App;
