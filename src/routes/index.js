// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import Home from "../views/HomeScreen";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  }
];
