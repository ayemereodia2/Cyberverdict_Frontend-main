import { Switch } from "@mui/material";
import { useState } from "react";
import FilterDrawer from "../../../components/FilterDrawer";

const NotificationSettings = () => {
  const [checked, setChecked] = useState(true);
  const [checkedComments, setCheckedComments] = useState(true);
  const [checkedReminders, setCheckedReminders] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [checkedPush, setCheckedPush] = useState(true);
  const [checkedCommentsPush, setCheckedCommentsPush] = useState(true);
  const [checkedRemindersPush, setCheckedRemindersPush] = useState(true);

  return (
    <div className="bg-homeBg mt-7 lg:px-28 pb-5 text-[#101010]">
      <p className="text-[#A09D9D] text-xs tracking-wide">
        Select the kinds of notification you get about your activates and
        recommendation
      </p>
      <div className="bg-white mt-5 rounded-lg shadow-md p-5 flex gap-y-6 flex-col lg:flex-row justify-between">
        <div>
          <p className="font-semibold leading-6 tracking-wide">
            Email Notification
          </p>
          <p className="text-xs text-[#49454F] leading-5 tracking-wide w-auto lg:w-96 mt-1">
            Get emails to find out what's going on when you're not online. You
            can turn these off.
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-row gap-x-2 items-start">
            <Switch
              checked={checked}
              size="small"
              style={{ color: `${checked ? "#1935CA" : "white"}` }}
              onChange={(e) => setChecked(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div>
              <p className="text-sm font-semibold leading-6 tracking-wide">
                News and Updates
              </p>
              <p className="text-xs leading-5 mt-1 tracking-wide text-[#49454F]">
                News about feature updates
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <Switch
              checked={checkedComments}
              size="small"
              style={{ color: `${checkedComments ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedComments(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div>
              <p className="text-sm font-semibold leading-6 tracking-wide">
                Comments
              </p>
              <p className="text-xs leading-5 mt-1 tracking-wide text-[#49454F]">
                Comments and replies on your post
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <Switch
              checked={checkedReminders}
              size="small"
              style={{ color: `${checkedReminders ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedReminders(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div>
              <p className="text-sm font-semibold leading-6 tracking-wide">
                Reminders
              </p>
              <p className="text-xs leading-5 mt-1 tracking-wide text-[#49454F]">
                Reminds you of missed updates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-7 rounded-lg shadow-md p-5 gap-y-6 flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-semibold leading-6 tracking-wide">
            Push Notifications
          </p>
          <p className="text-xs text-[#49454F] leading-5 tracking-wide w-auto lg:w-96 mt-1">
            Get push notification in-app to find out what's going on when you're
            online.
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-row gap-x-2 items-start">
            <Switch
              checked={checkedPush}
              size="small"
              style={{ color: `${checkedPush ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedPush(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div>
              <p className="text-sm font-semibold leading-6 tracking-wide">
                Activities
              </p>
              <p className="text-xs leading-5 mt-1 tracking-wide text-[#49454F]">
                Your Profile Updates
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <Switch
              checked={checkedCommentsPush}
              size="small"
              style={{ color: `${checkedCommentsPush ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedCommentsPush(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div>
              <p className="text-sm font-semibold leading-6 tracking-wide">
                Comments
              </p>
              <p className="text-xs leading-5 mt-1 tracking-wide text-[#49454F]">
                Comments and replies on your post
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <Switch
              checked={checkedRemindersPush}
              size="small"
              style={{ color: `${checkedRemindersPush ? "#1935CA" : "white"}` }}
              onChange={(e) => setCheckedRemindersPush(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div>
              <p className="text-sm font-semibold leading-6 tracking-wide">
                Reminders
              </p>
              <p className="text-xs leading-5 mt-1 tracking-wide text-[#49454F]">
                Reminds you of missed updates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-7 rounded-lg shadow-md p-5 flex gap-y-6 flex-col lg:flex-row justify-between">
        <div>
          <p className="font-semibold leading-6 tracking-wide">
            Advance Filters
          </p>
          <p className="text-xs text-[#49454F] leading-5 tracking-wide w-auto lg:w-96 mt-1">
            Fine-tune the notifications you’d like to see and those you don't
          </p>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="text-primaryColor self-start cursor-pointer text-sm border px-20 py-2 border-primaryColor rounded-full"
        >
          Set up Filters
        </div>
      </div>
      <FilterDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NotificationSettings;
