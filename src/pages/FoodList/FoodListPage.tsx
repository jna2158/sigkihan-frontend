import { useEffect } from "react";
import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";
import ExpiredAlarmModal from "./components/alarmmodal/expiredAlarmModal";
import NoFood from "./components/food/noFood";
import { useFoodData } from "../../hooks/useFoodData";
import { useModalControl } from "../../hooks/useModalControl";
import { usePopupNotification } from "../../hooks/usePopupNotification";
import { useUser } from "../../hooks/useUserInfo";
import { useState } from "react";
import RecommandRecipe from "./components/food/recommandRecipe";

export default function FoodListPage() {
  const { userInfo, refrigeratorId } = useUser();
  const { foodItems, fetchFoodList } = useFoodData();
  const { notiList, setNotiList } = usePopupNotification(
    refrigeratorId || null,
  );
  const { isOpen, handleCloseModal } = useModalControl(
    "FOOD_BOTTOM_SHEET_MODAL",
  );
  const [invitationCode, setInvitationCode] = useState("");
  const [invitationUsername, setInvitationUsername] = useState("");

  // 초대 받은 목록이 있는지 확인
  const checkHasInvite = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const username = urlParams.get("username");
    if (code && username) {
      setInvitationCode(code);
      setInvitationUsername(username);
      return true;
    }
    return false;
  };

  const { handleOpenModal } = useModalControl("INVITE_POPUP", {
    invitationCode,
    invitationUsername,
  });

  // 초대 받은 목록이 있으면 모달 오픈
  useEffect(() => {
    const hasInvite = checkHasInvite();
    if (hasInvite && invitationCode && invitationUsername) {
      handleOpenModal();
      sessionStorage.clear();
    }
  }, [userInfo, refrigeratorId, invitationCode, invitationUsername]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const username = urlParams.get("username");
    if (code && username) {
      sessionStorage.setItem("code", code);
      sessionStorage.setItem("username", username);
    }
  }, [window.location.search]);

  return (
    <main className="flex h-full flex-col px-[1.3rem]">
      <header>
        <Header />
      </header>

      <section className="relative flex flex-1 flex-col">
        {foodItems.length !== 0 ? (
          <article className="flex-1">
            <FoodGrid />
          </article>
        ) : (
          <article>
            <NoFood />
          </article>
        )}

        <nav className="center sticky bottom-4 z-10">
          <RecommandRecipe />
        </nav>
        <nav className="center sticky bottom-16 z-20 h-[1rem]">
          <AddFoodBtn />
        </nav>
      </section>

      <aside>
        <FoodBottomSheet isOpen={isOpen} />

        <div
          role="presentation"
          className={`overlay z-[60] mx-auto w-layout transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={handleCloseModal}
        />

        {notiList.length !== 0 && (
          <ExpiredAlarmModal notiList={notiList} setNotiList={setNotiList} />
        )}
      </aside>
    </main>
  );
}
