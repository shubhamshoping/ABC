








// ..........Original codes.......................................................................



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Mainpage from "./Mainpage";
// import Admin from "./Admin"; // Replace with actual component path
// import Customer from "./Customer"; // Replace with actual component path
// import Adminhome from "./Adminhome";
// import Adminresister from "./Adminresister";
// import Adminlogin from "./Adminlogin";
// import Admingmail from "./Admingmail"
// import Adminpassword from "./Adminpassword";
// import Admindelete from "./Admindelete";
// import Customerresister from "./Customerresister";
// import Customerlogin from "./Customerlogin";
// import Customergmail from "./Customergmail";
// import Customerpassword from "./Customerpassword";
// import Productpage from "./Productpage";
// import Addtocartpage from "./Addtocartpage";



// export default function App() {
//   return (
//     <Router>
//       {/* Navigation Links */}
      

//       {/* Routes */}
//       <Routes>

//       <Route path="/Adminhome" element={<Adminhome />} />
//           <Route path="/Adminresister" element={<Adminresister />} />
//           <Route path="/Adminlogin" element={<Adminlogin />} />
//           <Route path="/Admingmail" element={<Admingmail />} />
//            <Route path="/Adminpassword" element={<Adminpassword />} />
//            <Route path="/Admindelete" element={<Admindelete />} />
//            <Route path="/Customerresister" element={<Customerresister />} />
//            <Route path="/Customerlogin" element={<Customerlogin />} />
//            <Route path="/Customergmail" element={<Customergmail />} />
//            <Route path="/Customerpassword" element={<Customerpassword />} />
//            <Route path="/Productpage" element={<Productpage />} />
//            <Route path="/Addtocartpage" element={<Addtocartpage />} />
//            <Route path="/Mainpage" element={<Mainpage />} />

//         <Route path="/" element={<Mainpage />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/customer" element={<Customer />} />
//       </Routes>
//     </Router>
//   );
// }



















//  ..................main  important code.............................................................................................





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Admin from "./Admin"; // Replace with actual component path
import Customer from "./Customer"; // Replace with actual component path
import Adminhome from "./Adminhome";
import Adminresister from "./Adminresister";
import Adminlogin from "./Adminlogin";
import Admingmail from "./Admingmail"
import Adminpassword from "./Adminpassword";
import Admindelete from "./Admindelete";
import Customerresister from "./Customerresister";
import Customerlogin from "./Customerlogin";
import Customergmail from "./Customergmail";
import Customerpassword from "./Customerpassword";
import Productpage from "./Productpage";
import Addtocartpage from "./Addtocartpage";



export default function App() {
  return (
    <Router>
      {/* Navigation Links */}
      

      {/* Routes */}
      <Routes>

      <Route path="/Adminhome" element={<Adminhome />} />
          <Route path="/Adminresister" element={<Adminresister />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Admingmail" element={<Admingmail />} />
           <Route path="/Adminpassword" element={<Adminpassword />} />
           <Route path="/Admindelete" element={<Admindelete />} />
           <Route path="/Customerresister" element={<Customerresister />} />
           <Route path="/Customerlogin" element={<Customerlogin />} />
           <Route path="/Customergmail" element={<Customergmail />} />
           <Route path="/Customerpassword" element={<Customerpassword />} />
           <Route path="/Productpage" element={<Productpage />} />
           <Route path="/Addtocartpage" element={<Addtocartpage />} />
           <Route path="/Mainpage" element={<Mainpage />} />

        <Route path="/" element={<Mainpage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Router>
  );
}















