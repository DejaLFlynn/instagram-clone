export const apiURL = () =>{
  return window.location.hostname === "localhost" ?
  "http://localhost:4001" : "https://imsta-cta.herokuapp.com";
}