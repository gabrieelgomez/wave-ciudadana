// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminDashboard from "../components/admin/Dashboard";
import AllUsers from "../pages/admin/AllUsers";
import AdminUserNew from "../components/admin/User/New";
import AdminUserUpdate from "../components/admin/User/Update";
import AdminUserShow from "../components/admin/User/Show";

export default [
  {
    path: "/admin",
    layout: DefaultAdminLayout,
    component: AdminDashboard
  },
  {
    path: "/users",
    layout: DefaultAdminLayout,
    component: AllUsers
  },
  {
    path: "/user/new",
    layout: DefaultAdminLayout,
    component: AdminUserNew
  },
  {
    path: "/user/:id",
    layout: DefaultAdminLayout,
    component: AdminUserShow
  },
  {
    path: "/user/:id/update",
    layout: DefaultAdminLayout,
    component: AdminUserUpdate
  }
];
