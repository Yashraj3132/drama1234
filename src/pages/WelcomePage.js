import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import clapImage from "../image/clap.png";
// import cam from "../image/camera.png";
//import back1 from "../image/back.jpg";
import back2 from "../image/background.avif";

import img1 from "../image/image1.png";
import img2 from "../image/image2.png";
import "./welcome.css";
import "./../index.css";

// Function for image component
function Img({ src, alt }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("not all and (min-width: 640px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  const styles = {
    width: "250px",
    // height: "250px",
    maxWidth: isSmallScreen ? "125%" : "250px", // Apply max-width conditionally
    height: isSmallScreen ? "auto" : "300px",
  };
  return <img src={src} alt={alt} style={styles} />;
}

function WelcomePage() {
  const { name } = useParams(); // useParams must be imported from 'react-router-dom'
  const [currentImage, setCurrentImage] = useState(img2); // Default image is img1

  // Handle image switch on button click
  const handleImageSwitch = () => {
    setCurrentImage(currentImage === img2 ? img1 : img2);
  };

  // const glowEffect = {
  //   textShadow: "rgb(255, 20, 0)",
  // };

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
          <div className="font-bold  text-5xl h-24 p-5 text-center">
            {/* <h1>Hello {name} !!!</h1> */}
          </div>
          <div class="text-5xl h-40 flex items-center justify-center  text-red-500 font-bold ">
            <h1 className=" text-background font-extrabold fredoka-x  ">
              {" "}
              Hello {name} !!!
            </h1>
          </div>

          <div className="h-70 grid grid-cols-1 gap-1" style={{ zIndex: 1 }}>
            <div className="z text-xl pl-3">
              <h2> KLS GIT's</h2>
            </div>
            <div className="font-bold text-4xl h-20 p-5 text-center max-sm:text-2xl">
              <h1>Team DRAMATICS Welcomes You!!!</h1>
            </div>
            <div className="y ">
              <h2>We turn every ordinary into extraordinary</h2>
            </div>

            <div className="bebas-neue-regular">
              <h2>Here is your chance to join the team.</h2>
            </div>

            <div className="grid grid-cols-2 y h-20 pl-60  max-sm:pl-24 max-sm:pt-14 max-sm:xyz">
              {/* Display the image */}
              <Img class="" src={currentImage} alt="Dynamic Image" />
            </div>
          </div>

          <div
            className="h-60 text-center border-rose-50 pt-28 pr-4 max-sm:pd-50  "
            style={{ zIndex: 10 }}>
            <Link
              onClick={handleImageSwitch}
              className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-500 hover:border-transparent rounded ml-4 "
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
