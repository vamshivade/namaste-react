export const API_URL = "https://www.swiggy.com";

// CORS Proxy to bypass browser security restrictions
// Note: If public proxies fail (because Swiggy blocks their servers),
// you can comment out the first CORS_PROXY line and uncomment the second line,
// then use a browser extension like "Allow CORS: Access-Control-Allow-Origin" in Chrome/Edge.
export const CORS_PROXY = "https://corsproxy.io/?";
// export const CORS_PROXY = "";

export const RES_URL =
  API_URL +
  "/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RES_MENU_URL = (restaurantId) =>
  CORS_PROXY +
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

export const RESTAURANTS_LIST =
  API_URL +
  "/dapi/restaurants/list/v5?lat=17.3843&lng=78.4583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANT_MENU =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3843&lng=78.4583&restaurantId=603116&catalog_qa=undefined&submitAction=ENTER";
//
// cloudinaryImageId
export const CLOUDINARY_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
