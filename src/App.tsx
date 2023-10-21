import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePageError from "./pages/SinglePageError";
import Error from "./pages/Error";
import HomeLayout from "./pages/HomeLayout";
import Home from "./components/Home";
import MintPage from "./pages/MintPage";
import StakePage from "./pages/StakePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/mint",
        element: <MintPage />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/stake",
        element: <StakePage />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
