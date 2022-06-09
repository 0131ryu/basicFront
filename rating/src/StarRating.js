import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./lib";

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [SelectedStars, setSelectedStars] = useState(0);

  return (
    <div style={{ padding: "5ps", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={SelectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {SelectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
