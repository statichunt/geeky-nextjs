import { markdownify } from "@lib/utils/textConverter";
import ImageFallback from "./components/ImageFallback";
import { FaUserAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { BsArrowRightShort } from "react-icons/bs";
import CustomForm from "./components/contact-form";
const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, bg_img, addresses } = frontmatter;
  const addressList = addresses.map((address) => {
    const icon =
      address.icon === "FaUserAlt"
        ? FaUserAlt
        : address.icon === "FaMapMarkerAlt"
        ? FaEnvelope
        : FaMapMarkerAlt;
    return {
      ...address,
      icon,
    };
  });

  return (
    <section className="section  lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="-z-[1] object-cover object-top dark:invisible"
            src={bg_img}
            fill="true"
            alt=""
            priority={true}
          />
          <div className="lg:col-6">
            {markdownify(
              title,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]"
            )}
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6 dark:border-darkmode-border lg:col-6">
            <h2>
              Send Us A
              <span className="ml-1.5 inline-flex items-center text-primary">
                Message
                <BsArrowRightShort />
              </span>
            </h2>
            <MailchimpSubscribe
              url="xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn"
              render={({ subscribe, status, message }) => (
                <CustomForm
                  onValidated={(formData) => subscribe(formData)}
                  status={status}
                  message={message}
                />
              )}
            />
          </div>
        </div>
        <div className="row">
          {addressList.map((address, index) => {
            return (
              <div key={"address-" + index} className=" md:col-6 lg:col-4">
                <Link
                  href={address.link ? address.link : "#"}
                  className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border  "
                >
                  {address.icon()}
                  <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                    {address.content}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
