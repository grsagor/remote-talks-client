import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
