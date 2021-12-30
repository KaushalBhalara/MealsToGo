import { mocks, mockImages } from "./mock";
import camelize from "camelize";
export const resturantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Data not found");
    }
    resolve(mock);
  });
};

export const resturantTransfom = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResult[0]);
  return camelize(mappedResult);
};
// resturantRequest()
//   .then(resturantTransfom)
//   .then((transformedResponse) => {
//     // console.log(transformedResponse);
//   })
//   .catch((error) => {
//     console.log("Error");
//   });
