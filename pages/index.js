import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, author_name, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? "/images/banner-bg-shape-dark.svg"
              : "/images/banner-bg-shape.svg"
          }
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className="mt-12 text-center lg:mt-0 lg:text-left lg:col-6">
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                <span>to {author_name} Blog</span>
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              <Link
                className="btn btn-primary mt-6"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            </div>
            <div className="col-9 lg:col-6">
              <ImageFallback
                className="mx-auto object-contain"
                src={banner.image}
                width={548}
                height={443}
                priority={true}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Home main */}
      <section className="section mt-16 ">
        <div className="container">
          {featured_posts.enable &&
            markdownify(featured_posts.title, "h2", "h2 section-title")}
          <div className="row mt-11 items-start">
            <div className="lg:col-8">
              {/* Featured posts */}
              {featured_posts.enable && (
                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <div className="lg:col-6">
                      <Post post={featuredPosts[0]} />
                    </div>
                    <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark lg:mt-0 lg:col-6">
                      {featuredPosts
                        .slice(1, featuredPosts.length)
                        .map((post, i, arr) => (
                          <div
                            className={`mb-6 flex items-center pb-6 ${
                              i !== arr.length - 1 &&
                              "border-b border-border dark:border-darkmode-border"
                            }`}
                            key={`key-${i}`}
                          >
                            {post.frontmatter.image && (
                              <ImageFallback
                                className="mr-3 h-[85px] rounded object-cover"
                                src={post.frontmatter.image}
                                alt={post.frontmatter.title}
                                width={105}
                                height={85}
                              />
                            )}
                            <div>
                              <h3 className="h5 mb-2">
                                <Link
                                  href={`/${blog_folder}/${post.slug}`}
                                  className="block hover:text-primary"
                                >
                                  {post.frontmatter.title}
                                </Link>
                              </h3>
                              <p className="inline-flex items-center font-bold">
                                <FaRegCalendar className="mr-1.5" />
                                {dateFormat(post.frontmatter.date)}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Promotion */}
              {promotion.enable && (
                <Link
                  href={promotion.link}
                  className="relative mt-11 mb-11 block h-[122px]"
                >
                  <ImageFallback fill src={promotion.image} alt="promotion" />
                </Link>
              )}

              {/* Recent Posts */}
              {recent_posts.enable && (
                <>
                  {markdownify(
                    recent_posts.title,
                    "h2",
                    "h2 section-title mt-16"
                  )}
                  <div className="mb-16 mt-12 rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row -mt-16">
                      {sortPostByDate.slice(0, showPosts).map((post) => (
                        <div className="mt-16 lg:col-6" key={post.slug}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <Pagination
                totalPages={Math.ceil(posts.length / showPosts)}
                currentPage={1}
              />
            </div>
            {/* sidebar */}
            <Sidebar posts={posts} categories={categories} />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
