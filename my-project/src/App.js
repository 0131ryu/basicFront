import React, { useState } from "react";
// import StarRating from "./chap6/StarRating";
import colorData from "./chap6/color-data.json";
import ColorList from "./chap6/ColorList";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
