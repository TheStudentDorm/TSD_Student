import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import NavigationButtons from "../components/NavigationButtons";
import toast from "react-hot-toast";

type Emirate =
  | "Dubai"
  | "Abu Dhabi"
  | "Sharjah"
  | "Ajman"
  | "Fujairah"
  | "RAK"
  | "UAQ";

type PropertyType =
  | "Student Accommodation Provider"
  | "Hostel / PG"
  | "Shared Apartment Operator"
  | "Private Landlord"
  | "Other";

type Plan =
  | "Basic (Free)"
  | "Standard"
  | "Featured"
  | "Not Sure – Need Help Deciding";

type AddOn =
  | "Photography & Content Creation"
  | "Homepage Banner Feature"
  | "Social Media Promotion"
  | "Highlighted Listing"
  | "Custom Support";

interface FormData {
  fullName: string;
  designation: string;
  phone: string;
  email: string;
  company: string;
  website?: string;
  social?: string;
  propertyType: PropertyType;
  propertyTypeOther?: string;
  locations: Emirate[];
  units: string;
  operational: "Yes" | "No – Launching Soon";
  plan: Plan;
  addOns: AddOn[];
  preferredStart?: string;
  notes?: string;
  consent: boolean;
}

// === Constants ===
const EMIRATES: Emirate[] = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "RAK", "UAQ"];
const PROPERTY_TYPES: PropertyType[] = [
  "Student Accommodation Provider",
  "Hostel / PG",
  "Shared Apartment Operator",
  "Private Landlord",
  "Other",
];
const PLANS: Plan[] = ["Basic (Free)", "Standard", "Featured", "Not Sure – Need Help Deciding"];
const ADDONS: AddOn[] = [
  "Photography & Content Creation",
  "Homepage Banner Feature",
  "Social Media Promotion",
  "Highlighted Listing",
  "Custom Support",
];

function getTodayISO() {
  return new Date().toISOString().split("T")[0];
}

const initialFormData: FormData = {
  fullName: "",
  designation: "",
  phone: "",
  email: "",
  company: "",
  website: "",
  social: "",
  propertyType: "Student Accommodation Provider",
  propertyTypeOther: "",
  locations: [],
  units: "",
  operational: "Yes",
  plan: "Basic (Free)",
  addOns: [],
  preferredStart: getTodayISO(),
  notes: "",
  consent: false,
};

const Label: React.FC<{ htmlFor?: string; children: React.ReactNode; required?: boolean }> = ({
  htmlFor,
  children,
  required,
}) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children} {required && <span className="text-red-600">*</span>}
  </label>
);

const FieldError: React.FC<{ message?: string }> = ({ message }) =>
  message ? <p role="alert" className="mt-1 text-sm text-red-600">{message}</p> : null;

function formatDateDMY(dateStr?: string) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}

