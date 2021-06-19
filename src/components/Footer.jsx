import Socials from "./Socials";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <center>
        <Socials/>
        <small><p id={"copyright"}>&copy; Copyright {currentYear}, Oscar Hurst. All Rights Reserved</p></small>
      </center>
    </footer>
  )
}