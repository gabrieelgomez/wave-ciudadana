// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import Home from "../screens/Home";
import UserProfile from "../screens/UserProfile";
import ResetPassword from "../screens/ResetPassword";

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
  },
  {
    path: "/reset-password",
    layout: DefaultLayout,
    component: ResetPassword
  }
];
