import Home from "views/Home/Home.jsx";
import Passenger from "views/Passenger/Passenger.jsx";
import Addbus from "views/AddBus/Addbus.jsx";

var dashRoutes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/passenger",
        name: "Passenger",
        component: Passenger
    },
    {
        path: "/addbus",
        name: "Addbus",
        component: Addbus
    },

    {redirect: true, path: "/", pathTo: "/home", name: "Home"}
];
export default dashRoutes;
