import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import FeedBack from "../../Pages/Home/FeedBack/FeedBack";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Meeting from "../../Pages/Meeting/Meeting";
import Massenger from "../../Pages/Message/MassegeDashbord/Massenger";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import Participants from "../../Pages/Participants/Participants";
import SignUp from "../../Pages/SignUp/SignUp";
import generateMuiTheme from "../../Pages/Meeting/mui/theme";
import { ThemeProvider } from "@material-ui/styles";
import SharminDetails from "../../Pages/About/Details/SharminDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NewAboutSection from "../../Pages/NewAbout/NewAbout";
import WhiteBoard from "../../Pages/Meeting/WhiteBoard/WhiteBoard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Contact from "../../Pages/Contact/Contact";


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
				loader: async () => {
					return fetch("https://remote-talks-server.vercel.app/users");
				},
				element: <Participants></Participants>,
			},
			{
				path: "/about",
				element: <NewAboutSection></NewAboutSection>,
			},
			{
				path: "/teams",
				element: <About></About>,
			},
			{
				path: "/sharminDetails",
				element: <SharminDetails></SharminDetails>,
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
				path: "/review",
				element: <FeedBack></FeedBack>,
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<MyProfile></MyProfile>
					</PrivateRoute>
				),
			},
			{
				path: "/contact",
				element: <Contact></Contact>
			}
		],
	},
	{
		path: "/meeting",
		element: (
			<ThemeProvider theme={generateMuiTheme()}>
				<Meeting></Meeting>
			</ThemeProvider>
		),
	},
	{
		path: "/whiteboard",
		element: (
			<div className="bg-white">
				<WhiteBoard />
			</div>
		),
	},
	{
		path: "/message",
		element: <Massenger></Massenger>,
	},
	{
		path: "/*",
		element: <ErrorPage></ErrorPage>
	}
]);
export default router;
