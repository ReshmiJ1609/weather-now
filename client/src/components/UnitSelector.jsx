function UnitSelector({
  unit,
  setUnit,
  windUnit,
  setWindUnit,
  rainUnit,
  setRainUnit
}) {
  return (
    <div className="unit-selector">

      <div>
        <span>Temperature: </span>

        <button
          className={unit === "C" ? "active" : ""}
          onClick={() => setUnit("C")}
        >
          °C
        </button>

        <button
          className={unit === "F" ? "active" : ""}
          onClick={() => setUnit("F")}
        >
          °F
        </button>
      </div>

      <div>
        <span>Wind: </span>

        <button
          className={windUnit === "km/h" ? "active" : ""}
          onClick={() => setWindUnit("km/h")}
        >
          km/h
        </button>

        <button
          className={windUnit === "mph" ? "active" : ""}
          onClick={() => setWindUnit("mph")}
        >
          mph
        </button>
      </div>

      <div>
        <span>Rain: </span>

        <button
          className={rainUnit === "mm" ? "active" : ""}
          onClick={() => setRainUnit("mm")}
        >
          mm
        </button>

        <button
          className={rainUnit === "in" ? "active" : ""}
          onClick={() => setRainUnit("in")}
        >
          inches
        </button>
      </div>

    </div>
  );
}

export default UnitSelector;