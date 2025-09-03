import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="mb-4">Explore our newsletter guides.</p>
      <ul className="list-disc list-inside">
        <li><Link to="/blog/great-cv" className="text-indigo-600 hover:underline">Do's and Don'ts for a Great CV</Link></li>
        <li><Link to="/blog/interview-tips" className="text-indigo-600 hover:underline">Interview Tips (Coming Soon)</Link></li>
      </ul>
    </div>
  );
}