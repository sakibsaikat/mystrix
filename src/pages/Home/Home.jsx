import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import TeamSlider from "../../components/Slider/TeamSlider";
import Category from "../../components/Category";

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Category />
        <Blog />
        <TeamSlider />
        <Contact />
        <Footer />

        
    </div>
  )
}

export default Home