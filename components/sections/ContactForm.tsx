"use client";

import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Imię i nazwisko jest wymagane.";
    if (!form.email.trim()) {
      newErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Podaj prawidłowy adres e-mail.";
    }
    if (!form.subject.trim()) newErrors.subject = "Temat jest wymagany.";
    if (!form.message.trim()) {
      newErrors.message = "Wiadomość jest wymagana.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Wiadomość musi mieć co najmniej 20 znaków.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[1.75rem] border border-accent/25 bg-accent/10 p-8 text-center shadow-card"
      >
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-accent/10">
          <CheckCircle className="text-accent" size={42} />
        </div>
        <h3 className="mb-2 font-heading text-xl font-semibold text-text-primary">
          Wiadomość wysłana!
        </h3>
        <p className="text-text-secondary">
          Dziękujemy za kontakt. Odpowiemy w ciągu 1–2 dni roboczych.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-bold text-text-primary">
          Imię i nazwisko *
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`soft-input ${
            errors.name ? "border-error focus:border-error focus:ring-error/20" : ""
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-bold text-text-primary">
          Adres e-mail *
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`soft-input ${
            errors.email ? "border-error focus:border-error focus:ring-error/20" : ""
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-bold text-text-primary">
          Temat *
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={`soft-input ${
            errors.subject ? "border-error focus:border-error focus:ring-error/20" : ""
          }`}
        />
        {errors.subject && <p className="mt-1 text-sm text-error">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-text-primary">
          Wiadomość *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`soft-input resize-none ${
            errors.message ? "border-error focus:border-error focus:ring-error/20" : ""
          }`}
        />
        {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Wysyłanie..." : (
          <>
            <Send size={18} />
            Wyślij wiadomość
          </>
        )}
      </Button>
    </form>
  );
}
