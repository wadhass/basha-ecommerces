import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4 h-screen">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li><NavLink to="/dashboard">Overview</NavLink></li>
          <li><NavLink to="/dashboard/payments">Payments</NavLink></li>
          <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
          <li><NavLink to="/dashboard/reviews">Reviews</NavLink></li>
        </ul>
      </aside>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
