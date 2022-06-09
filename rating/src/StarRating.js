import React from "react";
import Star from "./Star";
import { createArray } from "./lib";

export default function StarRating({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {
  return (
    <div style={{ padding: "5ps", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)}/>
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
