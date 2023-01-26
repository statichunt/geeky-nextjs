import React, { useState } from "react";

function CustomForm({ status, message, onValidated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name &&
      email &&
      subject &&
      msg &&
      email.indexOf("@") > -1 &&
      onValidated({ NAME: name, EMAIL: email, SUBJECT: subject, MESSAGE: msg });
    resetForm();
  };
  return (
    <>
      <form className="contact-form mt-12" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="name">
            Full name
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <input
            className="form-input w-full"
            name="name"
            type="text"
            placeholder="Thomas Milano"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="email">
            Email Address
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <input
            className="form-input w-full"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="subject">
            Subject
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <input
            className="form-input w-full"
            name="subject"
            type="text"
            placeholder="Blog advertisement"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="message">
            Your Message Here
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <textarea
            className="form-textarea w-full"
            placeholder="Hello I’m Mr ‘x’ from………….."
            rows="7"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Send Now" />
      </form>
      {status === "sending" && (
        <div className="mt-4 text-primary">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mt-4 text-red-700"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div className="mt-4 text-green-700">Subscribed !</div>
      )}
    </>
  );
}

export default CustomForm;
