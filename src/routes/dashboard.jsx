import Home from "views/Home/Home.jsx";
import Passenger from "views/Passenger/Passenger.jsx";
import PassengerView from 'views/PassengerView/PassengerView.jsx';
import JourneyHistoryView from 'views/JourneyHistoryView/JourneyHistoryView.jsx';
import RouteHistoryView from 'views/RouteHistoryView/RouteHistoryView.jsx';

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
        path:"/PassengerView",
        name:"PassengerView",
        component:PassengerView
    },
    {
        path:"/JourneyHistoryView",
        name:"JourneyHistoryView",
        component:JourneyHistoryView
    },
    {
        path:"/RouteHistoryView",
        name:"RouteHistoryView",
        component:RouteHistoryView
    },

    {redirect: true, path: "/", pathTo: "/home", name: "Home"}
];
export default dashRoutes;
