import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import NavigationButtons from "../components/NavigationButtons";

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

type Plan = "Basic (Free)" | "Standard" | "Featured" | "Not Sure – Need Help Deciding";

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

// Constants
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

// Utility functions
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

// Main Component
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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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
        "service_nm9wacb",
        "template_smgxa4h",
        payload,
        "wYMZ0-6j3wayjyNO-"
      );

      setSubmitted(true);
      setData(initialFormData);
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Email sending failed", err);
      alert("Failed to send email. Check console for details.");
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      <section
        id="hero"
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/list_your_prop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">List Your Property with TSD</h1>
          <p className="mt-4 text-lg md:text-xl">
            Reach thousands of university students across the UAE. 
            </p><p className="mt-4 text-lg md:text-xl">
            Fill in the form below and our team will contact you.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={onSubmit} noValidate className="space-y-10">
          {/* Contact Information */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">1. Contact Information</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="fullName" required>Full Name</Label>
                <input
                  id="fullName"
                  className="mt-2 w-full rounded-lg border px-3 py-2"
                  value={data.fullName}
                  onChange={e => update("fullName", e.target.value)}
                />
                <FieldError message={errors.fullName} />
              </div>
              <div>
                <Label htmlFor="designation" required>Designation</Label>
                <input
                  id="designation"
                  className="mt-2 w-full rounded-lg border px-3 py-2"
                  value={data.designation}
                  onChange={e => update("designation", e.target.value)}
                />
                <FieldError message={errors.designation} />
              </div>
              <div>
                <Label htmlFor="phone" required>Phone</Label>
                <input
                  id="phone"
                  className="mt-2 w-full rounded-lg border px-3 py-2"
                  value={data.phone}
                  onChange={e => update("phone", e.target.value)}
                />
                <FieldError message={errors.phone} />
              </div>
              <div>
                <Label htmlFor="email" required>Email</Label>
                <input
                  id="email"
                  className="mt-2 w-full rounded-lg border px-3 py-2"
                  value={data.email}
                  onChange={e => update("email", e.target.value)}
                />
                <FieldError message={errors.email} />
              </div>
              <div>
                <Label htmlFor="company" required>Company/Accomodation Name</Label>
                <input
                  id="company"
                  className="mt-2 w-full rounded-lg border px-3 py-2"
                  value={data.company}
                  onChange={e => update("company", e.target.value)}
                />
                <FieldError message={errors.company} />
                   </div>
                  {/* Website */}
                <div>
                  <Label htmlFor="website">Website</Label>
                  <input
                    id="website"
                    type="url"
                    className="mt-2 w-full rounded-lg border px-3 py-2"
                    value={data.website}
                    onChange={e => update("website", e.target.value)}
                  />
                  <FieldError message={errors.website} />
                </div>

                {/* Social */}
                <div>
                  <Label htmlFor="social">Social Media (Instagram, LinkedIn, etc.)</Label>
                  <input
                    id="social"
                    type="url"
                    className="mt-2 w-full rounded-lg border px-3 py-2"
                    value={data.social}
                    onChange={e => update("social", e.target.value)}
                  />
                  <FieldError message={errors.social} />
                </div>
           </div>

            
          </section>

          {/* Property Details */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">2. Property Details</h2>
            <div className="mt-6 grid gap-6">
              <div>
                <span className="block text-sm font-medium">Type of Property</span>
                {PROPERTY_TYPES.map(type => (
                  <label key={type} className="block mt-2">
                    <input type="radio" checked={data.propertyType === type} onChange={() => update("propertyType", type)} /> {type}
                  </label>
                ))}
                {isOtherType && (
                  <input className="mt-2 w-full rounded-lg border px-3 py-2" value={data.propertyTypeOther} onChange={e => update("propertyTypeOther", e.target.value)} />
                )}
              </div>
              <div>
                <span className="block text-sm font-medium">Locations (select at least one)</span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {EMIRATES.map(emirate => (
                    <label key={emirate} className="flex items-center gap-2">
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
              <div>
                <Label htmlFor="units" required>Units Available</Label>
                <input
                  id="units"
                  className="mt-2 w-full rounded-lg border px-3 py-2"
                  value={data.units}
                  onChange={e => update("units", e.target.value)}
                />
                <FieldError message={errors.units} />
              </div>
            </div>
          </section>

          {/* Interest & Services */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">3. Interest & Services</h2>
            <div className="mt-6 grid gap-6">
              <div>
                <span className="block text-sm font-medium">Plan</span>
                {PLANS.map(p => (
                  <label key={p} className="block mt-2">
                    <input type="radio" checked={data.plan === p} onChange={() => update("plan", p)} /> {p}
                  </label>
                ))}
              </div>
              <div>
                <span className="block text-sm font-medium">Add-ons</span>
                {ADDONS.map(a => (
                  <label key={a} className="block mt-2">
                    <input type="checkbox" checked={data.addOns.includes(a)} onChange={() => toggleArrayItem("addOns", a)} /> {a}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Preferred Listing Start Date */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">4. Preferred Listing Start Date</h2>
            <div className="mt-4">
              <Label htmlFor="preferredStart">Select a Date</Label>
              <input
                id="preferredStart"
                type="date"
                className="mt-2 w-full rounded-lg border px-3 py-2"
                value={data.preferredStart}
                onChange={e => update("preferredStart", e.target.value)}
              />
              <FieldError message={errors.preferredStart} />
            </div>
          </section>

          {/* Additional Notes */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">5. Additional Notes</h2>
            <textarea
              className="w-full rounded-lg border px-3 py-2"
              rows={4}
              value={data.notes}
              onChange={e => update("notes", e.target.value)}
            />
            <div className="mt-4 flex items-start gap-2">
              <input type="checkbox" checked={data.consent} onChange={e => update("consent", e.target.checked)} />
              <span className="text-sm">I agree to be contacted by TSD.</span>
            </div>
            <FieldError message={errors.consent} />
            <button type="submit" disabled={busy} className="mt-6 rounded-lg bg-gray-900 px-5 py-2 text-white">
              {busy ? "Submitting…" : "Submit"}
            </button>
          </section>
        </form>

        <footer className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} The Student Dorm (TSD). All rights reserved.
        </footer>
      </div>
      <NavigationButtons />
    </main>
  );
}
