"use client";

export default function BackgroundOrbs() {
  return (
    <>
      <div
        className="orb"
        style={{
          width: "600px",
          height: "600px",
          background: "#E040FB",
          top: "-200px",
          right: "-100px",
          animationDelay: "0s",
          animationDuration: "12s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "#2B52CD",
          bottom: "20%",
          left: "-150px",
          animationDelay: "3s",
          animationDuration: "15s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "#4C3A82",
          top: "50%",
          right: "30%",
          animationDelay: "6s",
          animationDuration: "10s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "300px",
          height: "300px",
          background: "#A0C4FF",
          bottom: "10%",
          right: "10%",
          animationDelay: "1s",
          animationDuration: "18s",
        }}
      />
    </>
  );
}
