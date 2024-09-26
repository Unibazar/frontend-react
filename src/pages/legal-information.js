import Section1 from "../components/legalInformation/Section1/Section1";
import Hero from "../components/legalInformation/Hero/Hero";
import Head from "next/head";
import Section2 from "../components/legalInformation/Section2/Section2";

const legalInformation = () => {
  return (
    <div className="p-10">
      <Head>
        <title>Legal Information | Unibazar</title>
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

export default legalInformation;
