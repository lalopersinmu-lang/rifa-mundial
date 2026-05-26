export default function RifaWheelApp() {
  const prizes = [
    "Premio 1",
    "Premio 2",
    "Premio 3",
    "Premio 4",
    "Premio 5",
    "Premio 6",
    "Premio 7",
    "Premio 8",
    "Premio 9",
    "Premio 10",
    "Premio 11",
    "Premio 12",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold">Ruleta de Rifa</h1>

        <p className="text-zinc-300 text-lg">
          Esta es una base para una ruleta donde cada usuario pueda girar una sola vez.
        </p>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">Premios disponibles</h2>

          <div className="grid grid-cols-2 gap-3 text-left">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl p-3 border border-zinc-700"
              >
                {prize}
              </div>
            ))}
          </div>

          <button className="mt-6 w-full bg-white text-black font-bold py-4 rounded-2xl hover:scale-[1.01] transition-transform">
            Girar Ruleta
          </button>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 text-left space-y-3">
          <h3 className="text-xl font-semibold">Funciones que se pueden agregar</h3>

          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Login con Google o Discord</li>
            <li>Solo 1 giro por usuario</li>
            <li>Eliminar premios automáticamente</li>
            <li>Guardar historial de ganadores</li>
            <li>Compartir link público</li>
            <li>Panel de administrador</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
