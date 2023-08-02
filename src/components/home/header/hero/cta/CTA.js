import "./cta.scss";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="__buttons">
      <Link to="login" className="btn btn-log">
        Login
      </Link>
      <Link to="register" className="btn btn-reg">
        Register
      </Link>
    </div>
  );
};

export default CTA;
