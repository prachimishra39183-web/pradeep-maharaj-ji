'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      {submitted ? (
        <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron/15">
            <Send className="h-6 w-6 text-saffron" />
          </div>

          <h3 className="font-serif-display text-xl font-medium text-charcoal">
            Message Sent
          </h3>

          <p className="mt-2 text-sm text-charcoal/60">
            Thank you for reaching out. We will respond soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border-2 border-[#B8CBD9] bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-all duration-200 hover:border-[#9EB7C9] focus:border-maroon focus:ring-2 focus:ring-maroon/10"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border-2 border-[#B8CBD9] bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-all duration-200 hover:border-[#9EB7C9] focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal"
              >
                Phone
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="w-full rounded-lg border-2 border-[#B8CBD9] bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-all duration-200 hover:border-[#9EB7C9] focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              />
            </div>

          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="w-full resize-none rounded-lg border-2 border-[#B8CBD9] bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-all duration-200 hover:border-[#9EB7C9] focus:border-maroon focus:ring-2 focus:ring-maroon/10"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-maroon px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#5F2424] hover:shadow-lg"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>

        </form>
      )}
    </div>
  );
}