import Home from "views/Home/Home.jsx";
import Fee from '../views/Fee/Fee.jsx';
import Passenger from "views/Passenger/Passenger.jsx";
import BusStopDistance from '../views/BusStopDistance/BusStopDistance.jsx';
import Addbus from "views/AddBus/Addbus.jsx";
import AccountDetails from "views/AccountDetails/AccountDetails.jsx"
import Demo from '../views/Demo/Demo.jsx';
import Recharge from '../views/Recharge/Recharge.jsx';

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
  path: "/AccountDetails",
  name: "AccountDetails",
  component: AccountDetails
},{
  path: "/demo",
  name: "Demo",
  component: Demo
},{
  path: "/demo",
  name: "Demo",
  component: Demo
},
    {
        path: "/route",
        name: "Route",
        component: Route
    },
    {
      path: "/Recharge",
      name: "Recharge",
      component: Recharge
  },

{


  path: "/AccountDetails",
  name: "AccountDetails",
  component: AccountDetails
},

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
