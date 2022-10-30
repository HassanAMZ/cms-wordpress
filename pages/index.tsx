import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title> Shahzada Ali Hassan</title>
      </Head>
      <Hero />
      <HowWeWork />
    </Layout>
  );
}
