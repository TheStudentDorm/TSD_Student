// src/pages/students/Emergency.tsx
import React from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import TipsCarousel from "../../components/TipsCarousel";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download, Printer } from "lucide-react";
import "../../style/print.css";
import NavigationButtons from "../../components/NavigationButtons";

const emergencyTips = [
  { title: "Know Numbers", description: "Keep emergency numbers handy at all times." },
  { title: "Health Services", description: "Familiarize yourself with nearby hospitals and clinics." },
  { title: "Embassy Contacts", description: "Know your embassy’s contact for urgent assistance." },
  { title: "Student Support", description: "Reach out to university support for emergencies." },
];

// PDF Generation
const generatePDF = async () => {
  const doc = new jsPDF();
  let startY = 50;

  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });

  try {
    const logoImg = await loadImage("/images/tsd-logo.png");

    // Add logo and title on first page
    doc.addImage(logoImg, "PNG", 80, 10, 50, 20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Emergency & Essential Contacts (UAE)", 14, 40);

    const sections = [
      {
        title: "General Emergencies",
        headers: ["Service", "Number", "What it’s for"],
        contacts: [
          ["Police", "999", "Crime, personal safety, suspicious activity"],
          ["Ambulance", "998", "Medical emergencies"],
          ["Fire Department", "997", "Fires, smoke, gas leaks"],
          ["Civil Defence", "996", "Natural hazards, disaster support"],
          ["Traffic Accidents", "999", "Call police directly if you’re in or witness an accident"],
        ],
        headerColor: [255, 200, 200],
      },
      {
        title: "Health & Medical Support",
        headers: ["Service", "Contact", "Notes / Website"],
        contacts: [
          ["Dubai Health Authority (DHA)", "800 342", ""],
          ["Abu Dhabi SEHA Hotline", "800 50", ""],
          [
            "NMC / Aster / Mediclinic Clinics",
            "NMC: 800 6624 / Mediclinic: 800 2000",
            "Aster: www.asterdmhealthcare.com",
          ],
          ["Mental Health (Dubai)", "04 519 2519", "Rashid Hospital Psychiatry Dept., 24/7"],
        ],
        headerColor: [200, 230, 255],
      },
      {
        title: "Embassy & Consulate Assistance",
        headers: ["Embassy / Consulate", "Contact"],
        contacts: [
          ["Indian Embassy (Abu Dhabi)", "02 449 2700"],
          ["Pakistan Consulate (Dubai)", "04 397 3600"],
          ["British Embassy (Abu Dhabi)", "02 610 1100"],
          ["US Embassy (Abu Dhabi)", "02 414 2200"],
          ["Philippine Consulate (Dubai)", "04 220 7100"],
        ],
        headerColor: [200, 255, 200],
      },
    ];

    for (const section of sections) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(section.title, 14, startY);
      startY += 6;

      autoTable(doc, {
        startY,
        head: [section.headers],
        body: section.contacts,
        theme: "grid",
        headStyles: { fillColor: section.headerColor },
        styles: { font: "helvetica", fontSize: 12 },
        margin: { left: 14, right: 14 },
        didDrawPage: (data: any) => {
          // Repeat logo + title on every new page
          if (data.pageNumber > 1) {
            doc.addImage(logoImg, "PNG", 80, 10, 50, 20);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.text("Emergency & Essential Contacts (UAE)", 14, 40);
          }
          startY = data.cursor.y + 10;
        },
      });

      startY += 4;
    }

    doc.save("emergency_contacts.pdf");
  } catch (err) {
    console.error("PDF generation failed:", err);
    alert("Failed to generate PDF. Check console for errors.");
  }
};

// Print page
const printPage = () => window.print();

