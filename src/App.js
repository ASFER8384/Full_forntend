import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dash from "./Pages/Dashboard/Dash.js";
import Forget from "./Pages/Forgetpassword/Forget.js";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";
import {useState} from "react"


function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Login email={email} setEmail={setEmail} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dash' element={<Dash email={email}/>} />
          <Route path='/forgetpassword' element={<Forget  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
