import chartImg from "../../../assets/gamificationAssets/chart.svg";
import progressImg from "../../../assets/gamificationAssets/status-up.svg";
import coinsImg from "../../../assets/gamificationAssets/enjin-coin-(enj).svg";
import unlockImg from "../../../assets/gamificationAssets/lock-circle.svg";
import badgeImg from "../../../assets/gamificationAssets/medal-star.svg";
import rankImg from "../../../assets/gamificationAssets/award.svg";
import leaderboardImg from "../../../assets/gamificationAssets/clipboard-text.svg";

const InstructionGamification = () => {
  return (
    <div className="w-full bg-white rounded-lg p-5 mt-6">
      <p className="text-[#A09D9D] text-xs">
        This platform makes se of some game elements to improve yor experience
        and help you keep track of your activity while earning discounts
      </p>
      <div className="flex flex-col gap-y-8 mt-6">
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="w-7 h-7"
              src={chartImg}
              alt="chart image"
            />
          </div>
          <div className="">
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Challenges
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              Complete your daily streaks by watching more ads related feeds and
              reading more post{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="w-7 h-7"
              src={progressImg}
              alt="progress image"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Progress Feedback
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              You'll see this feedback on your progress report specifically
              telling you how many coins you've earned
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="w-7 h-7"
              src={coinsImg}
              alt="coins image"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Random Coins
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              When you login everyday for a week you'll get a random amount of
              coin by luck
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="w-7 h-7"
              src={unlockImg}
              alt="unlock image"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Unlock able Content
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              You'll be able to use coins to unlock customization options for
              your avatar
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="w-10 h-10 lg:w-7 lg:h-7"
              src={badgeImg}
              alt="badge image"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Badges
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              In each rank you attain you'll have to earn some badges which will
              show in your profile and will be visible to others
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="w-7 h-7"
              src={rankImg}
              alt="rank image"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Ranks
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              The more coins you earn, the more badges you attain which will
              take you to the next rank
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <img
              className="lg:w-7 lg:h-7 w-5 h-5"
              src={leaderboardImg}
              alt="leaderboard image"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 tracking-wide">
              Leader Board
            </p>
            <p className="text-xs text-[#49454F] tracking-wide">
              You'll be able to see how yo compare to others in a leader board
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionGamification;
