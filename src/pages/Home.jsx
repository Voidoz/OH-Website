import Typewriter from 'typewriter-effect';
import {BrowserView, MobileView} from 'react-device-detect';
import {Redirect} from "react-router-dom"

export default function Home() {
  return (
    <div className={"center"}>
      <BrowserView>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hello there!')
              .pauseFor(1000)
              .typeString('<br/>My name is <b>Oscar</b>.')
              .pauseFor(1500)
              .typeString('<br/><br/>To go to a page, please press<br/>one of the numbers below:')
              .pauseFor(500)
              .typeString('<br/><br/>[1] About me')
              .pauseFor(250)
              .typeString('<br/>[2] Education')
              .pauseFor(250)
              .typeString('<br/>[3] Work')
              .pauseFor(250)
              .typeString('<br/>[4] Skills')
              .start();
          }}
        />
      </BrowserView>
      <MobileView>
        <Redirect to={"/about-me"}/>
      </MobileView>
    </div>
  );
}