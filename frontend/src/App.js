import ProtectedRoutes from './utils/ProtectedRoutes';
import Layout from './layout/Layout';
import Login from './pages/Login';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Login" element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<div>Home</div>}/>
        </Route>
      </Route>
    </Route>
  )  
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
