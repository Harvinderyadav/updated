import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Addcontact from './components/addcontact';
import Navbarcomp from './components/navbarcomp';
import Contacts from './components/contacts';
import {Routes,Route,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <Navbarcomp />

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Contacts />} />
   
    <Route path='/add' element={<Addcontact />} />
    <Route path="/contact" element={<Contacts />} />
    {/* <Route path="/signout" element={<Signout />} /> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
