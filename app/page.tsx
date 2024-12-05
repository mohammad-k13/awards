import About from "@/components/general/about";
import Features from "@/components/general/features";
import Hero from "@/components/general/hero";
import NavBar from "@/components/general/navbar";
import Slack from "@/components/layout/slack";
import Title from "@/components/typo/title";
import FloatingImage from "@/components/general/story";
import Contact from "@/components/general/contact";
import Footer from "@/components/general/footer";

const Home = () => {
    return (
        <section className="w-full flex flex-col overflow-y-auto bg-white">
            <NavBar />
            <Hero />
            <About />
            <Features />
            <FloatingImage />
            <Contact />
            <Footer />
        </section>
    );
};

export default Home;
