import Base from "@layouts/Baseof";
import dateFormat from "@lib/utils/dateFormat";
import { markdownify } from "@lib/utils/textConverter";
import { DiscussionEmbed } from "disqus-react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Post from "./partials/Post";
import Sidebar from "./partials/Sidebar";
import shortcodes from "./shortcodes/all";
import config from "@config/config.json";
const { disqus } = config.settings;

const PostSingle = ({
  frontmatter,
  content,
  mdxContent,
  slug,
  posts,
  allCategories,
  relatedPosts,
}) => {
  let { description, title, date, image, categories, authors } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={title} description={description}>
      <section className="section single-blog mt-6">
        <div className="container">
          <div className="row">
            <div className="lg:col-8">
              <article>
                <div className="relative">
                  {image && (
                    <Image
                      src={image}
                      height="500"
                      width="1000"
                      alt={title}
                      className="rounded-lg"
                    />
                  )}
                  <ul className="absolute top-3 left-2 flex flex-wrap items-center">
                    {categories.map((tag, index) => (
                      <li
                        className="mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white"
                        key={"tag-" + index}
                      >
                        <Link
                          className="capitalize"
                          href={`/categories/${tag.replace(" ", "-")}`}
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {markdownify(title, "h1", "lg:text-[42px] mt-16")}
                <ul className="mt-4 flex items-center space-x-4">
                  <li>
                    <Link
                      className="inline-flex items-center text-xs font-bold leading-[12px]"
                      href="#"
                    >
                      <svg
                        className="mr-1"
                        width="12px"
                        height="12px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      {authors}
                    </Link>
                  </li>
                  <li className="inline-flex items-center text-xs font-bold leading-[12px]">
                    <svg
                      className="mr-1"
                      fill="currentColor"
                      width="12px"
                      height="12px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3,22H21a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H3A1,1,0,0,0,2,6V21A1,1,0,0,0,3,22ZM4,7H20v3H4Zm0,5H20v8H4Z" />
                    </svg>
                    {dateFormat(date)}
                  </li>
                </ul>
                <div className="content mb-16">
                  <MDXRemote {...mdxContent} components={shortcodes} />
                </div>
              </article>
            </div>
            <Sidebar posts={posts} categories={allCategories} />
          </div>

          {disqus.enable && (
            <div className="row">
              <DiscussionEmbed
                shortname={disqus.shortname}
                config={disqus.config}
              />
            </div>
          )}
        </div>

        {/* Related posts */}
        <div className="container mt-20">
          <h2 className="h2 section-title">Related Posts</h2>
          <div className="row mt-16 justify-center">
            {relatedPosts.map((post) => (
              <div key={post.frontmatter.slug} className="mb-12 lg:col-4">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
