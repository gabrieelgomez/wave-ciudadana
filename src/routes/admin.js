// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminDashboard from "../pages/admin/Dashboard";
import AllUsers from "../pages/admin/AllUsers";
import NewUser from "../pages/admin/NewUser";
import UpdateUser from "../pages/admin/UpdateUser";
import ShowUser from "../pages/admin/ShowUser";
import AllCitizens from "../pages/admin/AllCitizens";
import NewCitizen from "../pages/admin/NewCitizen";
import ShowCitizen from "../pages/admin/ShowCitizen";
import UpdateCitizen from "../pages/admin/UpdateCitizen";

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
    component: ShowUser,
    exact: true
  },
  {
    path: "/admin/user/:id/update",
    layout: DefaultAdminLayout,
    component: UpdateUser,
    exact: true
  },
  {
    path: "/admin/citizens",
    layout: DefaultAdminLayout,
    component: AllCitizens,
    exact: true
  },
  {
    path: "/admin/citizen/new",
    layout: DefaultAdminLayout,
    component: NewCitizen,
    exact: true
  },
  {
    path: "/admin/citizen/:id",
    layout: DefaultAdminLayout,
    component: ShowCitizen,
    exact: true
  },
  {
    path: "/admin/citizen/:id/update",
    layout: DefaultAdminLayout,
    component: UpdateCitizen,
    exact: true
  },
];
