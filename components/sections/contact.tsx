"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error occurred");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "Failed to send message. Please try again later."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 md:p-20 w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-lg max-w-lg w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Connect with us!
          </h2>

          {/* Name Input */}
          <div className="mb-4">
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>

          {/* Success and Error Messages */}
          {success && (
            <p className="text-green-600 mb-4 text-center">
              Message sent successfully!
            </p>
          )}
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full"
            variant="default"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
