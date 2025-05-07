// src/components/Sidebar.tsx
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", icon: "📊", path: "/dashboard" },
    { label: "Catalog", icon: "🧾", path: "/catalog" },
    { label: "Books", icon: "📚", path: "/books" },
    { label: "Users", icon: "👥", path: "/users" },
    { label: "Branches", icon: "🏢", path: "/branches" },
  ];

  return (
    <aside className="bg-black text-white h-screen w-48 flex flex-col justify-between p-4">
      <div>
        {/* Logo */}
        <div className="text-2xl font-bold mb-10">📘 BookWorm</div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <button className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded">
        <span>🔌</span>
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
