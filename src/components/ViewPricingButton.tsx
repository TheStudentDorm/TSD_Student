
import { useNavigate } from "react-router-dom";

export default function ViewPricingButton() {
  const navigate = useNavigate();

  const goToSubscription = () => {
    navigate("/providers"); // go to providers page
    setTimeout(() => {
      const el = document.getElementById("subscription-plans");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay to let the page render
  };

  return (
    <button
      onClick={goToSubscription}
      className="inline-flex items-center px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      View Pricing Plans
    </button>
  );
}
