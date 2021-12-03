import axios from "axios";
// import { NotionPages, User } from "../decl";


export const getJsonTest = async (): Promise<any> => {
  console.log(localStorage.getItem('frontToken'));
  
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/get_info?code=e31e5fed-8d25-47c8-822b-8f51c214bc86`
      
      );
      console.log(`ici : ${process.env.REACT_APP_BASE_URL}/get_info?code=e31e5fed-8d25-47c8-822b-8f51c214bc86`);
    return res.data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

