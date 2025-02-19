import React from "react";
import topVector from "../assets/Vector1.png";
import bottomVector from "../assets/Vector.png";

const ZigzagDivider: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Top Zigzag */}
      <img
        src={topVector}
        alt="Top Zigzag"
        className="w-full -mt-8 lg:-mt-12"
      />

      {/* Bottom Zigzag */}
      <img
        src={bottomVector}
        alt="Bottom Zigzag"
        className="w-full -mt-8 lg:-mt-12"
      />
    </div>
  );
};

export default ZigzagDivider;
