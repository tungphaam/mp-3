import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';

// components
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/achievements', element: <Achievements /> },
  { path: '/contact', element: <Contact /> },
  { path: '/education', element: <Education /> },
  { path: '/experience', element: <Experience /> },
  { path: '/projects', element: <Projects /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
