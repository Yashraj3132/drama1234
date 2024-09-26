import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
// import clapImage from "../image/clap.png";
// import cam from "../image/camera.png";
//import back1 from "../image/back.jpg";
import back2 from "../image/background.avif";

import img1 from "../image/image1.png";
import img2 from "../image/image2.png";
import "./welcome.css";

// Function for image component
function Img({ src, alt }) {
  return (
    <img src={src} alt={alt} style={{ width: "250px", height: "250px" }} />
  );
}

function WelcomePage() {
  const { name } = useParams(); // useParams must be imported from 'react-router-dom'
  const [currentImage, setCurrentImage] = useState(img2); // Default image is img1

  // Handle image switch on button click
  const handleImageSwitch = () => {
    setCurrentImage(currentImage === img2 ? img1 : img2);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${back2})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center text-center ">
        <div>
          <div className="font-bold  text-5xl h-28 p-5 text-center">
            {/* <h1>Hello {name} !!!</h1> */}
          </div>
          <div class="text-5xl h-40 flex items-center justify-center  text-red-800 font-bold ">
            <h1 className="border border-white"> Hello {name} !!!</h1>
          </div>

          <div
            className="h-70 grid grid-cols-1 gap-1 pt-10"
            style={{ zIndex: 1 }}>
            <div className="z text-xl pl-3">
              <h2> KLS GIT's</h2>
            </div>
            <div className="font-bold text-4xl h-20 p-5 text-center">
              <h1>Team DRAMATICS Welcomes You!!!</h1>
            </div>
            <div className="y">
              <h2>We turn every ordinary into extraordinary</h2>
            </div>

            <div className="bebas-neue-regular">
              <h2>Here is your chance to join the team.</h2>
            </div>

            <div className="grid grid-cols-2 y h-20 pl-60">
              {/* Display the image */}
              <Img src={currentImage} alt="Dynamic Image" />
            </div>
          </div>

          <div className="h-60 text-center border-rose-50 pt-20 pr-4 ">
            <Link
              onClick={handleImageSwitch}
              className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-500 hover:border-transparent rounded ml-4"
              to="https://forms.gle/YK81kV1PjbxX87ps7">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
