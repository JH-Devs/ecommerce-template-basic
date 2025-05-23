import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login"; 
import Register from "./pages/Register/Register";
import { loginPageProps } from "./pages/Login/loginPageProps";
import { registerPageProps } from "./pages/Register/registerPageProps";

function App() {
  return (
<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prihlaseni" element={<Login {...loginPageProps} />} />
    {  <Route path="/registrace" element={<Register {...registerPageProps} />} />}

     {/* <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes> 
    </>
  )
}

export default App
