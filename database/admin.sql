INSERT INTO admin_menus (id, parent_id, order_no, title, icon, uri) VALUES
(1, 0, 1, 'Admin', 'fa-tasks', NULL),
(2, 1, 2, 'Users', 'fa-users', 'auth/users'),
(3, 1, 3, 'Roles', 'fa-user', 'auth/roles'),
(4, 1, 4, 'Permission', 'fa-ban', 'auth/permissions'),
(5, 1, 5, 'Menu', 'fa-bars', 'auth/menu'),
(6, 1, 6, 'Operation log', 'fa-history', 'auth/logs');
INSERT INTO admin_permissions (id, name, slug, http_method, http_path) VALUES
(1, 'All permission', '*', NULL, '*'),
(2, 'Dashboard', 'dashboard', 'GET', '/'),
(3, 'Login', 'auth.login', NULL, '/auth/login\r\n/auth/logout'),
(4, 'User setting', 'auth.setting', 'GET,PUT', '/auth/setting'),
(5, 'Auth management', 'auth.management', NULL, '/auth/roles\r\n/auth/permissions\r\n/auth/menu\r\n/auth/logs');
INSERT INTO admin_roles (id, name, slug) VALUES
(1, 'Administrator', 'administrator');
INSERT INTO admin_role_menus (role_id, menu_id) VALUES
(1, 1);
INSERT INTO admin_role_permissions (role_id, permission_id) VALUES
(1, 1);
INSERT INTO admin_role_users (role_id, user_id) VALUES
(1, 1);
INSERT INTO admin_users (id, username, password, name, avatar, remember_token) VALUES
(1, 'admin', '$2y$10$g6SJ8OtK1R9ri/yCZRZX8uM5bHiidpIU6cnBVEcawqtMh3DN9AXc.', 'Administrator', NULL, 'lIjr8hKwI5HWyMIug8wuWBXIhVwX9UMWDZSVtgFTrTs0PqATNWWgpQKWQeUi');
