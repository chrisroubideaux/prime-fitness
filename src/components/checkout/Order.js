import React from 'react';

export default function Order() {
  return (
    <div className="">
      <form className="needs-validation py-5" novalidate>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label text-white">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="first name"
              value=""
              required
            />
            <div className="invalid-feedback text-white">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label text-white">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="last name"
              value=""
              required
            />
            <div className="invalid-feedback text-white">
              Valid last name is required.
            </div>
          </div>
          {/* 
          <div className="col-12">
            <label for="username" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                required
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>
            */}
          {/*
          <div className="col-12">
            <label for="email" className="form-label">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
        */}
          <div className="col-12">
            <label for="address" className="form-label text-white">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
            <div className="invalid-feedback text-white">
              Please enter your mailing address.
            </div>
          </div>

          <div className="col-12">
            <label for="address2" className="form-label text-white">
              Address 2 <span className="text-white">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>
          {/*}
          <div className="col-md-5">
            <label for="country" className="form-label">
              Country
            </label>
            <select className="form-select" id="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
            */}
          <div className="col-md-4">
            <label for="state" className="form-label text-white">
              State
            </label>
            <select className="form-select" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback text-white">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3">
            <label for="zip" className="form-label text-white">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Zip code"
              required
            />
            <div className="invalid-feedback text-white">
              Zip code required.
            </div>
          </div>
        </div>

        <hr className="hr mt-5 " />

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
          />
          <label className="form-check-label text-white" for="same-address">
            Shipping address is the same as my billing address
          </label>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="save-info" />
          <label className="form-check-label text-white" for="save-info">
            Save this information for next time
          </label>
        </div>

        <hr className="hr mt-5 " />

        <h4 className="mb-3">Payment</h4>

        <div className="my-3">
          {/*
          <div className="form-check">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              checked
              required
            />
            <label className="form-check-label text-white" for="credit">
              Credit card
            </label>
          </div>
            */}
          <div className="form-check">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label text-white" for="debit">
              Debit card
            </label>
          </div>
          <div className="form-check">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label text-white" for="paypal">
              PayPal
            </label>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-md-6">
            <label for="cc-name" className="form-label text-white">
              Name on card
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-name"
              placeholder="Name"
              required
            />
            <small className="text-white">Full name as displayed on card</small>
            <div className="invalid-feedback text-white">
              Name on card is required
            </div>
          </div>

          <div className="col-md-6">
            <label for="cc-number" className="form-label text-white">
              Credit card number
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder="cc-number"
              required
            />
            <small className="text-white">CC Number</small>
            <div className="invalid-feedback text-white">
              Credit card number is required
            </div>
          </div>

          <div className="col-md-3">
            <label for="cc-expiration" className="form-label text-white">
              Expiration
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder="Expiration"
              required
            />
            <div className="invalid-feedback text-white">
              Expiration date required
            </div>
          </div>

          <div className="col-md-3">
            <label for="cc-cvv" className="form-label text-white">
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder=" CVV"
              required
            />
            <div className="invalid-feedback text-white">
              Security code required
            </div>
          </div>
        </div>

        <hr className="hr mt-5 " />

        <button className="btn btn-sm btn-accent d-block " type="submit">
          Confirm Purchase
        </button>
        <button className="btn btn-sm btn-accent d-block " type="submit">
          Cancel
        </button>
      </form>
    </div>
  );
}
