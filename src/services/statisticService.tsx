import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { STATISTICS_ENDPOINTS } from "../api/endpoints";

interface getTop5Response {
  data: {
    monthly_top_consumed_foods: string[];
  };
}

// 월간 소비 식품 TOP 5
export const getTop5 = (refrigeratorId: number): Promise<getTop5Response> => {
  return axios.get(
    `${STATISTICS_ENDPOINTS.GET_TOP_5}/${refrigeratorId}/statistics/monthly-top-consumed-foods`,
  );
};
