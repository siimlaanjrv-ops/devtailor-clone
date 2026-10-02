/**
 * Language picker. The original only offers English; a native <select> is
 * layered invisibly over the styled label so it stays keyboard and
 * screen-reader accessible.
 */
export function LanguageSelect() {
  return (
    <div className="relative h-[73px] w-[120px]">
      <label htmlFor="language" className="sr-only">
        Select Language
      </label>
      <select id="language" defaultValue="en" className="absolute inset-0 cursor-pointer opacity-0">
        <option value="en">English</option>
      </select>
      <div className="pointer-events-none flex h-full items-center justify-center gap-[5px] p-[26px]">
        <span className="text-sm leading-[21px] text-ink">English</span>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
          <path
            d="M2 4.5 6 8.5 10 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
