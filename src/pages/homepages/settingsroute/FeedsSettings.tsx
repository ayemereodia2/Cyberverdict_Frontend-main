import { useState } from "react";

const FeedsSettings = () => {
  const [selectedCategories, setSelectedCategories] = useState<any>([]);

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
    <div className="bg-homeBg mt-7 lg:px-28 pb-5 text-[#101010]">
      <p className="font-semibold text-xl text-[#212121]">
        Personalize your feed
      </p>
      <div className="mt-6 flex flex-col gap-4 max-h-[65%] pr-3 overflow-y-auto">
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
      <div className="cursor-pointer inline-block mt-8 px-28 py-2.5 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Continue
        </div>
    </div>
  );
};

export default FeedsSettings;
