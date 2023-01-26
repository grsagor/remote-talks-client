import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import FeedBack from "../../Pages/Home/FeedBack/FeedBack";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Meeting from "../../Pages/Meeting/Meeting";
import MassegeDahsbord from "../../Pages/Message/MassegeDashbord/MassegeDahsbord"
import MyProfile from "../../Pages/MyProfile/MyProfile";
import Participants from "../../Pages/Participants/Participants";
import SignUp from "../../Pages/SignUp/SignUp";
import generateMuiTheme from "../../Pages/Meeting/mui/theme";
import { ThemeProvider } from "@material-ui/styles";
import SharminDetails from "../../Pages/About/Details/SharminDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import generateMuiTheme from "../../Pages/Meeting/mui/theme";
import { ThemeProvider } from "@material-ui/styles";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: (
					<>
						<Home></Home>
					</>
				),
			},
			{
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "/participants",
				element: <Participants></Participants>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/sharminDetails",
				element: <SharminDetails></SharminDetails>,
			},
			{
				path: "/message",
				element: <MassegeDahsbord></MassegeDahsbord>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/meeting",
				element: <ThemeProvider theme={generateMuiTheme()}><Meeting></Meeting></ThemeProvider>,
			},
			{
				path: "/profile",
				element: <MyProfile></MyProfile>,
			},
		],
	},
]);
export default router;
