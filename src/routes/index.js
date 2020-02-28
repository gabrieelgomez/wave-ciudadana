// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import Home from "../screens/Home";
import UserProfile from "../screens/UserProfile";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/profile",
    layout: DefaultLayout,
    component: UserProfile
  }
];
