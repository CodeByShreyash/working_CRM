import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Leads from "./pages/Leads"
import Deals from "./pages/Deals"
import Tasks from "./pages/Tasks"
import Tickets from "./pages/Tickets"
import Users from "./pages/Users"
import Portal from "./pages/Portal"
import Forbidden from "./pages/Forbidden"

// Wrapper components for each route
const DashboardPage = () => (
  <Layout>
    <Dashboard />
  </Layout>
)

const LeadsPage = () => (
  <Layout>
    <Leads />
  </Layout>
)

const DealsPage = () => (
  <Layout>
    <Deals />
  </Layout>
)

const TasksPage = () => (
  <Layout>
    <Tasks />
  </Layout>
)

const TicketsPage = () => (
  <Layout>
    <Tickets />
  </Layout>
)

const UsersPage = () => (
  <Layout>
    <Users />
  </Layout>
)

const PortalPage = () => (
  <Layout>
    <Portal />
  </Layout>
)

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/403" element={<Forbidden />} />
          
          {/* Protected Routes */}
          <Route
            path="/"
            element={<ProtectedRoute element={DashboardPage} />}
          />
          <Route
            path="/leads"
            element={<ProtectedRoute element={LeadsPage} />}
          />
          <Route
            path="/deals"
            element={<ProtectedRoute element={DealsPage} />}
          />
          <Route
            path="/tasks"
            element={<ProtectedRoute element={TasksPage} />}
          />
          <Route
            path="/tickets"
            element={<ProtectedRoute element={TicketsPage} />}
          />
          <Route
            path="/users"
            element={<ProtectedRoute element={UsersPage} />}
          />
          <Route
            path="/portal"
            element={<ProtectedRoute element={PortalPage} />}
          />
          
          {/* Catch all route - redirect to dashboard or login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
