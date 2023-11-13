import Navbar from './Navbar';
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        marginTop: '80px',
      }}
    >
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
              readOnly={readOnlyEmail}
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
          </label>
          &emsp;
          <button type="submit">Submit</button>
        </form>
        <table className="table table-bordered" style={{ width: '70%' }}>
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

      </div>
    </div>
  );
}

export default EmailForm1;
