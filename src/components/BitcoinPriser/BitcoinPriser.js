import React, { useEffect, useState } from "react";

export const BitcoinPriser = (props) => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const res = await fetch(
          "https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
        );
        const data = await res.json();
        setBtcPrice(Number(data.lastPrice).toFixed(2));
      } catch (e) {
        setError("Błąd wczytywania");
      }
    })();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (btcPrice === null) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <>
      <p>
        <strong>Aktualna cena Bitcoina to: </strong>
        <h3>{btcPrice} $</h3>
      </p>
    </>
  );
};
