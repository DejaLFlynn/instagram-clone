export const imstaURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "";
}