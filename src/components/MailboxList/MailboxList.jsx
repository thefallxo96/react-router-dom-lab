import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MailboxList.css";

const MailboxList = ({ mailboxes }) => {
  if (mailboxes.length === 0) return <p>No mailboxes yet.</p>;

  return (
    <div className="mailbox-list-container">
      <h2>All Mailboxes</h2>
      <div className="mailbox-grid">
        {mailboxes.map((box) => (
          <Link key={box._id} to={`/mailboxes/${box._id}`} className="mail-box">
            <p>Box #{box._id}</p>
            <p>{box.boxOwner}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

MailboxList.propTypes = {
  mailboxes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      boxOwner: PropTypes.string,
      boxSize: PropTypes.string,
    })
  ).isRequired,
};

export default MailboxList;
