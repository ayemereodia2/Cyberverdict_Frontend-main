import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { getError } from "../utils";
import { Store } from "../Store";

const PreferencePage = () => {
  const [isPersonalChecked, setIsPersonalChecked] = useState(false);
  const [isWorkChecked, setIsWorkChecked] = useState(false);
  const location = useLocation();

  const { dispatch: ctxDispatch } = useContext(Store);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const hash = queryParams.get("hashs");
    const fetchData = async () => {
      try {
        if (!hash) {
          // return res.status(401).json({message: 'Cannot Validate an User!'})
          console.log("cannot validate user")
          return
        }
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.get(
          `https://cyberverdictbackend.onrender.com/api/users/activate/${hash}`,config
        );
        //   navigate("/users/activated");
        ctxDispatch({ type: "USER_SIGNIN", payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        return toast.success(
          "account successfully activated, You can now continue with your registration process"
        );
      } catch (error) {
        toast.error(getError(error as any));
      }
    };
    fetchData();
  }, [location.search]);

  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 16,
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px #1935CA"
        : "inset 0 0 0 1px #1935CA, inset 0 -1px 0 #1935CA",
    backgroundColor: theme.palette.mode === "dark" ? "#1935CA" : "#f5f8fa",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          "&:hover": { bgcolor: "transparent" },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    );
  }

  return (
    <div className="px-4 lg:px-16 text-center">
      <div className="">
        <p className="text-3xl leading-10 font-bold tracking-wide mt-12">
          Hello, there!
        </p>
        <p className="text-[#A09D9D] text-sm leading-5 tracking-wide mt-1">
          How can we customize your CyberVerdict experience? What do you want to
          use it for?
        </p>
      </div>
      <div className="h-4 mt-6 w-full flex flex-row rounded-md overflow-hidden">
        <div className="basis-2/5 h-full bg-[#34A853]"></div>
        <div className="basis-3/5 h-full bg-[#FBBC05]"></div>
      </div>
      <div className="mt-5 flex flex-col w-full">
        <div className="flex flex-row gap-3 justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#34A853]"></div>
            <p>Personal</p>
          </div>
          <div className="">
            <BpCheckbox
              onClick={() => {
                setIsPersonalChecked(true);
                setIsWorkChecked(false);
              }}
              defaultChecked={isPersonalChecked && !isWorkChecked}
            />
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FBBC05]"></div>
            <p>Work</p>
          </div>
          <div className="">
            <BpCheckbox
              onClick={() => {
                setIsPersonalChecked(false);
                setIsWorkChecked(true);
              }}
              defaultChecked={!isPersonalChecked && isWorkChecked}
            />
          </div>
        </div>
      </div>
      <Link to="/authpage/personalize">
        <div className="cursor-pointer mt-6 px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Continue
        </div>
      </Link>
    </div>
  );
};

export default PreferencePage;
