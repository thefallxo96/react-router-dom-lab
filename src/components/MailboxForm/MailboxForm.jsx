import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({ boxOwner: "", boxSize: "Small" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Owner Name:
          <input
            type="text"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Box Size:
          <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
};

MailboxForm.propTypes = {
  addBox: PropTypes.func.isRequired,
};

export default MailboxForm;
