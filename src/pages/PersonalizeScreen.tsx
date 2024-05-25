import { useState } from "react";
import { Link } from "react-router-dom";

const PersonalizeScreen = () => {
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  // const categories = {
  //   popular: ["Travel", "Tech", "TV", "War", "Celebs"],
  //   Health: ["Fitness", "Health", "Fruits", "Vegetables"],
  //   Sports: ["NBA", "Golf", "NHL", "Soccer", "NFL", "MLB", "NCAAB"],
  //   Tech: [
  //     "Gadgets",
  //     "Climate change",
  //     "Nature",
  //     "Science",
  //     "AI",
  //     "Electric Cars",
  //     "Apps",
  //     "Games",
  //   ],
  // };
  const categories = [
    {
      topic: "Popular",
      subcategories: ["Travel", "Tech", "TV", "War", "Celebs"],
    },
    {
      topic: "Health",
      subcategories: ["Fitness", "Health", "Fruits", "Vegetables"],
    },
    {
      topic: "Sports",
      subcategories: ["NBA", "Golf", "NHL", "Soccer", "NFL", "MLB", "NCAAB"],
    },
    {
      topic: "Tech",
      subcategories: [
        "Gadgets",
        "Climate change",
        "Nature",
        "Science",
        "AI",
        "Electric cars",
        "Apps",
        "Games",
      ],
    },
  ];

  const handleCategoryClick = (subcategory: string) => {
    setSelectedCategories((prevSelectedCategories: string[]) => {
      if (prevSelectedCategories.includes(subcategory)) {
        // Category is already selected, so remove it
        return prevSelectedCategories.filter((c) => c !== subcategory);
      } else {
        // Category is not selected, so add it
        return [...prevSelectedCategories, subcategory];
      }
    });
  };

  return (
    <div className="px-4 lg:px-16">
      <div className="text-center">
        <p className="text-3xl leading-10 font-bold tracking-wide mt-12">
          Personalize your feeds
        </p>
        <p className="text-[#A09D9D] text-sm leading-5 tracking-wide mt-1">
          Select at least 1 category
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-4 max-h-[65%] pr-3 overflow-y-auto">
        {categories.map((category, i) => (
          <div key={i}>
            <p className="text-left text-sm text-[#79747D]">{category.topic}</p>
            <div className="flex flex-row flex-wrap gap-3 mt-3">
              {category.subcategories.map((subcategory) => (
                <div
                  onClick={() => handleCategoryClick(subcategory)}
                  key={subcategory}
                  className={`py-2 ${
                    selectedCategories.includes(subcategory)
                      ? "bg-[#E4E8FF] border-none"
                      : "bg-auto"
                  } cursor-pointer text-sm text-[#79747D] px-4 border border-[#79747E] rounded-[100px]`}
                >
                  # {subcategory}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/authpage/tailorexperience">
        <div className="cursor-pointer mt-5 px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Continue
        </div>
      </Link>
    </div>
  );
};

export default PersonalizeScreen;
