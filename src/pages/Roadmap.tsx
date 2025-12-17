function Roadmap() {
  const milestones = [
    {
      title: "Q1 2024",
      status: "completed",
      items: [
        "Базова інтеграція React Three Fiber",
        "Підтримка VR/AR через @react-three/xr",
        "Створення базової структури проєкту",
      ],
    },
    {
      title: "Q2 2024",
      status: "completed",
      items: [
        "Реалізація фізичного руху",
        "Додавання системи локомоції",
        "Інтеграція Rapier physics",
      ],
    },
    {
      title: "Q3 2024",
      status: "in-progress",
      items: [
        "Покращення UI/UX",
        "Оптимізація продуктивності",
        "Додавання нових можливостей",
      ],
    },
    {
      title: "Q4 2024",
      status: "planned",
      items: [
        "Мультиплеєр підтримка",
        "Розширені інструменти розробки",
        "Публічний реліз",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-500";
      case "planned":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">Roadmap</h1>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${getStatusColor(
                      milestone.status
                    )}`}
                  ></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                  )}
                </div>

                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-semibold">
                      {milestone.title}
                    </h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        milestone.status === "completed"
                          ? "bg-green-500/20 text-green-300"
                          : milestone.status === "in-progress"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      {milestone.status === "completed"
                        ? "Завершено"
                        : milestone.status === "in-progress"
                        ? "В процесі"
                        : "Заплановано"}
                    </span>
                  </div>

                  <ul className="space-y-2 ml-4">
                    {milestone.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
