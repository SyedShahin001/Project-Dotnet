import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from './NavbarA';


 
// ReviewCard component to display individual review
const ReviewCard = ({ appName, numberOfReviews }) => {
  const getRandomColor = () => {
    const colors = ["#FFD700", "#90EE90", "#87CEEB", "#FFA07A", "#C71585"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
 
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "20px",
    width: "300px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: getRandomColor(),
    textAlign: "center",
  };
 
  const headingStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
  };
 
  return (
    <div style={cardStyle}>
      <h5 style={headingStyle}>AppName: {appName}</h5>
      <p>Reviews: {numberOfReviews}</p>
    </div>
  );
};
 
export function Review() {
  const [apps, setApps] = useState([]);
 
  const fetchReview = async () => {
    try {
      const response = await fetch('https://localhost:7177/api/Display/AppNameandItsReviews');
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
    <div>
      <div
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2lhq3GQ3Ad3gKxKkX6JF3Th5zRwhNIqu3Q&usqp=CAUs")`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            position: "absolute",
            top: "40",
            right: "0",
            transform: "translateY(0)",
            width: "100vw", // Set width and height to cover the entire viewport
            height: "100vh",
            zIndex: "-1", // Ensure the background is behind other content
            opacity: 0.5, 
          }}
        />
      <marquee scrollamount="9" >
  <h3 align='center'><br/><br/><br/>Welcome to Trustspot AppSurvey</h3>
</marquee>
      <h5 align='center'><br/>Here are the available apps and number of reviews..</h5>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {apps.map((item, i) => (
          <ReviewCard key={i} appName={item.appName} numberOfReviews={item.number_of_reviews} />
        ))}
      </div>
      <div style={{ position: "absolute", top: "40px", right: "80px" }}>
        <button style={{ padding: "10px", width: "150px", fontSize: "1.2em", backgroundColor: "#0000FF", color: "#0000FF", border: "none", borderRadius: "4px" }}>
          <Link to="/Home" style={{ textDecoration: "none", color: "#fff" }}>SignIn</Link>
        </button>
      </div>
    </div>
  );
}
 
export default Review;