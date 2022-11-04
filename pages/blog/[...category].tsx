import Layout from "../../components/layout";
import SingleBlogCard from "../../components/SingleBlogCard";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  GetAllBlogsForSingleCategory,
  GetAllCategories,
  GetAllPostAndCateogy,
  getSingleBlog,
} from "../../lib/api";

export default function BlogCategory({ categories, singleBlog }) {
  const router = useRouter();

  if (router.query.category.length == 1) {
    return (
      <Layout>
        <div>
          {categories.nodes[0].posts.nodes.map((post, index) => (
            <SingleBlogCard
              postDate={post.date}
              key={index}
              title={post.title}
              link={post.categories.nodes[0].slug}
              slug={post.categories.nodes[0].slug}
              imageURL={post.featuredImage?.node.sourceUrl}
              authorName={post.author.node.name}
              blogURL={`/blog/${post.categories.nodes[0].slug}/${post.slug}`}
            />
          ))}
        </div>
      </Layout>
    );
  } else if (router.query.category.length == 2) {
    return (
      <Layout>
        <div className="container mx-auto">
          <h2>{singleBlog.title}</h2>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: singleBlog.content }}
          />
        </div>
      </Layout>
    );
  }
}

export async function getStaticPaths() {
  const { posts } = await GetAllPostAndCateogy();
  const { categories } = await GetAllCategories();

  const categoryPaths = categories.nodes.map((category) => ({
    params: { category: [category.slug] },
  }));
  const categoryAndPostPaths = posts.edges.map((post) => ({
    params: { category: [post.node.categories.nodes[0].slug, post.node.slug] },
  }));

  let paths = categoryAndPostPaths.concat(categoryPaths);
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { categories } = await GetAllBlogsForSingleCategory(params.category[0]);
  const singleBlog = await getSingleBlog(params.category[1]);
  return {
    props: { categories, singleBlog },
  };
}
