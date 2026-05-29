# Collaborative Todo App

A modern, real-time collaborative todo application with workspaces, task assignment, comments, and notifications.

## 🚀 Features

✨ **Core Features**
- 🏢 Workspace Management - Create and manage separate workspaces
- 📋 Task Management - Create, edit, delete, and organize tasks
- 👥 Task Assignment - Assign tasks to team members
- 🔔 Real-time Notifications - Get instant updates on task changes
- 💬 Comments & Discussion - Collaborate on tasks with comments
- @mentions - Tag team members in comments
- 📊 Activity Log - Track all workspace activities
- 🎯 Task Priority & Status - Organize by priority and status
- 📅 Due Dates - Set and track task deadlines
- 🔍 Search & Filter - Find tasks quickly

## 🛠 Tech Stack

**Frontend**
- React 18 + TypeScript
- Tailwind CSS for styling
- Redux Toolkit for state management
- Socket.io-client for real-time updates
- React Query for data fetching

**Backend**
- Node.js + Express
- TypeScript
- PostgreSQL with Prisma ORM
- Socket.io for WebSockets
- JWT authentication
- Bull Queue for notifications

**DevOps**
- Docker & Docker Compose
- GitHub Actions CI/CD

## 📁 Project Structure

```
todo-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API and Socket.io services
│   │   ├── store/           # Redux store
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Utility functions
│   ├── public/
│   └── package.json
├── backend/                  # Express backend server
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Prisma models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Express middleware
│   │   ├── services/        # Business logic
│   │   ├── events/          # WebSocket events
│   │   ├── queues/          # Background jobs
│   │   └── utils/           # Utility functions
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   └── package.json
├── docker-compose.yml       # Docker Compose configuration
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker & Docker Compose (optional)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kimeudan05/todo-app.git
cd todo-app
```

2. Set up backend
```bash
cd backend
npm install
cp .env.example .env
npm run db:migrate
npm run dev
```

3. Set up frontend (in new terminal)
```bash
cd frontend
npm install
npm start
```

### Using Docker
```bash
docker-compose up
```

This will start:
- PostgreSQL on `localhost:5432`
- Redis on `localhost:6379`
- Backend API on `http://localhost:5000`
- Frontend on `http://localhost:3000`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token

### Workspaces
- `GET /api/workspaces` - List user workspaces
- `POST /api/workspaces` - Create workspace
- `GET /api/workspaces/:id` - Get workspace details
- `PUT /api/workspaces/:id` - Update workspace
- `DELETE /api/workspaces/:id` - Delete workspace

### Tasks
- `GET /api/workspaces/:workspaceId/tasks` - List tasks
- `POST /api/workspaces/:workspaceId/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/assign` - Assign task
- `PATCH /api/tasks/:id/status` - Update task status

### Comments
- `GET /api/tasks/:taskId/comments` - List comments
- `POST /api/tasks/:taskId/comments` - Add comment
- `DELETE /api/comments/:id` - Delete comment

## 🔌 WebSocket Events

### Task Events
- `task:created` - New task created
- `task:updated` - Task updated
- `task:deleted` - Task deleted
- `task:assigned` - Task assigned to user

### Comment Events
- `comment:created` - New comment on task
- `comment:deleted` - Comment deleted
- `mention:created` - User mentioned in comment

### Workspace Events
- `workspace:updated` - Workspace settings changed
- `user:joined` - User joined workspace
- `user:left` - User left workspace

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support, open an issue on GitHub.
