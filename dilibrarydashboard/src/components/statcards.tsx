// src/components/StatCards.tsx
interface StatCard {
    icon: string;
    label: string;
    value: string;
  }
  
  const statData: StatCard[] = [
    { icon: "👤", label: "Total User Base", value: "0150" },
    { icon: "📚", label: "Total Book Count", value: "01500" },
    { icon: "🏢", label: "Branch Count", value: "0010" },
  ];
  
  const StatCards: React.FC = () => {
    return (
      <div className="space-y-4">
        {statData.map((card, index) => (
          <div key={index} className="flex items-center bg-white rounded-md shadow p-4">
            <div className="text-3xl mr-4">{card.icon}</div>
            <div className="border-l pl-4">
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="text-sm text-gray-500">{card.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatCards;
  