import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import OccupationCard from "../components/OccupationCard";

export default function Work() {
  return (
    <>
      <Navigation/>
      <OccupationCard
      title={"The Little Lash Lab"}
      sub={"Web Developer"}
      date={"2019 - Present"}
      description={"I look after web development work for my mum's business, The Little Lash Lab, as of March 2019. I also do other jobs for her business such as invoicing, organising stock, and letter box flyer distribution."}
      />
      <Footer/>
    </>
  )
}