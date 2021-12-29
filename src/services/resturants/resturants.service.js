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

const resturantTransfom = (result) => {
  const newResult = camelize(result);
  return newResult;
};
resturantRequest()
  .then(resturantTransfom)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((error) => {
    console.log("Error");
  });
