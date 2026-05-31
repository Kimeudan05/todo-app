// Type definitions for the app

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceMember {
  id: string;
  userId: string;
  workspaceId: string;
  role: 'admin' | 'member' | 'viewer';
  joinedAt: string;
  user?: User;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'inProgress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdBy: string;
  assignedTo?: string;
  workspaceId: string;
  createdAt: string;
  updatedAt: string;
  creator?: User;
  assignee?: User;
}

export interface Comment {
  id: string;
  content: string;
  taskId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'task_assigned' | 'comment_mentioned' | 'task_updated';
  message: string;
  read: boolean;
  createdAt: string;
}

export interface Activity {
  id: string;
  action: 'created' | 'updated' | 'deleted' | 'assigned' | 'commented';
  entityType: 'task' | 'workspace';
  entityId: string;
  workspaceId: string;
  createdAt: string;
}
