import { useState, useRef, useEffect } from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  /**
   * It loads the users from the API.
   */
  const loadUser = async () => {
    console.log(pageRef.current);
    const { data } = await reqRespApi.get<ReqResList>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (data.data.length > 0) {
      setUsers(data.data);
    } else {
      pageRef.current--;
      alert("Not found");
    }
  };
  const loadNext = () => {
    pageRef.current++;
    loadUser();
  };

  const loadBack = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUser();
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return { users, loadNext, loadBack };
};
