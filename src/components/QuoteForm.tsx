"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Loader2, CheckCircle2 } from "lucide-react";
import type { QuoteFormData } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormErrors = Partial<Record<keyof QuoteFormData, string>>;

const EMPTY_FORM: QuoteFormData = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  referralSource: "",
  service: "",
  propertyType: "",
  projectDescription: "",
  squareFootage: "",
  startTimeline: "",
  contactMethod: "",
  bestTime: "",
  budgetRange: "",
  additionalNotes: "",
};

// ─── Step metadata ────────────────────────────────────────────────────────────

const STEPS = [
  { number: 1, label: "Your Info" },
  { number: 2, label: "Your Project" },
  { number: 3, label: "Timeline & Budget" },
];

// ─── Validation ───────────────────────────────────────────────────────────────

function validateStep(step: number, data: QuoteFormData): FormErrors {
  const errors: FormErrors = {};
  if (step === 1) {
    if (!data.fullName.trim()) errors.fullName = "Full name is required.";
    if (!data.phone.trim()) errors.phone = "Phone number is required.";
    if (!data.email.trim()) errors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Please enter a valid email.";
    if (!data.city.trim()) errors.city = "City / Town is required.";
  }
  if (step === 2) {
    if (!data.service) errors.service = "Please select a service.";
    if (!data.propertyType) errors.propertyType = "Please select a property type.";
    if (!data.projectDescription.trim())
      errors.projectDescription = "Please describe your project.";
  }
  if (step === 3) {
    if (!data.startTimeline) errors.startTimeline = "Please select a start timeline.";
    if (!data.contactMethod) errors.contactMethod = "Please select a contact method.";
    if (!data.budgetRange) errors.budgetRange = "Budget range is required.";
  }
  return errors;
}

// ─── Shared input styles ──────────────────────────────────────────────────────

const inputBase =
  "w-full rounded-lg border border-gainsboro bg-white p-3 text-sm text-[#1a1a2e] placeholder-[#1a1a2e]/30 transition-colors duration-150 focus:border-denim focus:outline-none focus:ring-1 focus:ring-denim";
const inputError =
  "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-400";
