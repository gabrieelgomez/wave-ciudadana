// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminDashboard from "../components/admin/Dashboard";
import AllUsers from "../pages/admin/AllUsers";
import NewUser from "../pages/admin/NewUser";
import UpdateUser from "../pages/admin/UpdateUser";
import AdminUserShow from "../components/admin/User/Show";

export default [
  {
    path: "/admin",
    layout: DefaultAdminLayout,
    component: AdminDashboard,
    exact: true
  },
  {
    path: "/admin/users",
    layout: DefaultAdminLayout,
    component: AllUsers,
    exact: true
  },
  {
    path: "/admin/user/new",
    layout: DefaultAdminLayout,
    component: NewUser,
    exact: true
  },
  {
    path: "/admin/user/:id",
    layout: DefaultAdminLayout,
    component: AdminUserShow,
    exact: true
  },
  {
    path: "/admin/user/:id/update",
    layout: DefaultAdminLayout,
    component: UpdateUser,
    exact: true
  }
];
