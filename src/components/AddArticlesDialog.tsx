import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddArticlesCardContainer from "./AddArticlesCardContainer";

interface addArticlesProps {
  open: any;
  setOpen: any;
  handleClickOpen: any;
  handleClose: any;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs: React.FC<addArticlesProps> = ({
  open,
  handleClose,
}) => {
  const [sorted, setSorted] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSorted(event.target.value);
  };

  return (
    <div>
      <BootstrapDialog
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="px-5 py-10">
        <div className="lg:hidden mt-4 w-full">
          <input
            type="text"
            placeholder="search"
            className="mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primaryColor focus:ring-1 focus:ring-primaryColor
      "
          />
        </div>
          <div className="flex flex-row mt-4 lg:mt-auto items-center justify-between">
            <div className="flex flex-row items-center">
              <p style={{ fontSize: "14px", fontWeight: "600" }}>Sorted by: </p>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={sorted}
                  onChange={handleChange}
                >
                  <MenuItem style={{ fontSize: "14px" }} value={10}>
                    Relevance
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={20}>
                    Best match
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={30}>
                    Articles per week
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={30}>
                    Highest followers
                  </MenuItem>
                </Select>
              </FormControl>
              <input
                className="outline-none hidden lg:block border-none p-3"
                type="text"
                placeholder="🔍  Search"
              />
            </div>
            <div className="bg-primaryColor self-end text-white px-5 text-xs lg:text-sm font-semibold py-1.5 rounded-[100px]">
              Done
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-5">
            <p className="text-lg font-semibold">Management article website</p>
            <div className="bg-primaryColor text-white px-5 text-xs lg:text-sm font-semibold py-1.5 rounded-[100px]">
              Follow&nbsp;All
            </div>
          </div>
          <AddArticlesCardContainer />
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default CustomizedDialogs;
