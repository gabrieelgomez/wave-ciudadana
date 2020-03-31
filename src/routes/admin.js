// Layout Types
import DefaultAdminLayout from "../layouts/admin";
import AdminDashboard from "../pages/admin/Dashboard";

// Users
import AllUsers from "../pages/admin/users/AllUsers";
import NewUser from "../pages/admin/users/NewUser";
import UpdateUser from "../pages/admin/users/UpdateUser";
import ShowUser from "../pages/admin/users/ShowUser";

// Citizens
import AllCitizens from "../pages/admin/citizens/AllCitizens";
import NewCitizen from "../pages/admin/citizens/NewCitizen";
import ShowCitizen from "../pages/admin/citizens/ShowCitizen";
import UpdateCitizen from "../pages/admin/citizens/UpdateCitizen";

// Countries
import AllCountries from "../pages/admin/countries/AllCountries";
import NewCountry from "../pages/admin/countries/NewCountry";
import ShowCountry from "../pages/admin/countries/ShowCountry";
import UpdateCountry from "../pages/admin/countries/UpdateCountry";

// Candidates
import AllTypeCandidates from "../pages/admin/type_candidates/AllTypeCandidates";
import NewTypeCandidate from "../pages/admin/type_candidates/NewTypeCandidate";
import ShowTypeCandidate from "../pages/admin/type_candidates/ShowTypeCandidate";
import UpdateTypeCandidate from "../pages/admin/type_candidates/UpdateTypeCandidate";

// ProposalCategories
import AllProposalCategories from "../pages/admin/proposal_categories/AllProposalCategories";
import NewProposalCategory from "../pages/admin/proposal_categories/NewProposalCategory";
import ShowProposalCategory from "../pages/admin/proposal_categories/ShowProposalCategory";
import UpdateProposalCategory from "../pages/admin/proposal_categories/UpdateProposalCategory";

// ProposalCategories
import AllPollCategories from "../pages/admin/poll_categories/AllPollCategories";
import NewPollCategory from "../pages/admin/poll_categories/NewPollCategory";
import ShowPollCategory from "../pages/admin/poll_categories/ShowPollCategory";
import UpdatePollCategory from "../pages/admin/poll_categories/UpdatePollCategory";

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


  {
    path: "/admin/type_candidates",
    layout: DefaultAdminLayout,
    component: AllTypeCandidates,
    exact: true
  },
  {
    path: "/admin/type_candidate/new",
    layout: DefaultAdminLayout,
    component: NewTypeCandidate,
    exact: true
  },
  {
    path: "/admin/type_candidate/:id",
    layout: DefaultAdminLayout,
    component: ShowTypeCandidate,
    exact: true
  },
  {
    path: "/admin/type_candidate/:id/update",
    layout: DefaultAdminLayout,
    component: UpdateTypeCandidate,
    exact: true
  },

  {
    path: "/admin/proposal_categories",
    layout: DefaultAdminLayout,
    component: AllProposalCategories,
    exact: true
  },
  {
    path: "/admin/proposal_category/new",
    layout: DefaultAdminLayout,
    component: NewProposalCategory,
    exact: true
  },
  {
    path: "/admin/proposal_category/:id",
    layout: DefaultAdminLayout,
    component: ShowProposalCategory,
    exact: true
  },
  {
    path: "/admin/proposal_category/:id/update",
    layout: DefaultAdminLayout,
    component: UpdateProposalCategory,
    exact: true
  },


  {
    path: "/admin/poll_categories",
    layout: DefaultAdminLayout,
    component: AllPollCategories,
    exact: true
  },
  {
    path: "/admin/poll_category/new",
    layout: DefaultAdminLayout,
    component: NewPollCategory,
    exact: true
  },
  {
    path: "/admin/poll_category/:id",
    layout: DefaultAdminLayout,
    component: ShowPollCategory,
    exact: true
  },
  {
    path: "/admin/poll_category/:id/update",
    layout: DefaultAdminLayout,
    component: UpdatePollCategory,
    exact: true
  },
];
