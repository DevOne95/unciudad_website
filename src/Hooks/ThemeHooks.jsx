import { create } from "zustand";
import {
  BiSolidDashboard,
  BiSolidMessageAltError,
  BiSolidStore,
} from "react-icons/bi";
import { MdWork, MdDiscount } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

import Dashboard from "../Pages/Dashboard/Dashboard";
import User from "../Pages/User/User";
import Jobs from "../Pages/Jobs/Jobs";
import Event from "../Pages/Event/Event";
import Reports from "../Pages/Reports/Reports";
import Store from "../Pages/Store/Store";
import Sales from "../Pages/Sales/Sales";

const SYSTEM_ROUTE = [
  {
    id: 1,
    name: "Dashboard",
    path: "dashboard",
    icon: <BiSolidDashboard size={24} />,
    element: <Dashboard />,
    roles: [1, 2, 4],
  },
  {
    id: 2,
    name: "User",
    path: "user",
    icon: <FaUsers size={24} />,
    element: <User />,
    roles: [1, 2, 4],
  },
  {
    id: 3,
    name: "Jobs",
    path: "jobs",
    icon: <MdWork size={24} />,
    element: <Jobs />,
    roles: [1, 2, 4],
  },
  {
    id: 4,
    name: "Event",
    path: "event",
    icon: <FaUsers size={24} />,
    element: <Event />,
    roles: [1, 2, 4],
  },
  {
    id: 5,
    name: "Reports",
    path: "reports",
    icon: <BiSolidMessageAltError size={24} />,
    element: <Reports />,
    roles: [1, 2, 4],
  },
  {
    id: 6,
    name: "Store",
    path: "store",
    icon: <BiSolidStore size={24} />,
    element: <Store />,
    roles: [1, 2, 4],
  },
  {
    id: 6,
    name: "Sales",
    path: "sales",
    icon: <MdDiscount size={24} />,
    element: <Sales />,
    roles: [1, 2, 4],
  },
];

const useThemeHooks = create((set, get) => ({
  routes: SYSTEM_ROUTE,
  isMinisideBar: false,
  toggleSidebar: (toggle) => set(() => ({ isMinisideBar: toggle })),
  getRoutes: (role) => {
    return get().routes.filter((route) => route.roles.includes(role));
  },
}));

export default useThemeHooks;
