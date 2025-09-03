export default function BlogCvGuide() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Do's and Don'ts for a Great CV</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">✅ Do’s</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Keep it concise (1-2 pages).</li>
            <li>Use clear headings.</li>
            <li>Highlight achievements.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">❌ Don’ts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Don’t include irrelevant info.</li>
            <li>Avoid spelling mistakes.</li>
            <li>Don’t use fancy fonts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}