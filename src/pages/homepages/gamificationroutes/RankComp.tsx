import rank1 from "../../../assets/rankAssets/award.svg";
import rank2 from "../../../assets/rankAssets/defeat.svg";
import rank3 from "../../../assets/rankAssets/victory.svg";
import lockImg from "../../../assets/gamificationAssets/lock.svg";
import pointImg from "../../../assets/avatarAssets/enjin-coin-(enj).svg";

const rankDummy = [
  {
    rank: rank1,
    points: 0,
  },
  {
    rank: rank1,
    points: 400,
  },
  {
    rank: rank3,
    points: 700,
  },
  {
    rank: rank2,
    points: 1000,
  },
];

const userPoints = 0;

const RankComp = () => {
  return (
    <div className="mt-5 flex flex-row flex-wrap justify-between gap-4">
      {rankDummy.map((rank, index) => (
        <div
          key={index}
          className="p-5 relative rounded-lg border border-[#EBECFD] bg-[#FCFCFC] shadow-md flex flex-col gap-y-3 items-center"
        >
          <img
            className={`absolute z-30 bottom-9 w-7 h-7 left-1/2 -translate-x-1/2 ${
              userPoints < rank.points ? "block" : "hidden"
            } `}
            src={lockImg}
            alt="lock image"
          />
          <div className="relative">
            <img className="w-28 h-28" src={rank.rank} alt="rank" />
            <p className="text-[12px] absolute mt-[7px] font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              {index == 0 ? "1" : index == 1 ? "2" : ""}
            </p>
          </div>
          <div className="flex items-center flex-row gap-x-1">
            <img src={pointImg} alt="point image" />
            <p className="text-xs"> {rank.points} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankComp;