const labelBase = "mb-1 block text-sm font-medium text-[#1a1a2e]";

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={labelBase}>
      {children}
      {required && <span className="ml-0.5 text-red-500">*</span>}
    </label>
  );
}

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {STEPS.map((step, idx) => {
          const done = current > step.number;
          const active = current === step.number;
          return (
            <div key={step.number} className="flex flex-1 items-center">
              {/* Circle */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${
                    done
                      ? "bg-denim text-white"
                      : active
                      ? "bg-denim text-white ring-4 ring-denim/20"
                      : "bg-gainsboro text-[#1a1a2e]/40"
                  }`}
                >
                  {done ? <Check size={16} strokeWidth={3} /> : step.number}
                </div>
                <span
                  className={`hidden text-xs font-medium sm:block ${
                    active ? "text-denim" : done ? "text-denim/70" : "text-[#1a1a2e]/30"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div
                  className={`mx-2 h-0.5 flex-1 transition-colors duration-200 ${
                    current > step.number ? "bg-denim" : "bg-gainsboro"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────

function Step1({
  data,
  errors,
  onChange,
}: {
  data: QuoteFormData;
  errors: FormErrors;
  onChange: (field: keyof QuoteFormData, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="fullName" required>
          Full Name
        </Label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          value={data.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className={`${inputBase} ${errors.fullName ? inputError : ""}`}
          placeholder="John Smith"
        />
        <FieldError msg={errors.fullName} />
      </div>

      <div>
        <Label htmlFor="phone" required>
          Phone Number
        </Label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={`${inputBase} ${errors.phone ? inputError : ""}`}
          placeholder="(919) 000-0000"
        />
        <FieldError msg={errors.phone} />
      </div>

      <div>
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={`${inputBase} ${errors.email ? inputError : ""}`}
          placeholder="you@example.com"
        />
        <FieldError msg={errors.email} />
      </div>

      <div>
        <Label htmlFor="city" required>
          City / Town
        </Label>
        <input
          id="city"
          type="text"
          value={data.city}
          onChange={(e) => onChange("city", e.target.value)}
          className={`${inputBase} ${errors.city ? inputError : ""}`}
          placeholder="Wilson, Raleigh, Durham..."
        />
        <FieldError msg={errors.city} />
      </div>

      <div>
        <Label htmlFor="referralSource">How did you hear about us?</Label>
        <select
          id="referralSource"
          value={data.referralSource}
          onChange={(e) => onChange("referralSource", e.target.value)}
          className={inputBase}
        >
          <option value="">Select an option...</option>
          <option>Google Search</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>TikTok</option>
          <option>Referral from a friend</option>
          <option>Drove by / saw our work</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  );
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────

function Step2({
  data,
  errors,
  onChange,
}: {
  data: QuoteFormData;
  errors: FormErrors;
  onChange: (field: keyof QuoteFormData, value: string) => void;
}) {
  const PROPERTY_TYPES = ["Residential", "Commercial", "Both"];

  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="service" required>
          Service Needed
        </Label>
        <select
          id="service"
          value={data.service}
          onChange={(e) => onChange("service", e.target.value)}
          className={`${inputBase} ${errors.service ? inputError : ""}`}
        >
          <option value="">Select a service...</option>
          <option>High-End Interior Painting</option>
          <option>Cabinet Refinishing &amp; Factory Finishes</option>
          <option>Specialty Exterior Coatings &amp; Limewashing</option>
          <option>Deck &amp; Wood Restoration (Staining)</option>
          <option>Epoxy &amp; Concrete Floor Coatings</option>
          <option>Not sure — I need guidance</option>
        </select>
        <FieldError msg={errors.service} />
      </div>

      <div>
        <Label htmlFor="propertyType" required>
          Property Type
        </Label>
        <div className="mt-2 flex flex-wrap gap-3">
          {PROPERTY_TYPES.map((type) => (
            <label
              key={type}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                data.propertyType === type
                  ? "border-denim bg-denim/5 text-denim"
                  : "border-gainsboro bg-white text-[#1a1a2e]/70 hover:border-denim/40"
              }`}
            >
              <input
                type="radio"
                name="propertyType"
                value={type}
                checked={data.propertyType === type}
                onChange={(e) => onChange("propertyType", e.target.value)}
                className="sr-only"
              />
              {type}
            </label>
          ))}
        </div>
        <FieldError msg={errors.propertyType} />
      </div>

      <div>
        <Label htmlFor="projectDescription" required>
          Project Description
        </Label>
        <textarea
          id="projectDescription"
          rows={4}
          value={data.projectDescription}
          onChange={(e) => onChange("projectDescription", e.target.value)}
          className={`${inputBase} resize-none ${errors.projectDescription ? inputError : ""}`}
          placeholder="Describe your project — what rooms, surfaces, current condition, any specific concerns..."
        />
        <FieldError msg={errors.projectDescription} />
      </div>

      <div>
        <Label htmlFor="squareFootage">Approximate Square Footage</Label>
        <select
          id="squareFootage"
          value={data.squareFootage}
          onChange={(e) => onChange("squareFootage", e.target.value)}
          className={inputBase}
        >
          <option value="">Select an option...</option>
          <option>Under 500 sq ft</option>
          <option>500–1,000 sq ft</option>
          <option>1,000–2,000 sq ft</option>
          <option>2,000–3,500 sq ft</option>
          <option>3,500+ sq ft</option>
          <option>Not sure</option>
        </select>
      </div>
    </div>
  );
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────

function Step3({
  data,
  errors,
  onChange,
  consent,
  onConsentChange,
}: {
  data: QuoteFormData;
  errors: FormErrors;
  onChange: (field: keyof QuoteFormData, value: string) => void;
  consent: boolean;
  onConsentChange: (val: boolean) => void;
}) {
  const CONTACT_METHODS = ["Phone Call", "Text Message", "Email"];

  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="startTimeline" required>
          When do you want to start?
        </Label>
        <select
          id="startTimeline"
          value={data.startTimeline}
          onChange={(e) => onChange("startTimeline", e.target.value)}
          className={`${inputBase} ${errors.startTimeline ? inputError : ""}`}
        >
          <option value="">Select a timeline...</option>
          <option>ASAP</option>
          <option>Within 2 weeks</option>
          <option>Within a month</option>
          <option>1–3 months out</option>
          <option>Just planning ahead</option>
        </select>
        <FieldError msg={errors.startTimeline} />
      </div>

      <div>
        <Label htmlFor="contactMethod" required>
          Preferred Contact Method
        </Label>
        <div className="mt-2 flex flex-wrap gap-3">
          {CONTACT_METHODS.map((method) => (
            <label
              key={method}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                data.contactMethod === method
                  ? "border-denim bg-denim/5 text-denim"
                  : "border-gainsboro bg-white text-[#1a1a2e]/70 hover:border-denim/40"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={data.contactMethod === method}
                onChange={(e) => onChange("contactMethod", e.target.value)}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
        <FieldError msg={errors.contactMethod} />
      </div>

      <div>
        <Label htmlFor="bestTime">Best Time to Reach You</Label>
        <select
          id="bestTime"
          value={data.bestTime}
          onChange={(e) => onChange("bestTime", e.target.value)}
          className={inputBase}
        >
          <option value="">Select a time...</option>
          <option>Morning (8am–12pm)</option>
          <option>Afternoon (12pm–5pm)</option>
          <option>Evening (5pm–7pm)</option>
          <option>Anytime</option>
        </select>
      </div>

      {/* Budget — visually accented */}
      <div className="rounded-lg border-l-4 border-denim bg-denim/[0.03] p-4">
        <Label htmlFor="budgetRange" required>
          Your Budget Range
        </Label>
        <select
          id="budgetRange"
          value={data.budgetRange}
          onChange={(e) => onChange("budgetRange", e.target.value)}
          className={`${inputBase} ${errors.budgetRange ? inputError : ""}`}
        >
          <option value="">Select your budget...</option>
          <option>Under $1,000</option>
          <option>$1,000 – $2,500</option>
          <option>$2,500 – $5,000</option>
          <option>$5,000 – $10,000</option>
          <option>$10,000 – $20,000</option>
          <option>$20,000+</option>
          <option>I'm flexible / not sure yet</option>
        </select>
        <p className="mt-1.5 text-xs text-[#1a1a2e]/50">
          This helps us prepare the right scope for your estimate. We never share your budget.
        </p>
        <FieldError msg={errors.budgetRange} />
      </div>

      <div>
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <textarea
          id="additionalNotes"
          rows={3}
          value={data.additionalNotes}
          onChange={(e) => onChange("additionalNotes", e.target.value)}
          className={`${inputBase} resize-none`}
          placeholder="Anything else we should know before your estimate appointment?"
        />
      </div>

      {/* Consent */}
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gainsboro bg-white p-4 transition-colors hover:border-denim/40">
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors duration-150 ${
            consent ? "border-denim bg-denim" : "border-gainsboro"
          }`}
        >
          {consent && <Check size={12} strokeWidth={3} className="text-white" />}
        </div>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          className="sr-only"
        />
        <span className="text-sm leading-relaxed text-[#1a1a2e]/70">
          I understand this form is for scheduling a free estimate only. Pricing
          will be discussed during the appointment.
          <span className="ml-0.5 text-red-500">*</span>
        </span>
      </label>
    </div>
  );
}

// ─── Success card ─────────────────────────────────────────────────────────────

function SuccessCard() {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <CheckCircle2 size={64} className="text-denim" strokeWidth={1.5} />
      <h3 className="mt-6 text-2xl font-extrabold text-[#1a1a2e]">
        Your request is on its way!
      </h3>
      <p className="mt-3 max-w-sm text-base text-[#1a1a2e]/65">
        Jose or Kimberly will reach out within 1 business day to confirm your
        estimate appointment.
      </p>
      <p className="mt-3 text-xs text-[#1a1a2e]/40">
        Check your spam folder if you don&apos;t hear back within 24 hours.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-denim px-8 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
      >
        Back to Home
      </Link>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof QuoteFormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  }

  function handleBack() {
    setErrors({});
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    const stepErrors = validateStep(3, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    if (!consent) {
      setSubmitError("Please check the consent box to continue.");
      return;
    }
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          "Something went wrong. Please call us at (919) 931-0841"
        );
      }
    } catch {
      setSubmitError("Something went wrong. Please call us at (919) 931-0841");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) return <SuccessCard />;

  return (
    <div>
      <ProgressBar current={step} />

      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#1a1a2e]">
          {step === 1 && "Tell Us About You"}
          {step === 2 && "About Your Project"}
          {step === 3 && "Timeline & Budget"}
        </h2>
        <p className="mt-1 text-sm text-[#1a1a2e]/50">
          Step {step} of {STEPS.length}
        </p>
      </div>

      {step === 1 && (
        <Step1 data={data} errors={errors} onChange={handleChange} />
      )}
      {step === 2 && (
        <Step2 data={data} errors={errors} onChange={handleChange} />
      )}
      {step === 3 && (
        <Step3
          data={data}
          errors={errors}
          onChange={handleChange}
          consent={consent}
          onConsentChange={setConsent}
        />
      )}

      {/* Navigation */}
      <div className="mt-8 flex flex-col gap-3">
        {step < 3 && (
          <button
            type="button"
            onClick={handleNext}
            className="w-full rounded-lg bg-denim py-4 text-base font-semibold text-white shadow-md transition-opacity duration-200 hover:opacity-85"
          >
            Next →
          </button>
        )}

        {step === 3 && (
          <>
            {submitError && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {submitError}
              </p>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-denim py-4 text-lg font-semibold text-white shadow-md transition-opacity duration-200 hover:opacity-85 disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending your request...
                </>
              ) : (
                "Submit My Request →"
              )}
            </button>
          </>
        )}

        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="w-full rounded-lg border border-gainsboro bg-white py-3 text-sm font-medium text-[#1a1a2e]/60 transition-colors duration-200 hover:border-denim/40 hover:text-denim"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
