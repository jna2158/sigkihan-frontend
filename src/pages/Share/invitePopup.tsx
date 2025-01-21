import { changeInviteStatus } from "../../services/refrigeService";
import { useModalControl } from "../../hooks/useModalControl";
import { useState } from "react";

export default function InvitePopup({
  data,
}: {
  data: { invitationCode: string; invitationUsername: string };
}) {
  const { handleCloseModal } = useModalControl("INVITE_POPUP");
  const [message, setMessage] = useState("");

  const handleClickAcceptBtn = () => {
    setMessage("accept요청 보냄");
    changeInviteStatus(data.invitationCode, "accepted")
      .then((res) => {
        setMessage(`accept요청 성공 ${res.status}`);
        // handleCloseModal();
        // window.location.href = "/foodlist";
      })
      .catch((err) => {
        setMessage(`accept요청 실패 ${err}`);
      });
  };

  const handleClickDeclineBtn = () => {
    changeInviteStatus(data.invitationCode, "declined");
    handleCloseModal();
  };

  return (
    <section
      className="center overlay z-[70]"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div
        className="relative h-[10rem] w-[21rem] rounded-3xl bg-white p-6 pt-[2.3rem]"
        role="document"
      >
        <p className="center mb-[1.7rem] text-[20px] font-semibold">
          {data.invitationUsername}님 냉장고에 초대받았어요!
        </p>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-gray-100 text-gray-400"
            onClick={handleClickDeclineBtn}
          >
            아니오
          </button>
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-primary text-white"
            onClick={handleClickAcceptBtn}
          >
            확인
          </button>
        </footer>
        <p className="center text-gray-400">{message}</p>
      </div>
    </section>
  );
}
