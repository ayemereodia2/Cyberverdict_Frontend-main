import { Box, SwipeableDrawer, Switch } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import avatar1 from "../assets/completeProfileAssets/3 - Ordinary Female - Neutral - White.png";
// import avatar2 from "../assets/completeProfileAssets/1 - Ordinary Female - Neutral - White.png";
// import avatar3 from "../assets/completeProfileAssets/1 - Ordinary Female - Neutral - White (1).png";
// import { Store } from "../Store";

interface FilterDrawerProps {
  isOpen: any;
  setIsOpen: any;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, setIsOpen }) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };
  // const { state } = useContext(Store);
  // const { userInfo } = state;
  const [checked, setChecked] = useState(true);
  const [checkedTech, setCheckedTech] = useState(true);
  const [checkedCrypto, setCheckedCrypto] = useState(true);
  const [checkedInsurance, setCheckedInsurance] = useState(true);
  const [checkedPolitics, setCheckedPolitics] = useState(true);

  const box = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      //   onKeyDown={toggleDrawer(false)}
      className="py-8 px-8 z-20 bg-homeBg"
    >
      <div
        onClick={() => setIsOpen(false)}
        className="text-xl font-bold cursor-pointer float-right"
      >
        <AiOutlineClose className="hover:text-primaryColor duration-300" />
      </div>
      <div className="mt-7">
        <p className="font-semibold">Advance Filters</p>
        <div className="flex flex-col gap-y-6 mt-10 px-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm">Finance</p>
            <Switch
            onClick={(e) => e.stopPropagation()}
              checked={checked}
              size="small"
              style={{ color: `${checked ? "#1935CA" : "white"}` }}
              onChange={(e) => setChecked(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Fin-tech</p>
            <Switch
            onClick={(e) => e.stopPropagation()}
              checked={checkedTech}
              size="small"
              style={{ color: `${checkedTech ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedTech(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Cryptocurrency</p>
            <Switch
            onClick={(e) => e.stopPropagation()}
              checked={checkedCrypto}
              size="small"
              style={{ color: `${checkedCrypto ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedCrypto(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Insurance</p>
            <Switch
            onClick={(e) => e.stopPropagation()}
              checked={checkedInsurance}
              size="small"
              style={{ color: `${checkedInsurance ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedInsurance(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Politics</p>
            <Switch
            onClick={(e) => e.stopPropagation()}
              checked={checkedPolitics}
              size="small"
              style={{ color: `${checkedPolitics ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedPolitics(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="cursor-pointer mt-7 text-center w-full py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Save Changes
        </div>
      </div>
    </Box>
  );
  return (
    <div>
      <SwipeableDrawer
        style={{ zIndex: 1500 }}
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        {box()}
      </SwipeableDrawer>
    </div>
  );
};

export default FilterDrawer;
