import ThanksIcon from "/illustration-thank-you.svg";
import "./submit.css";
export default function Result({ rate }) {
  return (
    <div className="rate-container center">
      <span>
        <img src={ThanksIcon} alt="icon" className="thanks-icon" />
      </span>
      <p className="rate-score">You selected {rate} out of 5</p>
      <p className="thank-you">Thank you!</p>
      <p className="we-appreciate">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
