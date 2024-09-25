import Section1 from "../components/privacyPolicy/Section1/Section1";
import Hero from "../components/privacyPolicy/Hero/Hero";
import Head from "next/head";
import Section2 from "../components/privacyPolicy/Section2/Section2";

const privacy = () => {
  return (
    <div className="p-10">
      <Head>
        <title>Privacy & policy | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <br />
      <br />
      <br />
      <Hero />
      <br />
      <br />
      <br />
      <Section1 />
      <br />
      <br />
      <Section2 />
    </div>
  );
};

export default privacy;
