import React, { useState } from "react";

export default function AccordionBasicExample({ FaqList }: any): JSX.Element {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    console.log(value);

    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className="w-full max-w-5xl">
      {FaqList.map(({ question, answer }: any, idx: number) => {
        const elementID = `element${idx + 1}`;
        return (
          <div
            key={idx}
            className="rounded-md mb-8  border border-1 border-neutral-200 bg-paper dark:border-neutral-600 dark:bg-neutral-800 p-2   "
          >
            <h2 className="mb-0" id="headingOne">
              <button
                className={`${
                  activeElement === elementID &&
                  `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-paper px-5 py-4 text-left p1 transition  [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick(elementID)}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {question}
                <span
                  className={`${
                    activeElement === elementID
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            {activeElement === elementID && (
              <div className="!mt-0 !rounded-b-none !shadow-none p1">
                <div
                  className="px-5 py-4"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
