import React from "react";

const Refund = () => {
  return (
    <div style={{ padding: "40px",paddingTop: "120px", maxWidth: "800px", margin: "auto" }}>
      <h1>Refund Policy</h1>

      <p>
        We offer refunds under specific conditions.
      </p>

      <ul>
        <li>Refunds must be requested within 7 days.</li>
        <li>Valid reason is required for approval.</li>
        <li>Some services are non-refundable.</li>
        <li>Processing takes 5–7 working days.</li>
      </ul>
    </div>
  );
};

export default Refund;