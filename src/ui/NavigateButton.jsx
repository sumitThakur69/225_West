import { Link } from "react-router-dom";

const NavigateButton = ({ text, to }) => {
  return (
    <Link to={to} >
      <button className="inline-flex items-center gap-2 border-b-2 hover:border-current ">
        {text}
        <span className="text-xl">→</span>
      </button>
    </Link>
  );
};

export default NavigateButton;
