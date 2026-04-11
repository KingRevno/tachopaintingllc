import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Tacho Painting LLC",
  description:
    "Privacy policy for Tacho Painting LLC. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-denim px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base text-white/70">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-[#374151]">

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Overview</h2>
            <p className="leading-relaxed">
              Tacho Painting LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) is committed to protecting your privacy. This
              policy explains what information we collect through our website,
              how we use it, and how we protect it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">
              Information We Collect
            </h2>
            <p className="leading-relaxed">
              When you submit a quote request or contact us through our website,
              we may collect the following:
            </p>
            <ul className="ml-5 list-disc space-y-1.5 leading-relaxed">
              <li>Your name, phone number, and email address</li>
              <li>Your city or location</li>
              <li>Project details (service type, property type, description)</li>
              <li>Your preferred contact method and timeline</li>
              <li>Budget range</li>
            </ul>
            <p className="leading-relaxed">
              We do <strong>not</strong> collect health, financial, or any other
              sensitive personal information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              Information submitted through our forms is used solely to:
            </p>
            <ul className="ml-5 list-disc space-y-1.5 leading-relaxed">
              <li>Respond to your quote or service request</li>
              <li>Schedule and confirm estimate appointments</li>
              <li>Follow up regarding your project</li>
            </ul>
            <p className="leading-relaxed">
              Your information is reviewed by Alan Juarez (Owner) or
              Kimberly Pacheco (Office Administrator) and is never sold or shared with third
              parties for marketing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Data Retention</h2>
            <p className="leading-relaxed">
              We retain customer information for up to <strong>1 year</strong>{" "}
              from the date of submission. After that period, your information
              is deleted from our records.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">
              Third-Party Services
            </h2>
            <p className="leading-relaxed">
              Our website is hosted on Vercel. Email delivery is handled by
              Resend. These services may process data as part of their
              infrastructure. Neither CCPA (California) nor GDPR (EU) applies
              to our current operations, as we serve customers in North Carolina
              only.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Your Rights</h2>
            <p className="leading-relaxed">
              You may request that we delete your information at any time by
              contacting us directly. We will honor all reasonable requests
              within 30 days.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this privacy policy, please reach
              out:
            </p>
            <ul className="ml-5 list-disc space-y-1.5 leading-relaxed">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-denim underline underline-offset-2 hover:opacity-75"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>Phone: {BUSINESS.phone}</li>
              <li>Address: {BUSINESS.address}, {BUSINESS.hours.weekdays.split(":")[0]}</li>
            </ul>
          </div>

          <p className="border-t border-gainsboro pt-6 text-sm text-[#1a1a2e]/40">
            This policy is effective as of April 2026 and applies to information
            collected through tachopaintingllc.com.
          </p>
        </div>
      </section>
    </>
  );
}
