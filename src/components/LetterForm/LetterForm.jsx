import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LetterForm.css";

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: mailboxes[0]?._id || "",
    recipient: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient,
      message: formData.message,
    });
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <div className="letter-form-container">
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mailbox:
          <select
            name="mailboxId"
            value={formData.mailboxId}
            onChange={handleChange}
            required
          >
            {mailboxes.map((box) => (
              <option key={box._id} value={box._id}>
                {box._id} - {box.boxOwner}
              </option>
            ))}
          </select>
        </label>
        <label>
          Recipient:
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
};

LetterForm.propTypes = {
  mailboxes: PropTypes.array.isRequired,
  addLetter: PropTypes.func.isRequired,
};

export default LetterForm;
