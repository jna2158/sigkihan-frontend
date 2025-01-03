import { useUser } from "../../../../hooks/useUserInfo";
import MemberItem from "./memberItem";
import Header from "./header";

export default function Member() {
  const { userInfo } = useUser();
  const currentUserName = userInfo?.name;
  const members = [
    {
      id: 1,
      name: "김철수",
      isOwner: true,
      isCurrentUser: currentUserName === "김철수",
    },
    {
      id: 2,
      name: "유지원",
      isOwner: false,
      isCurrentUser: currentUserName === "유지원",
    },
    {
      id: 3,
      name: "박영수",
      isOwner: false,
      isCurrentUser: currentUserName === "박영수",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex gap-[1.1rem]">
        {members.map((member) => (
          <MemberItem
            key={member.id}
            name={member.name}
            isOwner={member.isOwner}
            isCurrentUser={member.isCurrentUser}
          />
        ))}
      </div>
    </>
  );
}
