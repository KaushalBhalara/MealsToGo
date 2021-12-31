import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("No location Found");
    } else {
      resolve(locationMock);
    }
  });
};

// export const locationRequest = (searchTerm) => {
//   console.log("searchTerm", searchTerm);
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     console.log("searchTerm12", locationMock);
//     if (!locationMock) {
//       reject("not found");
//     }
//     resolve(locationMock);
//   });
// };

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
