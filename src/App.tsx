import { useRef, useState, useEffect } from "react";

function App() {
  const notificationRef = useRef<Notification | null>(null);

  // 알림 권한 상태를 저장할 state 추가
  const [permission, setPermission] =
    useState<NotificationPermission>("default");

  // 컴포넌트 마운트 시 현재 권한 상태 확인
  useEffect(() => {
    setPermission(Notification.permission);
  }, []);

  const newOptions: NotificationOptions = {
    // ... existing code ...
  };

  const handleNotificationClick = async () => {
    // 권한이 없는 경우 권한 요청
    if (permission !== "granted") {
      const result = await Notification.requestPermission();
      setPermission(result);

      if (result !== "granted") {
        alert("알림 권한이 필요합니다!");
        return;
      }
    }

    // 권한이 있는 경우 알림 생성
    notificationRef.current = new Notification("확인해주세요", {
      ...newOptions,
    });
  };

  return (
    <div>
      <h1>알림 테스트</h1>
      <p>현재 알림 권한: {permission}</p>
      <button onClick={handleNotificationClick}>알림 보내기</button>
    </div>
  );
}

export default App;
