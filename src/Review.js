import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarA from './NavbarA';

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
<NavbarA />
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
    marginTop: "70px", // Adding space at the top
  }}
>
      <h5>AppName: {item.appName}</h5>
      <p>Number_of_Reviews: {item.number_of_reviews}</p> 
    </div>
  ))}
    
</div>

  );
}

export default Review;
