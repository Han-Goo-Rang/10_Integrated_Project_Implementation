// src/components/Topbar.tsx
const Topbar: React.FC = () => {
    return (
      <header className="flex justify-between items-center p-4 border-b bg-white">
        {/* Kiri: Info Admin */}
        <div className="flex items-center space-x-2">
          <span className="text-xl">👤</span>
          <div>
            <div className="font-semibold">Nisal Gunasekara</div>
            <div className="text-sm text-gray-500">Admin</div>
          </div>
        </div>
  
        {/* Kanan: Waktu dan Settings */}
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="font-medium">12:29 PM</div>
            <div className="text-sm text-gray-500">Sep 02, 2023</div>
          </div>
          <button className="text-xl">⚙️</button>
        </div>
      </header>
    );
  };
  
  export default Topbar;
  