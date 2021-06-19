import {IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Socials() {
  return (
    <IconButton href={"https://github.com/Voidoz"} target={"_blank"} style={{color: "white"}}>
      <GitHubIcon/>
    </IconButton>
  )
}