import React from "react";

const PujaCard = ({ title, description, image, options }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4">
      {/* IMAGE WITH FIXED HEIGHT */}
      <div
        style={{
          width: "100%",
          maxHeight: "260px",
          overflow: "hidden",
          borderRadius: "18px",
        }}
      >
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            height: "250px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>

        <p className="card-text" style={{ fontSize: "14px" }}>
          {description}
        </p>

        {/* OPTIONS (Badges) */}
        <div className="mb-3 d-flex flex-wrap gap-2">
          {options?.map((item, idx) => (
            <span
              key={idx}
              className="badge text-bg-light border"
              style={{ fontSize: "12px", padding: "6px 10px" }}
            >
              {item}
            </span>
          ))}
        </div>

        <button className="btn btn-warning w-100 fw-bold">Book Puja</button>
      </div>
    </div>
  );
};

export default PujaCard;
