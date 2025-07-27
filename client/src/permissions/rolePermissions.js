// src/permissions/rolePermissions.js
export const rolePermissions = {
  super_admin: ['/', '/leads', '/deals', '/tasks', '/tickets', '/users', '/portal'],
  admin: ['/', '/leads', '/deals', '/tasks', '/tickets', '/users', '/portal'],
  sales_manager: ['/', '/leads', '/deals', '/tasks'],
  sales_executive: ['/', '/leads', '/deals', '/tasks'],
  support_agent: ['/', '/tasks', '/tickets'],
  customer: ['/', '/tickets', '/portal'],
};

// Define role hierarchy for better permission management
export const roleHierarchy = {
  super_admin: ['super_admin', 'admin', 'sales_manager', 'sales_executive', 'support_agent', 'customer'],
  admin: ['admin', 'sales_manager', 'sales_executive', 'support_agent', 'customer'],
  sales_manager: ['sales_manager', 'sales_executive'],
  sales_executive: ['sales_executive'],
  support_agent: ['support_agent'],
  customer: ['customer'],
};

// Helper function to check if a role has access to a specific path
export const hasPermission = (userRole, path) => {
  if (!userRole || !rolePermissions[userRole]) {
    return false;
  }
  
  // Check if the user's role has access to the path
  return rolePermissions[userRole].includes(path);
};

// Helper function to get allowed paths for a role
export const getAllowedPaths = (userRole) => {
  return rolePermissions[userRole] || [];
};
