// components/GitHubCard.jsx
"use client";
import GitHubCalendar from "react-github-calendar";

export default function GitHubCard() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 36;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-10">
      {/* GitHub Contribution */}
      <div className="bg-[#344966] p-4 rounded-xl border-4 border-[#B4CDED] text-white shadow-md">
        <GitHubCalendar
          username="vinchx"
          transformData={selectLastHalfYear}
          colorScheme="dark"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          theme={{
            dark: ["#0D1821", "#211951", "#B4CDED", "#F0F4EF", "#BFCC94"],
            light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
          }}
          labels={{
            totalCount: "{{count}} contributions in the last half year",
          }}
        />
      </div>
    </div>
  );
}
