import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  AlertTriangle,
  Users,
  GraduationCap,
  Camera,
  FileText,
  Bell,
  BarChart3,
  History,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: AlertTriangle, label: "Violations", path: "/admin/violations" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: GraduationCap, label: "Students", path: "/admin/students" },
    { icon: Camera, label: "Cameras", path: "/admin/cameras" },
    { icon: FileText, label: "Policy Rules", path: "/admin/policy-rules" },
    { icon: Bell, label: "Notifications", path: "/admin/notifications" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: History, label: "History Logs", path: "/admin/history-logs" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside
      className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo/Branding */}
      <div className="h-16 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Attendify</h1>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight size={18} className="text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronLeft size={18} className="text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={20}
                className={active ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}
              />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
