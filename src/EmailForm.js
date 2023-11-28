// Admin EmailForm

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NavbarA from './NavbarA';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [emailOptions, setEmailOptions] = useState([]);
  const [showTable, setShowTable] = useState(false); 
  const [noReviewsMessage, setNoReviewsMessage] = useState('');

  useEffect(() => {
 
    const fetchEmailOptions = async () => {
      try {
        const response = await fetch(`https://localhost:7177/api/Review/FetchAllEmails` ,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`,

          }
        });
        const jsonData = await response.json();
        setEmailOptions(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmailOptions();
  }, []); 

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://localhost:7177/api/Display/AppNameAndReviewByEmail/${email}`);
      const jsonData = await response.json();

      if (jsonData.length === 0) {
        setNoReviewsMessage('No reviews to display.');
      } else {
        setData(jsonData);
        setShowTable(true); 
      }

      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
      <div>
        <div
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLG1Sv8cBZDec0BmDEMhWi3RpIjeuszsX1A&usqp=CAU")`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            position: "absolute",
            top: "40",
            right: "0",
            transform: "translateY(0)",
            width: "100vw", 
            height: "100vh",
            zIndex: "-1", 
          }}
        />
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            marginTop: '80px',
            position: 'relative', 
            zIndex: "1",
          }}
        >
      <NavbarA />
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <span style={{ marginLeft: '20px' }}></span>
          <select value={email} onChange={handleChange}>
            <option value="" disabled>Select an email</option>
            {emailOptions.map((emailOption, i) => (
              <option key={i} value={emailOption}>
                {emailOption}
              </option>
            ))}
          </select>
        </label>
        &emsp;
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      {noReviewsMessage && <p style={{ color: 'blue' }}>{noReviewsMessage}</p>}
      {showTable && (
        <table border='1' className="table table-bordered">
          <thead>
            <tr>
              <th>App Name</th>
              <th>Review Content</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.appName}</td>
                <td>{item.reviewContent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
</div>


    </div>

    
  );
}

export default EmailForm;
