import { useState } from "react";

export default function App() {
  const initialPrizes = [
    "Grupo A1",
    "Grupo B",
    "Grupo C",
    "Grupo D",
    "Grupo E",
    "Grupo F",
    "Grupo G",
    "Grupo H",
    "Grupo I",
    "Grupo J",
    "Grupo K",
    "Grupo L",
  ];

  const [prizes, setPrizes] = useState(initialPrizes);
  const [winner, setWinner] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    if (prizes.length === 0) {
      alert("Ya no quedan premios");
      return;
    }

    setSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      const selectedPrize = prizes[randomIndex];

      setWinner(selectedPrize);

      const updatedPrizes = prizes.filter(
        (_, index) => index !== randomIndex
      );

      setPrizes(updatedPrizes);

      setSpinning(false);
    }, 3000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>🎡 Rifa</h1>

        <button
          onClick={spinWheel}
          disabled={spinning}
          style={{
            padding: "20px 40px",
            fontSize: "24px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          {spinning ? "Girando..." : "GIRAR"}
        </button>

        {winner && (
          <div
            style={{
              marginTop: "30px",
              background: "#222",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <h2>Ganaste:</h2>
            <h1>{winner}</h1>
          </div>
        )}

        <div
          style={{
            marginTop: "40px",
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "20px",
            textAlign: "left",
          }}
        >
          <h2>Premios restantes:</h2>

          {prizes.map((prize, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                marginTop: "10px",
                background: "#333",
                borderRadius: "10px",
              }}
            >
              {prize}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}