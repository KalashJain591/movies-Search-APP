import react from "react";
function Copyright() {
  const dt = new Date();
  const year = dt.getFullYear();
  return (
    <>
      <p
        style={{
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center"
        }}
      >
        Copyright © {year}
      </p>
    </>
  );
}
export default Copyright;
