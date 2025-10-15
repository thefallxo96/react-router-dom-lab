import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./MailboxDetails.css";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((box) => box._id === Number(mailboxId));
  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) return <p>Mailbox Not Found!</p>;

  return (
    <div className="mailbox-details-container">
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Size:</strong> {selectedBox.boxSize}</p>

      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters in this mailbox.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, idx) => (
            <li key={idx}>
              <p><strong>To:</strong> {letter.recipient}</p>
              <p>{letter.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MailboxDetails.propTypes = {
  mailboxes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      boxOwner: PropTypes.string,
      boxSize: PropTypes.string,
    })
  ).isRequired,
  letters: PropTypes.arrayOf(
    PropTypes.shape({
      mailboxId: PropTypes.number.isRequired,
      recipient: PropTypes.string,
      message: PropTypes.string,
    })
  ).isRequired,
};

export default MailboxDetails;
