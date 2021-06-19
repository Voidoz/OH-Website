export default function ProgressBar(props) {
  let filler = "";

  let i;
  for (i = 0; i < props.level; i++) {
    filler += "■";
  }

  return (
    <span style={{color: "white"}}>{props.left || "["}{filler}{props.right || "]"}</span>
  )
}