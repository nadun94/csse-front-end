import Home from "views/Home/Home.jsx";
import Fee from '../views/Fee/Fee.jsx';
import Passenger from "views/Passenger/Passenger.jsx";
import Route from "views/Route/Route.jsx";
var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/fee",
    name: "Fee",
    component: Fee
  },
  {
    path: "/passenger",
    name: "Passenger",
    component: Passenger
  },
    {
        path: "/route",
        name: "Route",
        component: Route
    },





  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
