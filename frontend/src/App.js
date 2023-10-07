import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';


const router = createBrowserRouter([
  {path: '/', element: <HomePage/>}
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
