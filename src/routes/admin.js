// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminDashboard from "../components/admin/Dashboard";
import AdminUsers from "../components/admin/User";
import AdminUserNew from "../components/admin/User/New";

export default [
  {
    path: "/admin",
    layout: DefaultAdminLayout,
    component: AdminDashboard
  },
  {
    path: "/users",
    layout: DefaultAdminLayout,
    component: AdminUsers
  },
  {
    path: "/user/new",
    layout: DefaultAdminLayout,
    component: AdminUserNew
  }
];