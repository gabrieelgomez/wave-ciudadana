// Layout Types
import DefaultAppLayout from "../layouts/app";

// Route Pages
import Home from "../pages/app/Home";
import UserProfile from "../pages/app/UserProfile";
import ResetPassword from "../pages/app/ResetPassword";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultAppLayout,
    component: Home
  },
  {
    path: "/profile",
    layout: DefaultAppLayout,
    component: UserProfile
  },
  {
    path: "/reset-password",
    layout: DefaultAppLayout,
    component: ResetPassword
  }
];
