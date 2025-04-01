import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowThankYou(true); // Show thank you message on successful submission
      })
      .catch((err) => console.error(err));
  };

  const closePopup = () => {
    setShowThankYou(false);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="msg" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="msg"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showThankYou && (
        <div className="thank-you-popup">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your submission has been received.</p>
            <button onClick={closePopup} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .thank-you-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
        .popup-content h2 {
          margin-bottom: 10px;
        }
        .popup-content p {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default Contact;
