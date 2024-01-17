const styles = {
  header: {},
};
// styles.js
export const lightModeStyles = {
  backgroundColor: "white",
  color: "black",
  toggleButton: {
    checked_backgroundColor: "#32533DCC",
    checked_color: "white",
    hover_backgroundColor: "#f1ba66",
    backgroundColor: "white",
    color: "#5B7564",
    border: "1px solid #5b7564",
    border_radius: "6px",
  },
  lockButton: {
    backgroundColor: "#5b7564",
    color: "#F8F0E3",
    border: "none",
    border_radius: "6px;",
  },
  exerciseGif: {
    border_radius: "10px",
    border: "solid",
  },
};

export const darkModeStyles = {
  header: {
    backgroundColor: "#1C1C1C",
    color: "#E8E8E8",
  },

  backgroundColor: "black",
  color: "white",

  mainScreen: {
    backgroundColor: "#484848",
    color: "#F8F0E3",
  },
  toggleButton: {
    checked_backgroundColor: "#5B7564",
    checked_color: "white",
    hover_backgroundColor: "#1C1C1C",
    backgroundColor: "#696969",
    color: "rgba(241, 186, 102, 0.80)",
    border: "2px solid #F1BA66",
    border_radius: "6px;",
  },
  lockButton: {
    backgroundColor: "#696969",
    color: "#F8F0E3",
    border: "2px solid #F1BA66",
    border_radius: "6px;",
  },
  exerciseGif: {
    border_radius: "10px",
    border: "2px solid #F1BA66",
  },
};
