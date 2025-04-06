// components/GitHubCard.jsx
import GitHubCalendar from "react-github-calendar";

export default function GitHubCard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-10">
      {/* GitHub Contribution */}
      <div className="bg-[#0D1117] p-4 rounded-xl text-white shadow-md">
        <GitHubCalendar
          username="vinchx"
          colorScheme="dark"
          blockSize={15}
          blockMargin={4}
          fontSize={14}
          theme={{
            dark: ["#0D1821", "#344966", "#B4CDED", "#F0F4EF", "#BFCC94"],
            light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
          }}
        />
      </div>
    </div>
  );
}
