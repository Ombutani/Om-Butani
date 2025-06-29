import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xbloegyw");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };


const handleSubmitWithToast = async (e: React.FormEvent<HTMLFormElement>) => {
  setLoading(true);
  await handleSubmit(e);
  setLoading(false);
  toast({
    title: "Thanks for joining!",
    description: "I am replying soon.",
    duration: 4000,
  });
  form.name="";
  form.email="";
  form.message="";
  setForm({ name: "", email: "", message: "" });
  setTimeout(() => {
    window.location.reload();
  }
  , 1000);

};


  return (
    <section id="contact" className="min-h-screen py-20 ">
      <div className="container mx-auto max-w-xl px-4">
      <div className="text-center mb-16">
       
        <h2 className="text-4xl md:text-5xl font-bold  text-center font-[santoshi]  tracking-tight text-white animate-fade-in">
                Let's<span className="text-primary ml-2"> Connect</span>
            </h2>
        <p className="text-gray-400 mt-4">Feel free to reach out for collaborations or just a friendly hello</p>
      </div>

      <form onSubmit={handleSubmitWithToast} className="space-y-6 backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl">
        <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="name">
          Your Name
          </label>
          <input
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Please enter your name"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="email">
          Email Address
          </label>
          <input
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="message">
          Your Message
          </label>
          <textarea
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[150px]"
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="What would you like to say?"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        </div>

      <button
    disabled={state.submitting}
    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transform transition-all hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0"
    type="submit"
  >
    <FaEnvelope className="w-5 h-5" />
    {loading ? "Sending..." : "Send Message"}
  </button>
      </form>
      </div>
    </section>
  );
};



export default ContactForm;
