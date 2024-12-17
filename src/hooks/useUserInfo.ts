import { useEffect, useState } from "react";
import useUserStore from "../store/useUserStore";
import { User } from "../types/User";

export const useUser = () => {
  const { userInfo } = useUserStore.getState();
  const [refrigeratorId, setRefrigeratorId] = useState<number | null>(null);

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
    isUserAuthenticated,
    hasRefrigerator,
  };
};
