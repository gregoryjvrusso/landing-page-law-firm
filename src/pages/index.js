import Head from "next/head";
import Header from "../components/modules/Header";
import Featured from "../components/modules/Featured";
import Purpose from "../components/modules/Purpose";
import AboutUs from "../components/modules/AboutUs";
import Expertise from "../components/modules/Expertise";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Featured />
      <Purpose />
      <AboutUs />
      <Expertise />
    </div>
  );
};

export default Home;
