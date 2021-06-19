import ContentBox from "./ContentBox";

export default function OccupationCard(props) {
  return (
    <>
      <ContentBox>
        <h2><strong>{props.title}</strong></h2>
        <p><i>{props.sub}</i> • {props.date}</p>
        <p>{props.description}</p>
      </ContentBox>
      <br/>
    </>
  )
}