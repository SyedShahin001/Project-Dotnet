import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Review() {
  const [apps, setApps] = useState([]);

  const fetchReview = async () => {
    try {
      const response = await fetch('https://localhost:44382/api/Display/AppNameandItsReviews');
      const jsonData = await response.json();
      console.log(jsonData); 
      setApps(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    fetchReview();
  }, []);

  return (
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
        margin: "10px",
        padding: "6px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
      }}
    >
      <h5>AppName: {item.appName}</h5>
      <p>Number_of_Reviews: {item.number_of_reviews}</p> 
    </div>
  ))}
        <div >
      <button style={{ position: "absolute", top: "20px", left: "40px" }}>
          <Link to="/NavbarA">Back</Link>
        </button>
      </div>
</div>

  );
}

export default Review;
