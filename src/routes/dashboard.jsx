import Home from "views/Home/Home.jsx";
import Passenger from "views/Passenger/Passenger.jsx";
import Login from "views/Login/Login.jsx";

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
        path: "/login",
        name: "Login",
        component: Login
    },


    {redirect: true, path: "/", pathTo: "/home", name: "Home"}
];
export default dashRoutes;
