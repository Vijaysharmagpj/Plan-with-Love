import React, { useState } from "react";
import Tours from "./Component/Tours";
import Data from "./Component/Data";

const App = () => {
  const [tours, setTours] = useState(Data);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  if (tours.length === 0) {
    return (
      <>
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(Data)}>
            Refresh
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};
export default App;
