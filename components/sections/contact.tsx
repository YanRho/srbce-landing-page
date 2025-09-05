"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" }); // website = honeypot
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<{[k: string]: boolean}>({});

  const emailInvalid = useMemo(() => {
    if (!formData.email) return false;
    return !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email);
  }, [formData.email]);

  const messageTooShort = useMemo(() => formData.message.trim().length > 0 && formData.message.trim().length < 10, [formData.message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (emailInvalid) {
      setError("Please enter a valid email address.");
      return;
    }
    if (messageTooShort || formData.message.trim().length === 0) {
      setError("Please provide a little more detail in your message.");
      return;
    }

    if (formData.website) {
      setError("Submission failed. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Unknown error occurred");
      }

      setSuccess("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message || "Failed to send message. Please try again later.");
      else setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#040a30]"
      aria-label="Contact section"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#040a30]/70 via-[#040a30]/80 to-black/90"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-16 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Form Card Only */}
          <div className="rounded-2xl bg-white shadow-xl border border-slate-200 p-6 md:p-8">
            <form onSubmit={handleSubmit} noValidate aria-busy={loading} className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
              <p className="text-slate-600 text-sm">All fields are required.</p>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="p-3"
                  aria-invalid={touched.name && !formData.name ? true : undefined}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="p-3"
                  aria-invalid={touched.email && (emailInvalid || !formData.email) ? true : undefined}
                  aria-describedby={emailInvalid ? "email-error" : undefined}
                />
                {touched.email && emailInvalid && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">Enter a valid email address.</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="p-3"
                  aria-invalid={touched.message && (messageTooShort || !formData.message) ? true : undefined}
                  aria-describedby={messageTooShort ? "message-error" : undefined}
                />
                {touched.message && messageTooShort && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">Please add at least 10 characters.</p>
                )}
              </div>

              {/* Status */}
              {success && (
                <p className="text-green-600 text-sm" role="status">{success}</p>
              )}
              {error && (
                <p className="text-red-600 text-sm" role="alert">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#5eb4f7] hover:bg-[#2b45ff] text-white"
              >
                {loading ? "Sending…" : "Send Message"}
              </Button>

              <p className="text-[11px] text-slate-500">
                This site is protected by basic spam prevention. By submitting, you agree to our communication policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
