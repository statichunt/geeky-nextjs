import { markdownify } from "@lib/utils/textConverter";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, bg_img, addresses } = frontmatter;

  return (
    <section className="section  lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="-z-[1] object-cover object-top dark:invisible"
            src={bg_img}
            fill="true"
            alt=""
          />
          <div className="lg:col-6">
            {markdownify(
              title,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]"
            )}
          </div>
          <div className="rounded border border-border p-6 dark:border-darkmode-border lg:col-6">
            <h2>
              Send Us A
              <span className="ml-1.5 inline-flex items-center text-primary">
                Message
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2929 7.70711C12.9024 7.31658 12.9024 6.68342 13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071C12.9024 17.3166 12.9024 16.6834 13.2929 16.2929L16.5858 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L13.2929 7.70711Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h2>
            <form className="contact-form mt-12">
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Full name
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  type="text"
                  placeholder="Thomas Milano"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="email">
                  Email Address
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="subject">
                  Subject
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  placeholder="Blog advertisement"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="message">
                  Your Message Here
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <textarea
                  className="form-textarea w-full"
                  placeholder="Hello I’m Mr ‘x’ from………….."
                  rows="7"
                />
              </div>
              <button className="btn btn-primary">Send Now</button>
            </form>
          </div>
        </div>
        <div className="row">
          {addresses.map((address, index) => (
            <div key={"address-" + index} className=" md:col-6 lg:col-4">
              <div
                className="my-4 flex h-[100px] items-center justify-center
               rounded border border-border p-4 dark:border-darkmode-border"
              >
                <ImageFallback
                  src={address.icon}
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="ml-2 text-lg font-bold">{address.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
