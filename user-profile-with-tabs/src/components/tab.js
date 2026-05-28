import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    "Overview",
    "Repositories",
    "Followers",
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={
            activeTab === tab
              ? "active-tab"
              : ""
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;