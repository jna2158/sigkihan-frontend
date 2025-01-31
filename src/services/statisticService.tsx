import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { STATISTICS_ENDPOINTS } from "../api/endpoints";

interface getTop5Response {
  data: {
    monthly_top_consumed_foods: 
      {
        food_name: string;
      total_quantity: number;
    }[];
  };
}

interface getMonthlyRankingResponse {
  data: {
    consumption_ranking: [
      {
        user: {
          id: number;
          name: string;
          image: number;
        };
        total_quantity: number;
      },
    ];
  };
}

// 월간 소비 식품 TOP 5
export const getTop5 = (refrigeratorId: number): Promise<getTop5Response> => {
  return axios.get(
    `${STATISTICS_ENDPOINTS.GET_TOP_5}/${refrigeratorId}/statistics/monthly-top-consumed-foods`,
  );
};

// 월간 소비 랭킹
export const getMonthlyRanking = (
  refrigeratorId: number,
): Promise<getMonthlyRankingResponse> => {
  return axios.get(
    `${STATISTICS_ENDPOINTS.GET_MONTHLY_RANKING}/${refrigeratorId}/statistics/monthly-consumption-ranking`,
  );
};
