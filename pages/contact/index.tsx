import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: 'hello there this is some thing good',
    missionUnderstanding: 'yes',
  });
  const [status, setStatus] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending Response...');
    console.log('Form Data:', formData);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Submission successful!');
        alert('Thank you for contacting PRIZE. We will be in touch soon.');
        setFormData({ fullName: '', email: '', phone: '', reason: '', missionUnderstanding: 'yes' });
      } else {
        alert('Submission failed. Please try again.!');
        setStatus('Submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('Error occurred. Please try again.');
      alert('Submission failed. Please try again.!');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | PRIZE Volunteer</title>
        <meta name="description" content="Get in touch with us to become a PRIZE volunteer." />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center rounded-xl bg-gray-50 px-4 py-8">
        <h1 className="mb-6 text-center font-serif text-4xl text-gray-800">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600">
          Interested in becoming a PRIZE volunteer? Fill out the form below, and we’ll get back to you!
        </p>

        <form
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-lg"
        >
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Why You Want to Become a Volunteer */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="reason">
              Why do you want to become a PRIZE volunteer?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Understanding Mission */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Do you understand the mission of PRIZE?
            </label>
            <select
              name="missionUnderstanding"
              value={formData.missionUnderstanding}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </form>
        {status.length > 0 ? (
          <div className=" fixed top-24 left-auto right-auto z-10 rounded-full bg-white px-6 py-4 shadow-xl ">
            <h2>{status}</h2>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Contact;
