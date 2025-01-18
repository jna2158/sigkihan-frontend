import { useEffect, useState } from "react";
import useUserStore from "../store/useUserStore";
import { User } from "../types/User";

export const useUser = () => {
  const { userInfo, updateUser } = useUserStore.getState();
  const [refrigeratorId, setRefrigeratorId] = useState<number>(0);

  useEffect(() => {
    if (userInfo?.refrigerator_id) {
      setRefrigeratorId(userInfo.refrigerator_id);
    }
  }, [userInfo]);

  const isUserAuthenticated = (): boolean => {
    return !!userInfo;
  };

  const hasRefrigerator = (): boolean => {
    return !!refrigeratorId;
  };

  return {
    userInfo,
    refrigeratorId,
    setRefrigeratorId,
    updateUser,
    isUserAuthenticated,
    hasRefrigerator,
  };
};
