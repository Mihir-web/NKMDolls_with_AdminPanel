import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-semibold">Contact Info</h2>
      <address className="flex flex-col mt-6 text-base font-medium not-italic">
        <p>1 Harbour Square, Toronto, ON M5J 1A6, Canada</p>
        <p className="mt-4">Email ID: info@nkmdolls.ca</p>
        <p className="mt-4">
          Telephone: +1 (<span className="text-gray-600">888) 000-0000</span>
        </p>
      </address>
    </section>
  );
};

export default ContactInfo;
