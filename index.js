import axios from "axios";

const getNameURL = "https://api.postalpincode.in/";

export const getNamesbyPincode = async (pincode) => {
  try {
    const { data } = await axios.get(`${getNameURL}pincode/${pincode}`);
    const firtArray = data[0];
    let names = [];
    if (firtArray.Status === "Success") {
      names = firtArray?.PostOffice.map((data) => {
        return {
          name: data?.Name,
          district: data?.District,
          state: data?.State,
          country: data?.Country,
        };
      });
    } else {
      throw new Error(firtArray?.Message);
    }
    return names;
  } catch (error) {
    return error.message;
  }
};

export const getPincodeByName = async (name) => {
  try {
    const { data } = await axios.get(`${getNameURL}postoffice/${name}`);
    const firtArray = data[0];
    let names = [];
    if (firtArray.Status === "Success") {
      names = firtArray?.PostOffice.map((data) => {
        return {
          pincode: data?.Pincode,
          district: data?.District,
          state: data?.State,
          country: data?.Country,
        };
      });
    } else {
      throw new Error(firtArray?.Message);
    }
    return names;
  } catch (error) {
    return error.message;
  }
};
