import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import OccupationCard from "../components/OccupationCard";

export default function Education() {
  return (
    <>
      <Navigation/>
      <OccupationCard
        title={"Brisbane School of Distance Education"}
        sub={"(Grade 8-10)"}
        date={"2018"}
        description={"I learned my most basic coding skills here for HTML5, CSS, and Python. In addition to these and the core subjects I studied economics and business. My achievement average over all subjects was a B+."}
      />
      <OccupationCard
        title={"TrainMe Level 1 - Vision College, Pukekohe"}
        sub={"NCEA Level 1"}
        date={"2019"}
        description={"This course taught me practical skills such as how budgets work, how point of sales systems work, and much more, In addition I got most of my credits towards NCEA Level 1 which TrainMe Level 2 finishes."}
      />
      <OccupationCard
        title={"TrainMe Level 2 - Vision College, Pukekohe"}
        sub={"NCEA Level 2"}
        date={"2020"}
        description={"This course is very similar to TrainMe Level 1 but it gives me credits towards NCEA Level 1 and NCEA Level 2 and in the end I get both certifications."}
      />
      <Footer/>
    </>
  )
}