import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";

export default function App() {
  const initialPrizes = [
    "Grupo A",
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

  const [mustSpin, setMustSpin] = useState(false);

  const [prizeNumber, setPrizeNumber] = useState(0);

  const [winner, setWinner] = useState("");

  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");

    setUserCode(path || "Invitado");
  }, []);

  const data = prizes.map((prize) => ({
    option: prize,
  }));

  const spinWheel = () => {
    if (mustSpin) return;

    if (prizes.length === 0) {
      alert("Ya no quedan grupos");
      return;
    }

    const randomIndex = Math.floor(Math.random() * prizes.length);

    setPrizeNumber(randomIndex);

    setWinner(prizes[randomIndex]);

    setMustSpin(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        🎡 Mundial
      </h1>

      <h2 style={{ marginBottom: "30px" }}>
        Bienvenido {userCode}
      </h2>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#2563eb", "#1d4ed8"]}
        textColors={["#ffffff"]}
        outerBorderColor="#ffffff"
        outerBorderWidth={10}
        radiusLineColor="#ffffff"
        radiusLineWidth={2}
        onStopSpinning={() => {
          const selectedPrize = prizes[prizeNumber];

          const updatedPrizes = prizes.filter(
            (_, index) => index !== prizeNumber
          );

          setPrizes(updatedPrizes);

          setWinner(selectedPrize);

          setMustSpin(false);
        }}
      />

      <button
        onClick={spinWheel}
        style={{
          marginTop: "40px",
          padding: "20px 50px",
          borderRadius: "20px",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {mustSpin ? "Girando..." : "GIRAR"}
      </button>

      {winner && (
        <div
          style={{
            marginTop: "30px",
            background: "#222",
            padding: "20px 40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Ganador:</h2>

          <h1>{winner}</h1>
        </div>
      )}
    </div>
  );
}