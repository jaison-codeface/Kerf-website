"use client";
import React, { useMemo } from "react";

function WordPressRichText({ htmlString = "" }: { htmlString: string }) {
  const modifiedHtmlString = useMemo(() => {
    const a = htmlString.replace(
      "<h1>",
      `<h1 class="text-3xl font-bold mt-4">`
    );
    const b = a.replaceAll("<h2", `<h2 class="text-[1.7rem] font-bold mt-4"`);
    const c = b.replaceAll("<h3", `<h3 class="text-[1.4rem] font-bold mt-4"`);
    const d = c.replaceAll("<h4", `<h4 class="text-lg font-bold mt-4"`);
    const e = d.replaceAll("<h5", `<h5 class="text-base font-bold mt-4"`);
    const f = e.replaceAll("<h6", `<h6 class="text-sm font-bold mt-4"`);
    const g = f.replaceAll("<p", `<p class="text-base mt-2 leading-[1.8]"`);

    const h = g.replaceAll(
      "<li>",
      `<li class="block relative pl-7 text-base leading-8 gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#7ca7bd" fill="none" class="inline absolute left-0 top-0 translate-y-[3px]"> <path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"/> <path  d="M7.5 13.8333L11 17.5L21.5 6.5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>`
    );
    const i = h.replaceAll("<ul", `<ul class="mt-4 flow-root sm:[column-count:2] flex-col"`);
    const j = i.replaceAll("<strong", `<strong class=""`);

    const final = j;

    return final;
  }, [htmlString]);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: modifiedHtmlString }}
      data-aos="fade-up"
      className="mt-2 text-base text-gray-800"
    />
  );
}

export default WordPressRichText;
