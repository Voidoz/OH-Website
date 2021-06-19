import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContentBox from "../components/ContentBox";
import {Image} from "react-bootstrap";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Profile from "../assets/images/profilepic.jpg";

export default function AboutMe() {
  const matches = useMediaQuery('(min-width:500px)');

  return (
    <>
      <Navigation/>
      <ContentBox>
        <div style={{display: "flex"}}>
          {matches &&
          <Image style={{marginRight: "50px", width: "150px", height: "150px", marginTop: "10px"}} src={Profile} roundedCircle/>}
          <div>
            <h1 style={{textAlign: "center", marginBottom: "20px"}}><strong><u>I'm Oscar Hurst</u></strong></h1>
            <p>I am a self-taught programmer based on the Gold Coast, Australia. I am currently doing my Bachelor of
              Information Technology with RMIT, online. In my own time I teach myself new programming languages as well
              as sharpening my skills in ones I already know.</p>
            {!matches &&
            <Image style={{marginRight: "50px", width: "150px", height: "150px", marginTop: "10px"}} src={Profile} roundedCircle/>}
          </div>
        </div>
      </ContentBox>
      <Footer/>
    </>
  )
}