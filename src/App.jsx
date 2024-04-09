import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './page/Sign';
import Login from './page/Login';
import Landingpage from "./page/Landingpage"
import AccountSetting from './page/AccountSetting';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage/>}/>
                <Route path="/sign" element={<Sign/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/account" element={<AccountSetting/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
