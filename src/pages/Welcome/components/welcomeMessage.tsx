export default function WelcomeMessage() {
  return (
    <header className="flex flex-col gap-[0.5rem]">
      <h1 className="text-[36px] font-semibold">Welcome</h1>
      <p className="text-gray-400">
        나만의 신기한 냉장고!
        <br />
        식기한 냉장고에 오신 걸 환영합니다.
      </p>
    </header>
  );
}
