import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import DoctorDetail from "./Pages/DoctorDetail";




function App() {
    return (
        <>
            <BrowserRouter>

                {/* ToastContainer */}
                <ToastContainers />

                {/* Routes */}
                <Routes>

                    {/* Web Routes */}
                    <Route path='/' element={<Base><Home title={"Home"} /></Base>} />
                    <Route path="/services" element={<Base> <Services title={"Services"} /> </Base>} />
                    <Route path="/about-us" element={<Base> <About title={"About Us"} /> </Base>} />
                    <Route path="/blogs" element={<Base> <Blogs title={"Blogs"} /> </Base>} />
                    <Route path="/contact-us" element={<Base> <Contact title={"Contact Us"} /> </Base>} />
                    <Route path="/doc" element={<Base> <DoctorDetail title={"Contact Us"} /> </Base>} />
             
                    <Route path='*' element={<PageNotFound404 />} />

                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
