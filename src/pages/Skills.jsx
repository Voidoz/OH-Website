import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import ContentBox from "../components/ContentBox";

export default function Skills() {
  const spacing = 15;

  const createData = (skill, level, left = undefined, right = undefined) => {
    let spacer = "";
    let i;
    for (i = 0; spacing - skill.length > i; i++) {
      spacer = spacer + "\xa0";
    }
    return {skill, level, left, right, spacer};
  }

  const skills = [
    createData(
      "HTML5",
      10,
      "<",
      "/>"
    ),
    createData(
      "Firebase",
      9,
    ),
    createData(
      "GIT",
      8,
    ),
    createData(
      "React.JS",
      7,
    ),
    createData(
      "Node.JS",
      7,
    ),
    createData(
      "Javascript",
      6,
    ),
    createData(
      "Python",
      5,
    ),
    createData(
      "C#",
      4,
    ),
    createData(
      "C++",
      3,
    ),
    createData(
      "Unreal Engine",
      2,
    ),
    createData(
      "Unity Engine",
      1,
    ),
  ];
  return (
    <>
      <Navigation/>
      <ContentBox>
        <ul>
          {skills.map(skill => (
            <li>{skill.skill}:{skill.spacer}<ProgressBar level={skill.level} left={skill.left} right={skill.right}/></li>
          ))}
        </ul>
      </ContentBox>
      <Footer/>
    </>
  )
}