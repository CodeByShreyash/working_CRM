const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

// Load env vars
dotenv.config()

// Route files
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const leadRoutes = require("./routes/leads")
const dealRoutes = require("./routes/deals")
const taskRoutes = require("./routes/tasks")
const ticketRoutes = require("./routes/tickets")
const dashboardRoutes = require("./routes/dashboard")
const portalRoutes = require("./routes/portal")

const app = express()

// Body parser
app.use(express.json())

// Enable CORS
app.use(cors())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

// Mount routers
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/leads", leadRoutes)
app.use("/api/deals", dealRoutes)
app.use("/api/tasks", taskRoutes)
app.use("/api/tickets", ticketRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/portal", portalRoutes)

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Server Error",
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
