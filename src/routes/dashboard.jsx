import Home from "views/Home/Home.jsx";
import Fee from '../views/Fee/Fee.jsx';
var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path:"/fee",
    name:"Fee",
    component:Fee
  },
 
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
