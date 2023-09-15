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
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;

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

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner_bg_cropped.png"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />
        


        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-6"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
              )}
            </div>
            {banner.image_enable && (
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
            )}
          </div>
        </div>
      </section>

        {/* Nova seção de texto */}
        <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Bem vindos!</h2>
              <p><br /></p>
              <p>
                Sejam muito bem-vindos a segunda edição da Exposição Científica, Tecnológica e Cultural (EXPOTEC) do IFRN, campus Ceará-Mirim. O evento tem como objetivo agregar toda a comunidade do IFRN, campus Ceará-Mirim, e demais interessados em prol do compartilhamento da cultura e produção tecnológica e científica que se realiza na área de abrangência do referido campus. Dessa forma, além de se propor a ser um espaço de construção e compartilhamento de conhecimento, o evento também incentiva o eixo artístico-cultural da região.
              </p>
              <p><br /></p>
              <p>
                Tendo como tema "Como as contribuições da Ciência podem colaborar com a construção de uma sociedade mais justa, inclusiva, sustentável e igualitária”, a II EXPOTEC convida toda a comunidade a refletir acerca das diferentes formas como a Ciência pode contribuir para que tenhamos uma sociedade em que a Justiça seja cada vez mais fortalecida e valorizada; em que todos os sujeitos tenham condições de exercer sua cidadania e gozar plenamente de seus direitos (independente de renda, raça, etnia, origem, gênero, orientação sexual, condição neurológica ou física); e que possamos viver em harmonia com o meio ambiente visando a preservação da vida na terra e promovendo uma relação saudável entre humanidade e natureza.
              </p>
              <p><br /></p>
              <p>
                Pensando sobre tais questões que desafiam a contemporaneidade, a II EXPOTEC se abre para receber trabalhos que discutam, criem entendimento ou apresentem proposições dentro do tema do evento, sob as seguintes modalidades: comunicação oral, exposição de banners, relato de experiência e mostra tecnológica. Ademais, propostas de oficinas e minicursos são muito bem-vindas, ao corroborarem com as discussões sob uma perspectiva mais prática.
              </p>
              <p><br /></p>
              <p>
                Por fim, reiteramos o convite a todos os interessados e desejamos que a II EXPOTEC contribua com o avanço e melhoria da nossa sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção de texto */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Chamda de trabalhos extendida!</h2>
              <p><br /></p>
              <p>
                A chamada de trabalhos foi extendida até o dia 17 de set. de 2023 23:59h. Aproveite essa oportunidade para submeter seu trabalho!                
              </p>         
              <p><br /></p>
              <p>
                Clique <Link href="/chamada-de-trabalhos"> aqui </Link> para submeter seu trabalho.
              </p>                            
            </div>
          </div>
        </div>
      </section>


      {/* Home main */}
      <section className="section">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:mb-0 lg:col-8">
              {/* Featured posts */}
              {featured_posts.enable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">
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
                </div>
              )}

              {/* Promotion */}
              {promotion.enable && (
                <Link href={promotion.link} className="section block pt-0">
                  <ImageFallback
                    className="h-full w-full"
                    height="115"
                    width="800"
                    src={promotion.image}
                    alt="promotion"
                  />
                </Link>
              )}

              {/* Recent Posts */}
              {recent_posts.enable && (
                <div className="section pt-0">
                  {markdownify(recent_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                    <div className="row">
                      {sortPostByDate.slice(0, showPosts).map((post) => (
                        <div className="mb-8 md:col-6" key={post.slug}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* <Pagination
                totalPages={Math.ceil(posts.length / showPosts)}
                currentPage={1}
              /> */}
            </div>
            {/* sidebar 
            <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            /> */}
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
