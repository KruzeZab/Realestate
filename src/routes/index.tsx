import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import ListingDetailPage from "../pages/ListingDetailPage";
import ListingPage from "../pages/ListingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="listings/" element={<ListingPage />} />
      <Route path="listings/:id/" element={<ListingDetailPage />} />
    </Route>
  )
);

export default router;
