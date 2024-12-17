import { ChangeEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export function SearchInput({ value, onChange, onFocus }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요."
      className="h-[3rem] w-[22rem] rounded-[0.6rem] bg-gray-50 pl-[0.8rem] text-[14px] text-[#9BA5B7]"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
}
