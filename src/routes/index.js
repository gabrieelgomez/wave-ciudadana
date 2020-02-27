// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import Home from "../views/HomeScreen";
import Profile from "../views/ProfileScreen";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/profile/:id",
    layout: DefaultLayout,
    component: Profile
  }
];
