import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { MEMO_ENDPOINTS } from "../api/endpoints";
import { Memo } from "../types/Memo";

interface MemoResponse {
  data: Memo[];
}

// 메모 목록 조회
export const getMemoList = (refrigerator_id: number): Promise<MemoResponse> => {
  return axios.get(`${MEMO_ENDPOINTS.GET_MEMO_LIST}/${refrigerator_id}/memos`);
};
