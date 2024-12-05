import About from "@/components/general/about";
import Hero from "@/components/general/hero";
import NavBar from "@/components/general/navbar";
import Slack from "@/components/layout/slack";
import Title from "@/components/typo/title";

const Home = () => {
    return (
        <section className="w-full flex flex-col overflow-y-auto bg-white">
            <NavBar />
            <Hero />
            <About />
        </section>
    );
};

export default Home;
