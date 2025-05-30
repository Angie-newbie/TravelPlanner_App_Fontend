// Logic:
// Gets the current trip based on the tripId in the URL
// Fetch and display Trip details (location, dates, total expense) + List of all expenses for that trip
// Handles authorization using the JWT token from cookies.

import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Expense() {
  const { tripId } = useParams();  // Extract tripId from URL params

  // We'll add states here later...

  return (
    <div>
      <h1>Trip Expense Page for Trip ID: {tripId}</h1>
    </div>
  );
}

export default Expense;