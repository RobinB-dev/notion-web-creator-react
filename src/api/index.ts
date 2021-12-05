import axios from "axios";
// import { NotionPages, User } from "../decl";


export const getJsonTest = async (): Promise<any> => {
  console.log(localStorage.getItem('frontToken'));
  
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL2}/data.json`
      
      );
    return res.data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

