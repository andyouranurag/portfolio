import ReactGA from "react-ga4";

const TRACKING_ID = "G-XF4J1Z9YVD"; // Replace with your actual GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = (page_path) => {
  ReactGA.send({ hitType: "pageview", page: page_path });
};
