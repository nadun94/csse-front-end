import Home from "views/Home/Home.jsx";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
 
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
