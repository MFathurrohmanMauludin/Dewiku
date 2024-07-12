import { LiveShowCard } from "../card";

const LiveShowSection = () => {
  return (
    <>
      <div className="space-y-3 px-8 xs:px-4 py-[24px]">
        <div className="flex items-center gap-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-600"></span>
          </span>
          <span className="text-lg font-semibold tracking-wider">Live Event</span>
        </div>
        <LiveShowCard
          title={"Pameran Lukisan Peringatan HUT RI ke-66"}
          imgUrl={
            "https://asset-2.tstatic.net/jogja/foto/bank/images/suasana-pameran-lukisan-siswa-sman-10-yogyakarta_20180903_134852.jpg"
          }
          viewer={16600}
          like={13400}
        />
      </div>
    </>
  );
};

export default LiveShowSection;