export default function Emergency() {
  return (
    <main className="max-w-6xl mx-auto">
      <>
        {/* Logo for print */}
        <div className="hidden print:block text-center mb-4">
  <img src="/images/tsd-logo.png" alt="TSD Logo" className="h-16 mx-auto" />
</div>

        {/* Hero Section */}
        <HeroSectionSmall
          title="Emergency & Essential Contacts"
          subtitle="Important contacts for medical emergencies, police, embassies, and student support services."
          
          image="/images/student-hero-emergency.png"
           fixedBackground
           className="hero-section print:hidden"
        />

        <div className="py-16 px-6 space-y-16">
          {/* Action Buttons */}
          <div className="print:hidden flex justify-end gap-3 mb-6">
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>

            <button
              onClick={printPage}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
            >
              <Printer className="w-4 h-4" />
              Print Version
            </button>
          </div>
        {/* Intro Section */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Emergency Contacts & Services</h2>
          <p className="text-gray-700">
            Whether it’s a minor issue or an emergency, knowing who to call can make all the difference.
            Save these numbers in your phone and share with your flatmates and friends, just in case.
          </p>
        </section>
        {/* General Emergencies */}
        <section>
          <h2 className="text-2xl font-bold mb-4">General Emergencies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-red-100">
                <tr>
                  <th className="px-4 py-2 text-left">Service</th>
                  <th className="px-4 py-2 text-left">Number</th>
                  <th className="px-4 py-2 text-left">What it’s for</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">Police</td>
                  <td className="px-4 py-2">999</td>
                  <td className="px-4 py-2">Crime, personal safety, or suspicious activity</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Ambulance</td>
                  <td className="px-4 py-2">998</td>
                  <td className="px-4 py-2">Medical emergencies</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Fire Department</td>
                  <td className="px-4 py-2">997</td>
                  <td className="px-4 py-2">Fires, smoke, gas leaks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Civil Defence</td>
                  <td className="px-4 py-2">996</td>
                  <td className="px-4 py-2">Natural hazards, disaster support</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Traffic Accidents</td>
                  <td className="px-4 py-2">999</td>
                  <td className="px-4 py-2">Call police directly if you’re in or witness an accident</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Health & Medical Support */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Health & Medical Support</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-blue-100"> <tr>
                <th className="px-4 py-2 text-left">Service</th>
                <th className="px-4 py-2 text-left">Contact</th>
              </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-2">Dubai Health Authority (DHA)</td>
                  <td className="px-4 py-2">800 342 (DHA)</td></tr>
                <tr><td className="px-4 py-2">Abu Dhabi SEHA Hotline</td>
                  <td className="px-4 py-2">800 50</td></tr>
                <tr><td className="px-4 py-2">NMC / Aster / Mediclinic Clinics</td>
                  <td className="px-4 py-2">NMC: 800 6624<br />Aster: <a href="https://www.asterdmhealthcare.com/" target="_blank" className="text-blue-600 underline">Website</a>
                    <br />Mediclinic: 800 2000</td></tr>
                <tr><td className="px-4 py-2">Mental Health Support (Dubai)</td>
                  <td className="px-4 py-2">04 519 2519 (Rashid Hospital Psychiatry Dept., 24/7)</td></tr>
              </tbody> </table>
          </div>
        </section>
        {/* Embassy & Consulate Assistance */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Embassy & Consulate Assistance</h2>
          <p className="mb-4 text-gray-700">If you lose your passport or face a legal issue, contact your embassy for immediate support.</p>
          <div className="overflow-x-auto"> <table className="min-w-full bg-white rounded-lg shadow">
            <thead className="bg-green-100">
              <tr> <th className="px-4 py-2 text-left">Embassy</th>
                <th className="px-4 py-2 text-left">General Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="px-4 py-2">Indian Embassy (Abu Dhabi)</td>
                <td className="px-4 py-2">02 449 2700</td></tr>
              <tr><td className="px-4 py-2">Pakistan Consulate (Dubai)</td>
                <td className="px-4 py-2">04 397 3600</td></tr>
              <tr><td className="px-4 py-2">British Embassy (Abu Dhabi)</td>
                <td className="px-4 py-2">02 610 1100</td></tr>
              <tr><td className="px-4 py-2">US Embassy (Abu Dhabi)</td>
                <td className="px-4 py-2">02 414 2200</td></tr>
              <tr><td className="px-4 py-2">Philippine Consulate (Dubai)</td>
                <td className="px-4 py-2">04 220 7100</td></tr>
            </tbody>
          </table>
          </div>
          <p className="mt-4 text-gray-600 text-sm"> *For other nationalities, check your embassy’s UAE page or contact Ministry of Foreign Affairs at <strong>800 44444</strong>.
          </p>
        </section>

        {/* Tips Carousel */}
        {/* <section>
          <div className="print:hidden">
            <h2 className="text-2xl font-semibold mb-4">TSD Pro Tips!</h2>
            <TipsCarousel tips={emergencyTips} duration={30} />
          </div>
        </section> */}
       <section className="mt-16 p-6 bg-tsd-blue/10 border-l-4 border-tsd-orange rounded-lg max-w-3xl mx-auto">
  <h3 className="font-bold mb-2 text-tsd-blue text-lg">💡 TSD Pro Tips</h3>
  <ul className="list-disc pl-5 text-gray-800 space-y-2">
    {emergencyTips.map((tip, index) => (
      <li key={index}>
        <span className="font-semibold text-tsd-blue">{tip.title}:</span> {tip.description}
      </li>
    ))}
  </ul>
</section>
      </div>
     <div className="print:hidden">
        <NavigationButtons />
      </div>
      
      </>
    </main>
  );
}
