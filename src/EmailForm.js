//Admin EmailForm

import { useState } from 'react';
import { Link } from "react-router-dom";

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

    
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://localhost:44382/api/Display/AppNameAndReviewByEmail/${email}`);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
<div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
  <form onSubmit={handleSubmit}>
    <label>
      Email:
      <span style={{ marginLeft: '20px' }}></span>
      <input type="text" value={email} placeholder="Enter email" onChange={handleChange} />
    </label>
    &emsp;
    <button type="submit">Submit</button>
  </form>
  <br />
  <br />
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
  <button style= {{ position: "absolute", top: "30px", left:"60px"}}><Link to="/NavbarA">Back</Link></button>
</div>

  );
}  

export default EmailForm;




