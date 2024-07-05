import Navbar from "../components/navbar";
import errorImg from "../assets/error.png";

export default function ErrorPage() {
  return (
    // Types of errors - handle them differently - include own thrown errors
    <>
      <Navbar />
      <div id="error-page">
        <img src={errorImg}></img>
      </div>
    </>
  );
}
