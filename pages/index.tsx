import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";

export default function Index() {
  const allData = [
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Discuss with us",
      caption: "",
      ctaLink: "/lets-talk",
    },
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Adding Value and Design",
      caption: "",
      ctaLink: "/lets-talk",
    },
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Release the Brand",
      caption: "",
      ctaLink: "/lets-talk",
    },
  ];
  return (
    <Layout>
      <Head>
        <title> Shahzada Ali Hassan</title>
      </Head>
      <Hero />

      <HowWeWork allData={allData} />
    </Layout>
  );
}
