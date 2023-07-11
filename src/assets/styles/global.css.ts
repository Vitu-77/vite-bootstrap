import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: "sans-serif",
  color: "white",
});

globalStyle("body", {
  background: "#141114",
});
