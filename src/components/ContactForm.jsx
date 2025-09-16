import React from "react";

function ContactForm() {
  return (
    <div className="flex-center">
      <form className="w-full text-[#a7a7a7] flex flex-col gap-7">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" placeholder="Tommy" className="input" />
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            className="input"
          />
        </div>

        <div>
          <label className="label" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Tommy"
            className="input"
          />
        </div>
        <div>
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            placeholder="example@gmail.com"
            rows={"5"}
            className="input"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
