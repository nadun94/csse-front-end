import Home from "views/Home/Home.jsx";
import Passenger from "views/Passenger/Passenger.jsx";

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

    {redirect: true, path: "/", pathTo: "/home", name: "Home"}
];
export default dashRoutes;
