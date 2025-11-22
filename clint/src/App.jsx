
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GenerateBill from "./components/pages/GenerateBill";
import EnterData from "./components/pages/MonthlyRecord";
import ManageSchools from "./components/pages/ManageSchools";
import MangeProduct from "./components/pages/MangeProduct";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <GenerateBill />,
        },
        {
          path: "/enter-Data",
          element: <EnterData />,
        },
        {
          path: "/manage-schools",
          element: <ManageSchools />,
        },
        {
          path: "/manage-product",
          element: <MangeProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
