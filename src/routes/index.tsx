import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import ListingPage from "../pages/HomePage/ListingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="listings" element={<ListingPage />} />
    </Route>
  )
);

export default router;
