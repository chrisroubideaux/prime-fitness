import Link from 'next/link';

export default function FeaturedProducts({ products }) {
  return (
    <div>
      <a className="card-link" href={`/products/${products.id}`}>
        <div className="card" style={{ maxWidth: '306px' }}>
          <img className="img" src={products.image} alt="apartment" />
          <div className="card-body postion-relative">
            <h5 className="dark-text mb-1 fs-xs text-uppercase fw-bold pb-2">
              {products.name}
            </h5>
            <h6 className=" fw-semi-bold mt-1">
              <i className="card-icon fa-solid fa-building  mt-n1 me-2 "></i>
              {products.price}
            </h6>
          </div>
        </div>
      </a>
    </div>
  );
}
