// membership card component
import Link from 'next/link';

export default function Card({ members }) {
  return (
    <div className="">
      <Link className="card-link" href={`/members/${members._id}`}>
        <div className="card ">
          <img
            src={members.image}
            className="img opacity-75"
            loading="lazy"
            alt="..."
          />
          <div className="carousel-caption pb-5 mt-5">
            <h3 className="text-center mb-5 pb-5">{members.title}</h3>
            <h6 className="text-center fs-5 fw-bold pt-5 my-5">View</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}

{
  /* import Link from 'next/link';
import axios from 'axios';

export default function Card({ members }) {
  const handleCardSelection = async () => {
    try {
      const response = await axios.get(
        `/api/get-stripe-subscription?id=${members._id}`
      );
      const data = response.data;
      const stripeSubscriptionId = data.stripeSubscriptionId;

      // You can navigate to the [id] page with the subscriptionId using Next.js Link
      // Replace '[id]' with your actual route for the [id] page
      // For example: `/members/${members._id}`
      // Make sure the route matches your Next.js setup
      window.location.href = `/members/${members._id}`;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('Stripe subscription not found:', error);
      } else {
        console.error('Error fetching Stripe subscription ID:', error);
      }
    }
  };

  return (
    <div className="card-link">
      <Link href={`/members/${members._id}`}>
        <div className="card" onClick={handleCardSelection}>
          <img
            src={members.image}
            className="img opacity-75"
            loading="lazy"
            alt="..."
          />
          <div className="carousel-caption pb-5 mt-5">
            <h3 className="text-center mb-5 pb-5">{members.title}</h3>
            <h6 className="text-center fs-5 fw-bold pt-5 my-5">View</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}   */
}
