import { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import NavbarA from "./NavbarA";



export function Apps() {
  const [apps, setApps] = useState([]);
  

  const fetchApps = async () => {
    try {
      const response = await fetch('https://localhost:44382/api/App/GetAllApps');
      const jsonData = await response.json();
      setApps(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div>
      <NavbarA />
      <h3 style={{ textAlign: "center" }}>Apps Details</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {apps.map((item, i) => (
          <div
            key={i}
            style={{
              border: "4px solid pink",
              backgroundColor: "lavender",
              color: "brown",
              width: "200px",
              margin: "15px",
              padding: "6px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              marginTop: "70px",
            }}
          >
            <h5>AppId: {item.appId}</h5>
            <p>AppName: {item.appName}</p>
            <p>AppDescription: {item.appDescription}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Apps;