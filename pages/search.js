import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import { slugify } from "@lib/utils/textConverter";
import Post from "@partials/Post";
import { useSearchContext } from "context/state";
import { useRouter } from "next/router";

const SearchPage = ({ authors }) => {
  const router = useRouter();
  const { query } = router;
  const keyword = slugify(query.key);
  const { posts } = useSearchContext();

  const searchResults = posts.filter((product) => {
    if (product.frontmatter.draft) {
      return !product.frontmatter.draft;
    }
    if (slugify(product.frontmatter.title).includes(keyword)) {
      return product;
    } else if (
      product.frontmatter.categories.find((category) =>
        slugify(category).includes(keyword)
      )
    ) {
      return product;
    } else if (
      product.frontmatter.tags.find((tag) => slugify(tag).includes(keyword))
    ) {
      return product;
    } else if (slugify(product.content).includes(keyword)) {
      return product;
    }
  });

  return (
    <Base title={`Search results for ${query.key}`}>
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Search results for <span className="text-primary">{query.key}</span>
          </h1>
          {searchResults.length > 0 ? (
            <div className="row">
              {searchResults.map((post, i) => (
                <div key={`key-${i}`} className="col-12 mb-8 sm:col-6">
                  <Post post={post} authors={authors} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-h3 shadow">
              No Search Found
            </div>
          )}
        </div>
      </div>
    </Base>
  );
};

export default SearchPage;

// get authors data
export const getStaticProps = () => {
  const authors = getSinglePage("content/authors");
  return {
    props: {
      authors: authors,
    },
  };
};
