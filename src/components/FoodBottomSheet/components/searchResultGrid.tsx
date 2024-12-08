import SearchResultCard from "./searchResultCard";

export default function SearchResultGrid() {
  return (
    <section
      className="flex flex-wrap gap-[0.5rem] pt-[1.2rem]"
      aria-label="식재료 검색 결과 목록"
    >
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
    </section>
  );
}
