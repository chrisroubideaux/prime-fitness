import { useEffect } from 'react';

const Success = ({
  userName,
  members,
  nextPaymentDate,
  totalPrice,
  paymentIntentId,
}) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const formattedTime = today.toLocaleTimeString();

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
        members.title,
        parseFloat(totalPrice || 0).toFixed(2),
        formattedDate,
        formattedTime,
        paymentIntentId,
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

  return (
    <div
      className="modal fade show"
      style={{ display: 'block' }}
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Payment Successful</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Thank you for your purchase, {userName}!</p>
            <p>Membership Type: {members.title}</p>
            <p>Next Payment Date: {nextPaymentDate}</p>
            <p>Payment ID: {paymentIntentId}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleExportCSV}>
              Export Invoice
            </button>
            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
