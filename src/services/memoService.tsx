import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { MEMO_ENDPOINTS } from "../api/endpoints";
import { Memo } from "../types/Memo";

interface MemoResponse {
  data: Memo[];
}
interface CreateMemoResponse {
  data: Memo;
}

// 메모 목록 조회
export const getMemoList = (refrigerator_id: number): Promise<MemoResponse> => {
  return axios.get(`${MEMO_ENDPOINTS.GET_MEMO_LIST}/${refrigerator_id}/memos`);
};

// 메모 생성
export const createMemo = (
  refrigerator_id: number,
  content: string,
): Promise<CreateMemoResponse> => {
  return axios.post(`${MEMO_ENDPOINTS.CREATE_MEMO}/${refrigerator_id}/memos`, {
    title: "test",
    content,
  });
};
