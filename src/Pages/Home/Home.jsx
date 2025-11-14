import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="header">
      <Link to={"/dinosaurs"} className="title">
        dinos
      </Link>
    </div>
  );
};

export default HomePage;
