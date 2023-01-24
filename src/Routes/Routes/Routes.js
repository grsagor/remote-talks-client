import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import FeedBack from "../../Pages/Home/FeedBack/FeedBack";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Meeting from "../../Pages/Meeting/Meeting";
import MassegeDahsbord from "../../Pages/Message/MassegeDashbord/MassegeDahsbord";
import Participants from "../../Pages/Participants/Participants";
import SignUp from "../../Pages/SignUp/SignUp";

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
				element: <Meeting></Meeting>,
			},
		],
	},
]);
export default router;
