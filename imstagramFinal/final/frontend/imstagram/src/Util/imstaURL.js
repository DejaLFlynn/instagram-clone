export const imstaURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:4001"
      : "https://git.heroku.com/imstagram-final.git";
}