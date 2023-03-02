const StatusMessage = ({ message }) => {
  return (
    <div className="status-container">
      <div className="status-wrapper">
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default StatusMessage;
