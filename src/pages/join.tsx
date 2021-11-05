import React from "react";

import Form from "../components/Form/Form";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Join() {
  return (
    <div className="join">
      <Nav />
      <div className="join__content">
        <h2 className="join__title">Join Young Talents</h2>

        <p className="join__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          voluptatibus ex nemo eligendi illum quia qui! Officiis atque
          inventore, unde, dolorem delectus officia doloribus iure dolor
          ducimus, tempora architecto voluptatem.
        </p>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
