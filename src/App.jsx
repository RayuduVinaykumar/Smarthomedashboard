import { useState } from "react";
import "./App.css";

function App() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Light", status: true },
    { id: 2, name: "Fan", status: false },
    { id: 3, name: "Air Conditioner", status: true },
    { id: 4, name: "Security Camera", status: true },
  ]);

  const toggleDevice = (id) => {
    setDevices(
      devices.map((device) =>
        device.id === id
          ? { ...device, status: !device.status }
          : device
      )
    );
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🏠 Smart Home Dashboard</h1>
        <p>Monitor and control your smart devices</p>
      </header>

      <div className="cards">
        <div className="card">
          <h3>Temperature</h3>
          <h2>24°C</h2>
        </div>

        <div className="card">
          <h3>Humidity</h3>
          <h2>65%</h2>
        </div>

        <div className="card">
          <h3>Energy Usage</h3>
          <h2>320 kWh</h2>
        </div>
      </div>

      <div className="device-section">
        <h2>Connected Devices</h2>

        {devices.map((device) => (
          <div className="device-card" key={device.id}>
            <span>{device.name}</span>

            <button
              className={device.status ? "on" : "off"}
              onClick={() => toggleDevice(device.id)}
            >
              {device.status ? "ON" : "OFF"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;