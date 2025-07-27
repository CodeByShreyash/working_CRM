"use client"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Layout = ({ children }) => {
  const { user, logout } = useAuth()
  const location = useLocation()

  const getNavItems = () => {
    const items = [
      {
        path: "/",
        label: "Dashboard",
        roles: ["super_admin", "admin", "sales_manager", "sales_executive", "support_agent", "customer"],
      },
      { path: "/leads", label: "Leads", roles: ["super_admin", "admin", "sales_manager", "sales_executive"] },
      { path: "/deals", label: "Deals", roles: ["super_admin", "admin", "sales_manager", "sales_executive"] },
      {
        path: "/tasks",
        label: "Tasks",
        roles: ["super_admin", "admin", "sales_manager", "sales_executive", "support_agent"],
      },
      { path: "/tickets", label: "Tickets", roles: ["super_admin", "admin", "support_agent", "customer"] },
      { path: "/users", label: "Users", roles: ["super_admin", "admin"] },
      { path: "/portal", label: "Portal", roles: ["customer"] },
    ]

    return items.filter((item) => item.roles.includes(user?.role))
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <div style={{ padding: "20px", borderBottom: "1px solid #495057" }}>
          <h3>CRM System</h3>
          <p style={{ fontSize: "12px", color: "#adb5bd", marginTop: "5px" }}>
            {user?.name} ({user?.role})
          </p>
        </div>
        <ul className="sidebar-nav">
          {getNavItems().map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h2>Welcome, {user?.name}</h2>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
