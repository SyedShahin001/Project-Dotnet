import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function EmailForm1() {
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [readOnlyEmail, setReadOnlyEmail] = useState(false); 

  useEffect(() => {

    const loggedInEmail = localStorage.getItem('loggedInEmail');
    if (loggedInEmail) {
      setEmail(loggedInEmail);
      setReadOnlyEmail(true); 
    }
  }, []); 

  const handleChange = (event) => {
    if (!readOnlyEmail) {
      setEmail(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://localhost:44382/api/Display/AppNameAndReviewByEmail/${email}`);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
            readOnly={readOnlyEmail} 
          />
          {readOnlyEmail && <span> </span>} 
        </label>
        &emsp;
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <table border="1" className="table table-bordered">
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
      <button style={{ position: 'absolute', top: '30px', left: '60px' }}>
        <Link to="/Navbar">Back</Link>
      </button>
    </div>
  );
}

export default EmailForm1;