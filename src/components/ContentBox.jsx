import {Container} from "react-bootstrap";

export default function ContentBox(props) {
  return (
   <Container style={{border: "solid 2px", borderColor: "white", paddingBottom: "15px"}}>
      {props.children}
    </Container>
  )
}