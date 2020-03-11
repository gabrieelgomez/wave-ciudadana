import React from 'react';
// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminUsersList from "../components/admin/User/List";
import AdminDashboard from "../components/admin/Dashboard";

export default [
  {
    path: "/admin",
    layout: DefaultAdminLayout,
    component: AdminDashboard
  },
  {
    path: "/users",
    layout: DefaultAdminLayout,
    component: AdminUsersList
  }
];