import Navbar from "./Navbar";

function HomeUser() {
  return (

    <div
    style={{
      textAlign: 'center',
      width: '100%',
      marginTop: '80px',
    }}
  >
      <Navbar />
      <img
        src="https://i.pinimg.com/originals/8c/fa/a8/8cfaa8b13b853e3f9c941e3da69008c5.png"
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      </div>

  );
}

export default HomeUser;
