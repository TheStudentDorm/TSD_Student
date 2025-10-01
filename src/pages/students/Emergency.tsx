// src/pages/students/Emergency.tsx
import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download, Printer } from "lucide-react";
import "../../style/print.css";
import NavigationButtons from "../../components/NavigationButtons";

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
    doc.addImage(logoImg, "PNG", 75, 10, 60, 0); // auto height
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
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
          ["NMC", "800 6624",""],
          ["Aster","+971 4 4400500", "www.asterdmhealthcare.com"],
          ["Mediclinic Clinics", "800 2000", ""],
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
      doc.setFontSize(12);
      doc.text(section.title, 14, startY);
      startY += 6;

     autoTable(doc, {
  startY,
  head: [section.headers],
  body: section.contacts,
  theme: "grid",
  headStyles: { fillColor: section.headerColor },
  styles: {
    font: "helvetica",
    fontSize: 10,
    cellWidth: "wrap",        // ensures wrapping
    overflow: "linebreak",    // 🔑 force line breaks
  },
  columnStyles: {
    0: { cellWidth: 50 },     // Service / Embassy
    1: { cellWidth: 50 },     // Number / Contact
    2: { cellWidth: "auto" }, // Descriptions / Notes → flexible & wraps
  },
  margin: { left: 14, right: 14 },
  didDrawPage: (data: any) => {
    if (data.pageNumber > 1) {
      doc.addImage(logoImg, "PNG", 75, 10, 60, 0);
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
    <main className="w-full">
      <>
        {/* Logo for print */}
        <div className="hidden print:block text-center mb-4">
          <img src="/images/tsd-logo.png" alt="TSD Logo" className="h-16 mx-auto" />
        </div>

        {/* Hero Section */}
        <section className="hero-section relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center bg-fixed print:hidden"
            style={{ backgroundImage: `url('/images/student-hero-emergency.png')`, transform: "translateZ(0)" }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="relative z-10 max-w-6xl px-6 mt-32 text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight text-white uppercase">
              Emergency & Essential Contacts
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Important contacts for medical emergencies, police, embassies, and student support services.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto">
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
            <section className="bg-white p-6 rounded-xl shadow print:hidden">
              <h2 className="text-2xl font-bold mb-4">Emergency Contacts & Services</h2>
              <p className="text-gray-700">
                Whether it’s a minor issue or an emergency, knowing who to call can make all the difference. Save these
                numbers in your phone and share with your flatmates and friends, just in case.
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
                      <td className="px-4 py-2">Medical emergencies (injury, chest pain, fainting, etc.)</td>
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
              <div className="mt-8 p-4 border-l-4 border-[#F9943B] bg-[#FFF7F0] rounded-md shadow-sm max-w-2xl mx-auto text-center print:hidden">
                <span className="font-semibold">💡 TSD Pro Tip!</span>{" "}
                <span>
                  Keep a physical card or note on your fridge with key contacts in case your phone dies. Emergency
                  services here are efficient and multilingual. If you’re ever unsure, call 999—they’ll direct you to the
                  right department.
                </span>
              </div>
            </section>

            {/* Health & Medical Support */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Health & Medical Support</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Service</th>
                      <th className="px-4 py-2 text-left">Contact</th>
                      <th className="px-4 py-2 text-left">Notes/Website</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">Dubai Health Authority (DHA)</td>
                      <td className="px-4 py-2">800 342 (DHA)</td>
                      <td className="px-4 py-2">For licensed clinics, hospitals, vaccine centres, and health queries</td>
                      
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Abu Dhabi SEHA Hotline</td>
                      <td className="px-4 py-2">800 50</td>
                      <td className="px-4 py-2">For licensed clinics, hospitals, vaccine centres, and health queries</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">NMC</td>
                      <td className="px-4 py-2">800 6624 </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Aster</td>
                      <td className="px-4 py-2">+971 4 4400500</td>
                      <td className="px-4 py-2"><a
                          href="https://www.asterdmhealthcare.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          Website
                        </a>{" "}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Mediclinic Clinics</td>
                      <td className="px-4 py-2">800 2000</td>
                      <td className="px-4 py-2">For licensed clinics, hospitals, vaccine centres, and health queries</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Mental Health Support (Dubai)</td>
                      <td className="px-4 py-2">04 519 2519 </td>
                      <td className="px-4 py-2">(Rashid Hospital Psychiatry Dept., 24/7)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-4 border-l-4 border-[#F9943B] bg-[#FFF7F0] rounded-md shadow-sm max-w-2xl mx-auto text-center print:hidden">
                <span className="font-semibold">⚠️ Heads up!</span>{" "}
                <span>
                  Check with your university's student affairs or admin team for on-campus emergency procedures and
                  24/7 contacts. Most universities in the UAE have dedicated wellbeing and campus safety units.
                </span>
              </div>
            </section>

            {/* Embassy & Consulate Assistance */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Embassy & Consulate Assistance</h2>
              <p className="mb-4 text-gray-700 print:hidden">
                If you lose your passport or face a legal issue, contact your embassy for immediate support.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Embassy</th>
                      <th className="px-4 py-2 text-left">General Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">Indian Embassy (Abu Dhabi)</td>
                      <td className="px-4 py-2">02 449 2700</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Pakistan Consulate (Dubai)</td>
                      <td className="px-4 py-2">04 397 3600</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">British Embassy (Abu Dhabi)</td>
                      <td className="px-4 py-2">02 610 1100</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">US Embassy (Abu Dhabi)</td>
                      <td className="px-4 py-2">02 414 2200</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Philippine Consulate (Dubai)</td>
                      <td className="px-4 py-2">04 220 7100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                *For other nationalities, check your embassy’s UAE page or contact Ministry of Foreign Affairs at{" "}
                <strong>800 44444</strong>.
              </p>
            </section>
          </div>
        </div>

        <div className="print:hidden">
          <NavigationButtons />
        </div>
      </>
    </main>
  );
}
