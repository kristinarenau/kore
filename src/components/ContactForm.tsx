"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const SUBJECTS = [
  "Brand Strategy",
  "Growth Advisory",
  "Identity & Messaging",
  "General Inquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ mode: "onBlur" });

  // Clear the success message (and let the form reappear) a few seconds after send.
  useEffect(() => {
    if (status !== "success") return;
    const timeout = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(timeout);
  }, [status]);

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Missing EmailJS environment variables. See .env.local.example."
      );
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        { publicKey }
      );
      setStatus("success");
      reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full border-b border-stone-moss/25 bg-transparent py-3 text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-sea-foam-deep focus:outline-none";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="status"
            className="flex min-h-[420px] flex-col items-center justify-center rounded-sm bg-white/60 p-10 text-center"
          >
            <p className="font-serif text-2xl text-stone-moss">Thank you.</p>
            <p className="mt-2 text-muted">We&rsquo;ll be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-7"
          >
            <div>
              <label htmlFor="name" className="text-xs font-medium tracking-wide text-muted uppercase">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClasses}
                {...register("name", { required: "Please enter your name." })}
              />
              <FieldError id="name-error" message={errors.name?.message} />
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-medium tracking-wide text-muted uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClasses}
                {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email.",
                  },
                })}
              />
              <FieldError id="email-error" message={errors.email?.message} />
            </div>

            <div>
              <label htmlFor="subject" className="text-xs font-medium tracking-wide text-muted uppercase">
                Subject
              </label>
              <select
                id="subject"
                defaultValue=""
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`${inputClasses} appearance-none`}
                {...register("subject", { required: "Please choose a subject." })}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <FieldError id="subject-error" message={errors.subject?.message} />
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-medium tracking-wide text-muted uppercase">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClasses} resize-none`}
                {...register("message", {
                  required: "Please enter a message.",
                  minLength: { value: 10, message: "Message should be at least 10 characters." },
                })}
              />
              <FieldError id="message-error" message={errors.message?.message} />
            </div>

            {status === "error" && (
              <p role="alert" className="text-sm text-red-700">
                Something went wrong sending your message. Please try again, or
                email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-sm bg-sea-foam-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 ease-[var(--ease-luxury)] hover:-translate-y-0.5 hover:bg-stone-moss hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1.5 text-xs text-red-700"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
