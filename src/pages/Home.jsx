import { Link } from "react-router-dom";
import { Button } from "@mui/joy"; // Import Button component from Joy UI

function Home() {
  return (
    <div style={{ textAlign: "center", backgroundColor: "rgb(205 205 205)", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1>Choose what you want to watch?</h1>
      <div>
        <Link to="/movie">
          <Button style={{ margin: "10px", padding: "15px 30px", fontSize: "20px" }} color="primary">Movies</Button> {/* Use primary color */}
        </Link>
        <Link to="/tv">
          <Button style={{ margin: "10px", padding: "15px 30px", fontSize: "20px" }} color="primary">TV Shows</Button> {/* Use primary color */}
        </Link>
      </div>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>Enjoy watching...!</p>
    </div>
  );
}

export default Home;
