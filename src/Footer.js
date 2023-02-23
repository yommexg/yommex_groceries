import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length === 0
          ? "No Item"
          : `${length} List ${length === 1 ? "item" : "items"}`}
      </p>
    </footer>
  );
};

export default Footer;
