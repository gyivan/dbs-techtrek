import ProtectedRoutes from "./utils/ProtectedRoutes";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import CreateClaim from "./pages/CreateClaim";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import EditClaim from "./pages/EditClaim";
import Claims from "./pages/Claims";
import InsurancePolicies from "./pages/InsurancePolicies";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/Login" element={<Login />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<div><InsurancePolicies></InsurancePolicies></div>} />
                    <Route path="/claim" element={<Claims />} />
					<Route path="/edit-claim/:id" element={<EditClaim />} />
                    <Route path="/create-claim/:id" element={<CreateClaim />} />
				</Route>
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
