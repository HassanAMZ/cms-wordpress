import Link from "next/link";
import Layout from "../components/layout";
import { GetAllCategories } from "../lib/api";
export default function Contact({ categories }) {
  console.log(categories.nodes[0].slug);
  const allCategoryList = categories.nodes.map((categroy, index) => {
    return (
      <Link key={index} href={`/blog/${categroy.slug}`}>
        {categroy.name}
      </Link>
    );
  });

  return (
    <Layout>
      <ul className="container mx-auto flex flex-col">{allCategoryList}</ul>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const { categories } = await GetAllCategories();

  return {
    props: { categories },
  };
};
