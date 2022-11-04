import Layout from "../../components/layout";
import SingleBlogCard from "../../components/SingleBlogCard";
import Link from "next/link";
import { GetAllBlogsForSingleCategory, GetAllCategories } from "../../lib/api";

export default function BlogCategory({ categories }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-4 container mx-auto">
        {categories.nodes[0].posts.nodes.map((post, index) => (
          <SingleBlogCard
            postDate={post.date}
            key={index}
            title={post.title}
            link={post.categories.nodes[0].slug}
            slug={post.categories.nodes[0].slug}
            imageURL={post.featuredImage?.node.sourceUrl}
            authorName={post.author.node.name}
            blogURL={`blog/${post.categories.nodes[0].slug}/${post.slug}`}
          />
        ))}
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const { categories } = await GetAllCategories();
  const paths = categories.nodes.map((category) => ({
    params: { category: category.slug },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { categories } = await GetAllBlogsForSingleCategory(params.category);

  return {
    props: { categories },
  };
}
