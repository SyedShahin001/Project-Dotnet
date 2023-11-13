import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarA from "./NavbarA";

export function AddNewApp() {
  const [appName, setAppName] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [isAppNameRegistered, setIsAppNameRegistered] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsAppNameRegistered(false);
    setIsFormEmpty(false); 
    
    const lowerCaseAppName = appName.toLowerCase(); 
    
    if (lowerCaseAppName.trim() === "" || appDescription.trim() === "") {
      setIsFormEmpty(true); 
      return;
    }
  
    fetch(`https://localhost:44382/api/App/GetAllApps`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0 && data.some(app => app.appName.toLowerCase() === lowerCaseAppName)) { 
          setIsAppNameRegistered(true);
        } else {
          fetch("https://localhost:44382/api/App/AddApp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              appName: appName,
              appDescription: appDescription,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setAppName("");
              setAppDescription("");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function renderAlert() {
    if (isAppNameRegistered) {
      return (
        <div className="alert alert-danger" role="alert">
          {appName} is already registered.
        </div>
      );
    }
    if (isFormEmpty) {
      return (
        <div className="alert alert-danger" role="alert">
          Please fill in both AppName and AppDescription.
        </div>
      );
    }
    return null;
  }

  return (
   
    <div className="container text-center mt-5">
      <NavbarA />
      <h2>App Details</h2>
      {renderAlert()}
      <form onSubmit={handleSubmit}>
        <label htmlFor="appName" >Enter the App Name</label>
        <span style={{ marginLeft: '45px' }}></span>
        <input type="text" className={"col-xs-4"} placeholder="Enter appName" name="appName" value={appName} onChange={(event) => setAppName(event.target.value)}/>
        <br />
        <br />
        <label htmlFor="appDescription">Enter the App Description</label>
        <span style={{ marginLeft: '15px' }}></span>
        <input type="text" className={"col-xs-4"} placeholder="Enter appDescription" name="appDescription" value={appDescription} onChange={(event) => setAppDescription(event.target.value)}
        />
        <br />
        <br />

        <button type="submit" className="btn btn-success" >
          Register new App
        </button>
    
      </form>

      <img
    src="data:image/jpeg;base64,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"
    alt=""
  style={{
    width: '800px',   
    height: '350px',  
    position: 'absolute',
    bottom: '0',
    left: '50%',      
    transform: 'translateX(-50%)' ,
    marginTop: '80px'
  }}
/>

    </div>
  );
}

export default AddNewApp;

/*<button style= {{ position: "absolute", top: "50px", left:"60px"}}><Link to="/NavbarA">Back</Link></button>*/