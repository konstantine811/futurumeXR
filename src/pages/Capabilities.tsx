function Capabilities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Можливості</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-4">VR/AR Підтримка</h2>
            <p className="text-gray-300">
              Повна підтримка віртуальної та доповненої реальності з
              використанням сучасних технологій.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-4">3D Візуалізація</h2>
            <p className="text-gray-300">
              Високоякісна 3D графіка та рендеринг з використанням Three.js та
              React Three Fiber.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Фізичний рух</h2>
            <p className="text-gray-300">
              Реалістична фізика та взаємодія з об'єктами завдяки Rapier physics
              engine.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Плавна локомоція</h2>
            <p className="text-gray-300">
              Зручне переміщення у віртуальному просторі з підтримкою різних
              режимів руху.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-4">
              Адаптивний інтерфейс
            </h2>
            <p className="text-gray-300">
              Сучасний та інтуїтивний користувацький інтерфейс з підтримкою
              різних пристроїв.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Відлагодження</h2>
            <p className="text-gray-300">
              Потужні інструменти для розробки та відлагодження XR додатків.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
