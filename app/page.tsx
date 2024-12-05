import Slack from "@/components/layout/slack";
import Title from "@/components/typo/title";

const Home = () => {
  return <section className="w-full h-screen">
    <Slack className="h-full">
      <Title level={1} className="font-zentry text-violet-300">WellCome to Awards</Title>
    </Slack>
  </section>
}

export default Home;