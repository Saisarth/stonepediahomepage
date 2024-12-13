import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>"Stonepedia provided us with top-quality granite for our kitchen. Highly recommend!"</p>
        <h4>- Jane Doe</h4>
      </div>
      <div className="testimonial">
        <p>"Their customer service is exceptional. The marble we ordered was perfect!"</p>
        <h4>- John Smith</h4>
      </div>
    </section>
  );
}

export default Testimonials;
