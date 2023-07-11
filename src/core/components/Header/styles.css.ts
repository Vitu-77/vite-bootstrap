import { style } from "@vanilla-extract/css";

export const containerClass = style({
  width: "100%",
  background: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0px 20px",
  height: "50px",
});

export const logOutClass = style({
  padding: "10px",
  background: "red",
  color: "#FFF",
});
