import { mocks } from "./mock";
import camelize from "camelize";
export const resturantRequest = (location = "51.219448,4.402464") => {
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
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResult[0]);
  return results;
};
// resturantRequest()
//   .then(resturantTransfom)
//   .then((transformedResponse) => {
//     // console.log(transformedResponse);
//   })
//   .catch((error) => {
//     console.log("Error");
//   });
