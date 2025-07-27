"use client"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { usePermissions } from "../hooks/usePermissions"

const Layout = ({ children }) => {
  const { user, logout } = useAuth()
  const { canAccess } = usePermissions()
  const location = useLocation()

  const getNavItems = () => {
    const allItems = [
      {
        path: "/",
        label: "Dashboard",
        icon: "📊",
      },
      { 
        path: "/leads", 
        label: "Leads", 
        icon: "🎯",
      },
      { 
        path: "/deals", 
        label: "Deals", 
        icon: "💰",
      },
      {
        path: "/tasks",
        label: "Tasks",
        icon: "✅",
      },
      { 
        path: "/tickets", 
        label: "Tickets", 
        icon: "🎫",
      },
      { 
        path: "/users", 
        label: "Users", 
        icon: "👥",
      },
      { 
        path: "/portal", 
        label: "Portal", 
        icon: "🌐",
      },
    ]

    // Filter items based on user permissions
    return allItems.filter((item) => canAccess(item.path))
  }

  const navItems = getNavItems()

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
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? "active" : ""}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {navItems.length === 0 && (
          <div style={{ padding: "20px", textAlign: "center", color: "#adb5bd" }}>
            <p>No navigation items available for your role.</p>
            <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>
              Contact your administrator for access.
            </p>
          </div>
        )}
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
