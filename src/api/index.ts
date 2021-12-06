import axios from "axios";
// import { NotionPages, User } from "../decl";


export const getJsonTest = async (): Promise<any> => {
  console.log(localStorage.getItem('frontToken'));
  
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/notion_data?code=c7cc8faa-366c-4c3d-a77d-1a18ed0cac5f`
      
      );
    return res.data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

