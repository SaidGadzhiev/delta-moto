import { useState } from "react";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Instagram, Facebook, Send } from "lucide-react";
import { CONTACT } from "@/data/site";
import { Reveal, SectionTitle } from "./Reveal";

const EMPTY = { first: "", last: "", email: "", phone: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.first.trim()) er.first = "Required";
    if (!form.last.trim()) er.last = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Valid email required";
    if (!form.message.trim()) er.message = "Tell us about your bike";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please check the highlighted fields.");
      return;
    }
    toast.success("Message sent — we'll ring you back shortly.");
    setForm(EMPTY);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#1C1C1C] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 gap-14 lg:gap-24">
        <Reveal>
          <form data-testid="contact-form" onSubmit={submit} noValidate className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <Field name="first" placeholder="First Name" value={form.first} onChange={set("first")} error={errors.first} />
              <Field name="last" placeholder="Last Name" value={form.last} onChange={set("last")} error={errors.last} />
            </div>
            <Field name="email" placeholder="Email" type="email" value={form.email} onChange={set("email")} error={errors.email} />
            <Field name="phone" placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
            <div>
              <textarea
                data-testid="contact-message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={set("message")}
                className={`w-full bg-[#121212] border px-4 py-3 text-white placeholder:text-dm-muted outline-none transition-colors focus:border-[#C9A227] resize-none ${
                  errors.message ? "border-red-500/70" : "border-white/10"
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              data-testid="contact-submit"
              type="submit"
              className="group inline-flex items-center gap-3 bg-[#C9A227] px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#121212] hover:brightness-110 transition-all"
            >
              Send
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <SectionTitle>Contact Us</SectionTitle>
            <div className="mt-9 space-y-6">
              <Info icon={<Phone size={18} />} label="Call the shop">
                <a href={`tel:${CONTACT.phone}`} className="hover:text-[#C9A227] transition-colors" data-testid="contact-phone">
                  {CONTACT.phone}
                </a>
              </Info>
              <Info icon={<MapPin size={18} />} label="The garage">{CONTACT.address}</Info>
              <Info icon={<Clock size={18} />} label="Hours">{CONTACT.hours}</Info>
            </div>

            <p className="mt-6 text-white font-medium leading-relaxed max-w-sm">
              {CONTACT.note}
            </p>

            <div className="mt-8 dm-frame p-2">
              <iframe
                title="Delta Moto location"
                data-testid="contact-map"
                src={CONTACT.map}
                className="w-full h-56 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Social href="https://instagram.com" label="Instagram"><Instagram size={20} /></Social>
              <Social href="https://facebook.com" label="Facebook"><Facebook size={20} /></Social>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/5 py-8 text-center text-dm-muted text-xs uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Delta Moto · Montreal, QC · Transport · Detail · Store
      </div>
    </section>
  );
};

const Field = ({ name, error, ...props }) => (
  <div>
    <input
      {...props}
      data-testid={`contact-${name}`}
      className={`w-full bg-[#121212] border px-4 py-3 text-white placeholder:text-dm-muted outline-none transition-colors focus:border-[#C9A227] ${
        error ? "border-red-500/70" : "border-white/10"
      }`}
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const Info = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    <span className="text-[#C9A227] mt-1">{icon}</span>
    <div>
      <p className="text-dm-muted text-xs uppercase tracking-[0.2em]">{label}</p>
      <p className="text-white text-lg mt-0.5">{children}</p>
    </div>
  </div>
);

const Social = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    data-testid={`social-${label.toLowerCase()}`}
    className="h-11 w-11 flex items-center justify-center border border-white/15 text-white hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
  >
    {children}
  </a>
);
