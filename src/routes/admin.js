// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminDashboard from "../pages/admin/Dashboard";

// Users
import AllUsers from "../pages/admin/users/AllUsers";
import NewUser from "../pages/admin/users/NewUser";
import UpdateUser from "../pages/admin/users/UpdateUser";
import ShowUser from "../pages/admin/users/ShowUser";

// Users
import AllCitizens from "../pages/admin/citizens/AllCitizens";
import NewCitizen from "../pages/admin/citizens/NewCitizen";
import ShowCitizen from "../pages/admin/citizens/ShowCitizen";
import UpdateCitizen from "../pages/admin/citizens/UpdateCitizen";

// Users
import AllCountries from "../pages/admin/countries/AllCountries";
import NewCountry from "../pages/admin/countries/NewCountry";
import ShowCountry from "../pages/admin/countries/ShowCountry";
import UpdateCountry from "../pages/admin/countries/UpdateCountry";

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
  {
    path: "/admin/countries",
    layout: DefaultAdminLayout,
    component: AllCountries,
    exact: true
  },
  {
    path: "/admin/country/new",
    layout: DefaultAdminLayout,
    component: NewCountry,
    exact: true
  },
  {
    path: "/admin/country/:id",
    layout: DefaultAdminLayout,
    component: ShowCountry,
    exact: true
  },
  {
    path: "/admin/country/:id/update",
    layout: DefaultAdminLayout,
    component: UpdateCountry,
    exact: true
  },
];
