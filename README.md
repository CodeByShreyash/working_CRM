# CRM Application - MERN Stack

A complete Customer Relationship Management (CRM) web application built with the MERN stack (MongoDB, Express.js, React, Node.js), inspired by Zoho CRM.

## Features

### 🔒 Authentication & Authorization
- JWT-based authentication with bcrypt password hashing
- Role-based access control with 6 user roles:
  - Super Admin
  - Admin
  - Sales Manager
  - Sales Executive
  - Support Agent
  - Customer

### 🧩 Core Modules
- **Lead Management**: Create, assign, and convert leads to deals
- **Deal Tracking**: Manage deal stages from initiation to closure
- **Task Management**: Assign and track tasks with due dates
- **Support Tickets**: Customer support ticket system
- **User Management**: Admin-only user management interface
- **Client Portal**: Customer-facing portal for ticket tracking
- **Dashboard**: Role-based KPI and statistics display

### 🎯 Key Capabilities
- Role-based data access and UI restrictions
- Real-time dashboard statistics
- Complete CRUD operations for all entities
- Responsive design with clean UI
- Error handling and loading states
- Protected routes with role validation

## Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository
\`\`\`bash
git clone <repository-url>
cd crm-application
\`\`\`

### 2. Install Dependencies
\`\`\`bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
\`\`\`

### 3. Environment Configuration
Create a `.env` file in the `server` directory:
\`\`\`env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/crm_db
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_secure
JWT_EXPIRE=30d
\`\`\`

### 4. Start the Application
\`\`\`bash
# From the root directory, start both server and client
npm run dev

# Or start them separately:
# Terminal 1 - Start server
cd server && npm run dev

# Terminal 2 - Start client
cd client && npm run dev
\`\`\`

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Users (Admin only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Leads
- `GET /api/leads` - Get leads (filtered by role)
- `POST /api/leads` - Create new lead
- `PUT /api/leads/:id` - Update lead
- `DELETE /api/leads/:id` - Delete lead

### Deals
- `GET /api/deals` - Get deals (filtered by role)
- `POST /api/deals` - Create new deal
- `PUT /api/deals/:id` - Update deal

### Tasks
- `GET /api/tasks` - Get tasks (filtered by role)
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task

### Tickets
- `GET /api/tickets` - Get tickets (filtered by role)
- `POST /api/tickets` - Create new ticket
- `PUT /api/tickets/:id` - Update ticket

### Dashboard
- `GET /api/dashboard` - Get role-based statistics

### Portal (Customer only)
- `GET /api/portal` - Get customer portal data

## User Roles & Permissions

### Super Admin
- Full system access
- User management
- All CRM modules

### Admin
- User management (except super admin)
- All CRM modules
- System statistics

### Sales Manager
- View all leads and deals
- Manage sales team tasks
- Sales analytics

### Sales Executive
- Manage assigned leads and deals
- Create and update own records
- Task management

### Support Agent
- Manage assigned tickets
- Task management
- Customer communication

### Customer
- View own tickets
- Create new tickets
- Limited portal access

## Database Schema

### User Model
- name, email, password (hashed)
- role (enum with 6 roles)
- isActive status
- timestamps

### Lead Model
- Contact information (name, email, phone, company)
- status (new, contacted, qualified, converted, lost)
- source (website, referral, social media, etc.)
- assignedTo and createdBy references
- notes and conversion tracking

### Deal Model
- title, value, stage, probability
- expectedCloseDate, actualCloseDate
- contact information
- assignedTo and createdBy references
- leadSource reference

### Task Model
- title, description, status, priority
- dueDate, completedAt
- assignedTo and createdBy references
- relatedTo (polymorphic reference)

### Ticket Model
- title, description, status, priority, category
- customer, assignedTo, createdBy references
- resolvedAt, closedAt timestamps

## Development Notes

### Security Features
- JWT token authentication
- Password hashing with bcrypt
- Role-based route protection
- Input validation and sanitization

### Code Organization
- Modular backend structure with separate routes, models, and middleware
- React component-based frontend architecture
- Context API for global state management
- Protected routes with role validation

### Error Handling
- Comprehensive error handling in API routes
- User-friendly error messages in frontend
- Loading states for better UX

## Testing the Application

### Default Test Users
You can register users with different roles to test the application:

1. **Admin User**: Register with role "admin"
2. **Sales Executive**: Register with role "sales_executive"
3. **Support Agent**: Register with role "support_agent"
4. **Customer**: Register with role "customer"

### Testing Workflow
1. Register/login as different user types
2. Create leads as sales executive
3. Convert leads to deals
4. Create tasks and assign them
5. Create support tickets as customer
6. Manage tickets as support agent
7. View role-specific dashboards

## Production Deployment

### Environment Variables
Update the `.env` file for production:
\`\`\`env
NODE_ENV=production
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
\`\`\`

### Build Commands
\`\`\`bash
# Build the client
cd client && npm run build

# Start production server
cd server && npm start
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
