import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import FeedBack from "../../Pages/Home/FeedBack/FeedBack";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Meeting from "../../Pages/Meeting/Meeting";
import Message from "../../Pages/Message/Message";
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
				path: "/message",
				element: <Message></Message>,
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
				element: <Meeting></Meeting>
			},

		],
	}
]);
export default router;
