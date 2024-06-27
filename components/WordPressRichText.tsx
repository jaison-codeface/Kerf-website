"use client";
import React, { useMemo } from "react";

function WordPressRichText({ htmlString }: { htmlString: string }) {
  const modifiedHtmlString = useMemo(() => {
    const a = htmlString.replace(
      "<h1>",
      `<h1 class="text-3xl font-medium mt-4">`
    );
    const b = a.replace("<h2", `<h2 class="text-2xl font-medium mt-4"`);
    const c = b.replace("<h3", `<h3 class="text-xl font-medium mt-4"`);
    const d = c.replace("<h4", `<h4 class="text-lg font-medium mt-4"`);
    const e = d.replace("<h5", `<h5 class="text-base font-medium mt-4"`);
    const f = e.replace("<h6", `<h6 class="text-sm font-medium mt-4"`);
    const g = f.replace("<p", `<p class="text-lg mt-2 leading-[1.8]"`);

    const h = g.replace(
      "<li",
      `<li class="inline-flex text-base gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#21d34b" fill="none"> <path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"/> <path  d="M7.5 13.8333L11 17.5L21.5 6.5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>`
    );
    const i = h.replace("<ul", `<ul class="mt-3 ">`);

    const final = h;

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