export default function ProviderInterestForm() {
  const [data, setData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const isOtherType = data.propertyType === "Other";

  const selectedSummary = useMemo(() => {
    const parts: string[] = [];
    parts.push(`Plan: ${data.plan}`);
    if (data.addOns.length) parts.push(`Add-ons: ${data.addOns.join(", ")}`);
    if (data.locations.length) parts.push(`Locations: ${data.locations.join(", ")}`);
    if (data.preferredStart) parts.push(`Preferred Start: ${data.preferredStart}`);
    return parts.join(" • ");
  }, [data.plan, data.addOns, data.locations, data.preferredStart]);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const toggleArrayItem = <K extends keyof FormData>(key: K, value: any) => {
    setData(prev => {
      const arr = new Set<any>((prev[key] as any[]) ?? []);
      if (arr.has(value)) arr.delete(value);
      else arr.add(value);
      return { ...prev, [key]: Array.from(arr) as any };
    });
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};

    if (!data.fullName.trim()) next.fullName = "Full name is required";
    if (!data.designation.trim()) next.designation = "Designation is required";

    const phoneClean = data.phone.replace(/[^\d+]/g, "");
    if (!phoneClean) next.phone = "Phone is required";
    else if (phoneClean.length < 7) next.phone = "Enter a valid phone";

    if (!data.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(data.email)) next.email = "Enter a valid email";

    if (!data.company.trim()) next.company = "Company / Accommodation name is required";

    if (!data.units.trim()) next.units = "Please enter number of units/rooms";
    else if (!/^\d+$/.test(data.units)) next.units = "Units must be a whole number";

    if (!data.locations.length) next.locations = "Select at least one location";

    if (isOtherType && !data.propertyTypeOther?.trim()) next.propertyTypeOther = "Please specify the property type";

    if (!data.consent) next.consent = "Please agree to proceed";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const resetForm = () => setData({ ...initialFormData, preferredStart: getTodayISO() });

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!validate()) {
      toast.error("Please fill in all required fields before submitting.", {
        style: { background: "#F9943B", color: "#fff", fontWeight: "500" },
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setBusy(true);
    try {
      const payload = {
        ...data,
        locations: data.locations.join(", "),
        addOns: data.addOns.join(", "),
        consent: data.consent ? "Yes" : "No",
        submittedAt: new Date().toLocaleString(),
      };

      await emailjs.send(
        "service_4dau9k8",
        "template_bvle7nc",
        payload,
        "J3nZ4AQeVPkaFgElD"
      );

      toast.success("✅ Form submitted successfully!", {
        style: { background: "#004AAD", color: "#fff", fontWeight: "500" },
      });

      setSubmitted(true);
      resetForm();
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Email sending failed", err);
      toast.error("❌ Failed to send email. Please try again later.", {
        style: { background: "#F9943B", color: "#fff", fontWeight: "500" },
      });
    } finally {
      setBusy(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full border flex items-center justify-center">✅</div>
              <div>
                <h1 className="text-2xl font-semibold">Thank You for Reaching Out!</h1>
                <p className="mt-2 text-gray-600">We’re excited to explore how we can work together to connect your accommodation with students in the UAE.</p>
                <button
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another response
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full h-full bg-gradient-to-b from-white to-gray-50">
      {/* === HERO / HEADER SECTION === */}
<section>
  <div className="relative w-full min-h-[60vh] sm:min-h-screen overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-[url('/images/pro_int_form_bg.png')] bg-no-repeat bg-center bg-cover"
    ></div>

    {/* Orange overlay */}
    <div className="absolute inset-0 bg-tsd-orange/70"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center items-center text-center
                    px-4 py-16 sm:py-32 min-h-[60vh] sm:min-h-screen">
      <h1 className="font-bold text-[#02066F] leading-snug drop-shadow-md
                     text-[clamp(1.875rem,5vw,3rem)] sm:text-[clamp(3rem,5vw,5rem)] md:text-[clamp(3.75rem,5vw,6rem)]">
        List Your Property with TSD
      </h1>
      <p className="mt-4 text-tsd-blue leading-relaxed max-w-3xl
                    text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.125rem,3vw,1.5rem)] md:text-[clamp(1.25rem,2.5vw,1.75rem)]">
        Reach thousands of university students across the UAE. <br className="hidden sm:block" />
        Fill in the form below and our team will contact you.
      </p>
    </div>

          
        </div>
      </section>

      {/* === FORM CONTAINER === */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-r from-tsd-orange/70 via-black/50 to-tsd-blue/70 rounded-xl shadow-lg">
        <form onSubmit={onSubmit} noValidate className="space-y-10">
          
          {/* === CONTACT INFORMATION === */}
          <section className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-semibold">
              1: Contact Information
            </h2>
            <p className="text-sm text-gray-500">Tell us who you are and how we can reach you.</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" required>Full Name</Label>
                <input
                  id="fullName"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.fullName}
                  onChange={e => update("fullName", e.target.value)}
                  aria-invalid={!!errors.fullName}
                />
                <FieldError message={errors.fullName} />
              </div>
              
              {/* Designation */}
              <div>
                <Label htmlFor="designation" required>Designation</Label>
                <input
                  id="designation"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.designation}
                  onChange={e => update("designation", e.target.value)}
                  aria-invalid={!!errors.designation}
                />
                <FieldError message={errors.designation} />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" required>Phone</Label>
                <input
                  id="phone"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.phone}
                  onChange={e => update("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  placeholder="+971 50 123 4567"
                />
                <FieldError message={errors.phone} />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" required>Email</Label>
                <input
                  id="email"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.email}
                  onChange={e => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  type="email"
                  placeholder="your@email.com"
                />
                <FieldError message={errors.email} />
              </div>

              {/* Company */}
              <div className="md:col-span-2">
                <Label htmlFor="company" required>Company/Accommodation Name</Label>
                <input
                  id="company"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.company}
                  onChange={e => update("company", e.target.value)}
                  aria-invalid={!!errors.company}
                  placeholder="E.g., Student Homes Dubai"
                />
                <FieldError message={errors.company} />
              </div>

              {/* Website */}
              <div>
                <Label htmlFor="website">Website</Label>
                <input
                  id="website"
                  type="url"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.website}
                  onChange={e => update("website", e.target.value)}
                  placeholder="https://"
                />
              </div>

              {/* Social */}
              <div>
                <Label htmlFor="social">Social Media</Label>
                <input
                  id="social"
                  type="url"
                  className="mt-2 w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
                  value={data.social}
                  onChange={e => update("social", e.target.value)}
                  placeholder="Instagram, LinkedIn, etc."
                />
              </div>
            </div>
          </section>
      {/* === PROPERTY DETAILS === */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold">2. Property Details</h2>
        <p className="text-sm text-gray-500">Help us understand your property.</p>

        <div className="mt-6 space-y-6">
          {/* Property Type */}
          <div>
            <span className="block text-sm font-medium">Type of Property</span>
            <div className="mt-2 space-y-2">
              {PROPERTY_TYPES.map(type => (
                <label key={type} className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    checked={data.propertyType === type}
                    onChange={() => update("propertyType", type)}
                  /> {type}
                </label>
              ))}
              {isOtherType && (
                <input
                  className="mt-2 w-full rounded-lg border px-3 py-3 text-base"
                  value={data.propertyTypeOther}
                  onChange={e => update("propertyTypeOther", e.target.value)}
                  placeholder="Please specify"
                />
              )}
            </div>
          </div>

          {/* Locations */}
          <div>
            <span className="block text-sm font-medium">Locations (select at least one)</span>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {EMIRATES.map(emirate => (
                <label key={emirate} className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="checkbox"
                    checked={data.locations.includes(emirate)}
                    onChange={() => toggleArrayItem("locations", emirate)}
                  />
                  {emirate}
                </label>
              ))}
            </div>
            <FieldError message={errors.locations} />
          </div>

          {/* Units */}
          <div>
            <Label htmlFor="units" required>Units Available</Label>
            <input
              id="units"
              className="mt-2 w-full rounded-lg border px-3 py-3 text-base"
              value={data.units}
              onChange={e => update("units", e.target.value)}
              placeholder="E.g., 25"
            />
            <FieldError message={errors.units} />
          </div>
        </div>
      </section>

      {/* === INTEREST & SERVICES === */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold">3. Interest & Services</h2>
        <p className="text-sm text-gray-500">Choose how you’d like to promote your listing.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Plan */}
          <div>
            <span className="block text-sm font-medium">Plan</span>
            <div className="mt-2 space-y-2">
              {PLANS.map(p => (
                <label key={p} className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    checked={data.plan === p}
                    onChange={() => update("plan", p)}
                  /> {p}
                </label>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <span className="block text-sm font-medium">Add-ons</span>
            <div className="mt-2 space-y-2">
              {ADDONS.map(a => (
                <label key={a} className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="checkbox"
                    checked={data.addOns.includes(a)}
                    onChange={() => toggleArrayItem("addOns", a)}
                  /> {a}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === START DATE === */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold">4. Preferred Listing Start Date</h2>
        <div className="mt-4">
          <Label htmlFor="preferredStart">Select a Date</Label>
          <input
            id="preferredStart"
            type="date"
            className="mt-2 w-full rounded-lg border px-3 py-3 text-base"
            value={data.preferredStart}
            onChange={e => update("preferredStart", e.target.value)}
          />
          {data.preferredStart && (
            <p className="mt-1 text-xs text-gray-500">
              Selected: {formatDateDMY(data.preferredStart)}
            </p>
          )}
        </div>
      </section>

      {/* === NOTES & CONSENT === */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-semibold">
              5: Additional Notes
            </h2>
            <textarea
              className="w-full rounded-lg border px-3 py-3.5 text-base focus:ring-2 focus:ring-tsd-orange focus:outline-none"
              rows={4}
              value={data.notes}
              onChange={e => update("notes", e.target.value)}
              placeholder="Anything else you'd like us to know?"
            />
            <div className="mt-4 flex items-start gap-2">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={e => update("consent", e.target.checked)}
                className="mt-1 accent-tsd-orange w-5 h-5"
              />
              <span className="text-sm">I agree to be contacted by TSD.</span>
            </div>
            <FieldError message={errors.consent} />

            <button
              type="submit"
              disabled={busy || !data.consent}
              className="hidden md:block mt-6 w-full rounded-lg bg-gradient-to-r from-tsd-blue to-tsd-orange px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {busy ? "Submitting…" : "Submit"}
            </button>
          </section>
        </form>

        {/* Sticky submit button on mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t shadow-lg">
          <button
            type="button"
            disabled={busy || !data.consent}
            onClick={onSubmit}
            className="w-full rounded-lg bg-gradient-to-r from-tsd-blue to-tsd-orange px-6 py-3 text-lg font-semibold text-white shadow-md hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {busy ? "Submitting…" : "Submit"}
          </button>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-xs text-gray-100">
          © {new Date().getFullYear()} The Student Dorm (TSD). All rights reserved.
        </footer>
      </div>

      <NavigationButtons />
    </main>
  );
}