import Star from "/icon-star.svg";
import "./rate.css";

export default function Rate({ setSubmit, rate, setRate }) {
  let buttons = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      <span className="star-icon">
        <img src={Star} alt="star-icon" />
      </span>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate-btns">
        {buttons.map((el, index) => (
          <button
            onClick={() => setRate(el)}
            key={index}
            style={
              rate == el ? { backgroundColor: "#fc7614", color: "#fff" } : {}
            }
          >
            {el}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          rate && setSubmit(false);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
