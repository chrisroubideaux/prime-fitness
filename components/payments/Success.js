import { useState, useEffect } from 'react';

const Success = ({
  userName,
  membershipType,
  nextPaymentDate,
  totalPrice,
  paymentIntentId,
}) => {
  const [user, setUser] = useState(userName);
  const [membership, setMembership] = useState(membershipType);
  const [nextPayment, setNextPayment] = useState(nextPaymentDate);
  const [price, setPrice] = useState(totalPrice);
  const [paymentId, setPaymentId] = useState(paymentIntentId);

  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const formattedTime = today.toLocaleTimeString();

  // Handle CSV Export
  const handleExportCSV = () => {
    const headers = [
      'Membership Type',
      'Total Price',
      'Date',
      'Time',
      'Payment ID',
    ];
    const rows = [
      [
        membership,
        parseFloat(price || 0).toFixed(2),
        formattedDate,
        formattedTime,
        paymentId,
      ],
    ];

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice_${formattedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Optionally, you could update the state on mount or based on changes to props
  useEffect(() => {
    setUser(userName);
    setMembership(membershipType);
    setNextPayment(nextPaymentDate);
    setPrice(totalPrice);
    setPaymentId(paymentIntentId);
  }, [userName, membershipType, nextPaymentDate, totalPrice, paymentIntentId]);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>Payment Successful</h4>
          <div className="d-flex gap-2">
            <a
              className="btn btn-sm"
              href="/InventoryDashboard/InventoryDashboard"
            >
              Inventory
            </a>
            <button onClick={handleExportCSV} className="btn btn-sm">
              Export Invoice
            </button>
          </div>
        </div>

        <div className="card-body">
          <p className="mb-4">Thank you for your purchase, {user}!</p>
          <h5>Invoice</h5>
          <div className="mb-3">
            <strong>Date:</strong> {formattedDate} <br />
            <strong>Time:</strong> {formattedTime} <br />
            <strong>Payment ID:</strong> {paymentId}
          </div>

          {/* Display Membership Details */}
          <div className="mb-3">
            <strong>Membership Type:</strong> {membership} <br />
            <strong>Next Payment:</strong> {nextPayment}
          </div>

          <div className="alert alert-success mt-4">
            Your payment was processed successfully. We hope to see you again
            soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
