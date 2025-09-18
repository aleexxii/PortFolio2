import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const intialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is required"),
    email: Z.string().email("Invalid email").nonempty("email is required"),
    subject: Z.string().nonempty("Subject is required"),
    message: Z.string().nonempty("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: intialValue,
    resolver: zodResolver(contactFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        title: data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toLocaleDateString(),
      };

      const serviceID = import.meta.env.VITE_SERVICE_ID;
      const templateID = import.meta.env.VITE_TEMPLATE_ID;
      const userID = import.meta.env.VITE_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, {
        publicKey: userID,
      });
    } catch (error) {
      console.log("Failed...", error);
      alert("Failed to send message, please try again");
    } finally {
      setLoading(false);
      reset(intialValue);
      alert("message send successfuly");
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="flex-center">
      <form className="w-full text-[#a7a7a7] flex flex-col gap-7">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Tommy"
            className="input"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="example@gmail.com"
            className="input"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="label" htmlFor="subject">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="Tommy"
            className="input"
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
        </div>
        <div>
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            type="text"
            id="message"
            placeholder="example@gmail.com"
            rows={"5"}
            className="input"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="disabled:opacity-70 cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
