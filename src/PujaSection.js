import React from "react";
import PujaCard from "./PujaCard";
import img1 from "./images/shrikrishna.jpg";
const pujaItems = [
  {
    title: "Srila Prabhupada's Samadhi",
    description:
      "ISKCON Bhiwandi marks the resting place of Srila Prabhupada, founder-acharya of ISKCON.",
    image: img1,
    options: [
      "Divine Garland",
      "Tulsi Leaves",
      "Fruits Seva",
      "Dry Fruits Seva",
      "Madhur Samarpan",
      "Fragrance – Attar Seva",
    ],
  },
  {
    title: "Srila Prabhupada's Samadhi",
    description:
      "ISKCON Bhiwandi marks the resting place of Srila Prabhupada, founder-acharya of ISKCON.",
    image: img1,
    options: [
      "Divine Garland",
      "Tulsi Leaves",
      "Fruits Seva",
      "Dry Fruits Seva",
      "Madhur Samarpan",
      "Fragrance – Attar Seva",
    ],
  },
  {
    title: "Srila Prabhupada's Samadhi",
    description:
      "ISKCON Bhiwandi marks the resting place of Srila Prabhupada, founder-acharya of ISKCON.",
    image: img1,
    options: [
      "Divine Garland",
      "Tulsi Leaves",
      "Fruits Seva",
      "Dry Fruits Seva",
      "Madhur Samarpan",
      "Fragrance – Attar Seva",
    ],
  },
  {
    title: "Srila Prabhupada's Samadhi",
    description:
      "ISKCON Bhiwandi marks the resting place of Srila Prabhupada, founder-acharya of ISKCON.",
    image: img1,
    options: [
      "Divine Garland",
      "Tulsi Leaves",
      "Fruits Seva",
      "Dry Fruits Seva",
      "Madhur Samarpan",
      "Fragrance – Attar Seva",
    ],
  },
];

const PujaSection = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        Serve With Love – Your Humble Tribute To Srila Prabhupada 🙏
      </h2>

      <div className="row g-4">
        {pujaItems.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <PujaCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PujaSection;
