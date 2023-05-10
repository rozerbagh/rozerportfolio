import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
type Hometype = {
  name: string,
  email: string,
}
const Home = (props: Hometype) => {
  return (
    <>
      <Hero />
      <Skills />

      <Portfolio />
      <Timeline />
      <br /><br />
      <Footer />
    </>
  )
}

export default Home;