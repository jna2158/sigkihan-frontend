import { useRef } from "react";

interface NotificationOptions {
  badge?: string;
  icon?: string;
  body?: string;
  [key: string]: any;
}

const usePushNotification = () => {
  const notificationRef = useRef<Notification | null>(null);

  if (!("Notification" in window)) {
    return {
      fireNotification: () => {
        console.warn("이 브라우저는 알림을 지원하지 않습니다.");
      },
    };
  }

  if (Notification.permission !== "granted") {
    try {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") return;
      });
    } catch (error) {
      // Safari - 유저에게 푸시 알림을 허용하겠냐고 물어보고, 허용하지 않으면 return!
      if (error instanceof TypeError) {
        Notification.requestPermission().then((permission) => {
          if (permission !== "granted") return;
        });
      } else {
        console.error(error);
      }
    }
  }

  // 유저가 푸시 알림을 클릭하면, 푸시 알림이 일어난 화면으로 이동하기
  const setNotificationClickEvent = () => {
    if (notificationRef.current) {
      notificationRef.current.onclick = (event: Event) => {
        event.preventDefault();
        window.focus();
        notificationRef.current?.close();
      };
    }
  };

  // 알림 권한 요청 함수
  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      return permission;
    } catch (error) {
      console.error("알림 권한 요청 실패:", error);
      return "denied";
    }
  };

  const fireNotification = async (
    title: string,
    options?: NotificationOptions,
  ) => {
    if (!("Notification" in window)) {
      console.error("이 브라우저는 알림을 지원하지 않습니다.");
      return;
    }
    // 현재 권한 상태 로깅
    console.log("현재 알림 권한:", Notification.permission);

    if (Notification.permission !== "granted") {
      const permission = await requestNotificationPermission();
      if (permission !== "granted") {
        console.warn("알림 권한이 거부되었습니다.");
        return;
      }
    }

    const newOptions: NotificationOptions = {
      badge: "",
      icon: "http://localhost:3000/favicon.ico",
      body: "홍길동님이 메시지를 보냈습니다.",
      requireInteraction: true,
      silent: false,
      ...options,
    };

    try {
      // 기존 알림이 있다면 닫기
      if (notificationRef.current) {
        notificationRef.current.close();
      }

      // 새로운 알림 생성
      notificationRef.current = new Notification(title, {
        ...newOptions,
      });

      console.log("새 알림 생성됨:", notificationRef.current);

      // 알림 표시 이벤트
      notificationRef.current.onshow = () => {
        console.log("알림이 화면에 표시됨");
      };

      // 알림 에러 이벤트
      notificationRef.current.onerror = (e) => {
        console.error("알림 표시 중 에러 발생:", e);
      };

      setNotificationClickEvent();
    } catch (err) {
      console.error("알림 생성 중 오류 발생:", err);
    }
  };

  return { fireNotification };
};

export default usePushNotification;
