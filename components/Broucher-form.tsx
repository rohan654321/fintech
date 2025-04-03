"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function BrochureForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phoneNumber: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // State for thank-you message

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { id: any; value: any; type: any; checked: any; }; }) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/download-brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Brochure request sent!");
        setForm({ name: "", email: "", company: "", jobTitle: "", phoneNumber: "", consent: false });

        // Show thank-you message
        setShowThankYou(true);

        // Hide thank-you message and show form again after 10 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 10000);
      } else {
        toast.error(data.error || "Something went wrong");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send request");
    }

    setLoading(false);
  };

  return (
    <motion.div className="max-w-md mx-auto space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {showThankYou ? (
        <motion.div className="p-6 bg-green-100 text-green-800 text-center rounded-md">
          <h2 className="text-lg font-semibold">Thank you!</h2>
          <p>Your request has been received. Check your email for the brochure.</p>
        </motion.div>
      ) : (
        <motion.form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-black">Full Name *</label>
            <input value={form.name} onChange={handleChange} type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">Business Email *</label>
            <input value={form.email} onChange={handleChange} type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black" required />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1 text-black">Company Name *</label>
            <input value={form.company} onChange={handleChange} type="text" id="company" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black" required />
          </div>

          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium mb-1 text-black">Job Title *</label>
            <input value={form.jobTitle} onChange={handleChange} type="text" id="jobTitle" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black" required />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1 text-black">Phone Number *</label>
            <input value={form.phoneNumber} onChange={handleChange} type="tel" id="phoneNumber" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black" required />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="consent" checked={form.consent} onChange={handleChange} className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black" required />
            <label htmlFor="consent" className="text-sm text-black">I agree to receive updates and communications.</label>
          </div>

          <motion.div className="pt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button type="submit" disabled={loading} className="bg-black text-white p-2 rounded w-full">
              {loading ? "Sending..." : "Request Brochure"}
            </button>
          </motion.div>
        </motion.form>
      )}
    </motion.div>
  );
}
