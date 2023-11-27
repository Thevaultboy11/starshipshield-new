import React, { useState } from "react";

const TabComponent = ({ tabData }) => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].tab);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
        id="defaultTab"
        role="tablist"
      >
        {tabData.map(({ tab, title, body }: any, idx: number) => (
          <li className="me-2" key={idx}>
            <button
              id={`${tab}-tab`}
              type="button"
              role="tab"
              aria-controls={`${tab}`}
              aria-selected={selectedTab === `${tab}`}
              className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
              onClick={() => handleTabClick(`${tab}`)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {tabData.map(({ tab, title, body }, idx) => {
          if (selectedTab === tab) {
            return (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                id={`${tab}`}
                role="tabpanel"
                aria-labelledby={`${tab}-tab`}
              >
                <h2 className="mb-3 h3">{title}</h2>
                <p className="mb-3 p1">{body}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TabComponent;
