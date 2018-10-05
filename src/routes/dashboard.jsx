import Home from "views/Home/Home.jsx";
import Fee from '../views/Fee/Fee.jsx';
import Passenger from "views/Passenger/Passenger.jsx";
import BusStopDistance from '../views/BusStopDistance/BusStopDistance.jsx';
import Addbus from "views/AddBus/Addbus.jsx";
import Demo from '../views/Demo/Demo.jsx';
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
    path: "/bus-stop-distance",
    name: "Bus Stop Distance",
    component: BusStopDistance
  },

  {
    path: "/addbus",
    name: "Addbus",
    component: Addbus
},
{
  path: "/demo",
  name: "Demo",
  component: Demo
},

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
