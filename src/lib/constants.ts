export const isProduction = process.env.NODE_ENV === "production";
export const BASE_URL = isProduction
  ? process.env.BASE_URL
  : "http://localhost:3000";
