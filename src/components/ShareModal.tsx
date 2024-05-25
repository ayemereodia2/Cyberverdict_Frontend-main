import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

interface ShareModalProps {
  shareOpen: any;
  handleShareClose: any;
  shareUrl: any;
  type: any;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShareModal: React.FC<ShareModalProps> = ({
  shareOpen,
  handleShareClose,
  shareUrl,
  type
}) => {
  return (
    <div>
      <Modal
        open={shareOpen}
        onClose={handleShareClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="text-lg" id="modal-modal-title">
            Share this {type === "post" ? "post" : type === "video" ? "video" : "" }:
          </Typography>
          <div className="flex flex-row flex-wrap gap-5 mt-4">
            <div className="Demo__some-network">
              <FacebookShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <div>
                <FacebookShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count"
                >
                  {(count) => count}
                </FacebookShareCount>
              </div>
            </div>

            <div className="Demo__some-network">
              <TwitterShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <XIcon size={32} round />
              </TwitterShareButton>
            </div>

            <div className="Demo__some-network">
              <TelegramShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>

            <div className="Demo__some-network">
              <WhatsappShareButton
                url={shareUrl}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>

            <div className="Demo__some-network">
              <LinkedinShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>

            <div className="Demo__some-network">
              <LivejournalShareButton
                url={shareUrl}
                description={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LivejournalIcon size={32} round />
              </LivejournalShareButton>
            </div>

            <div className="Demo__some-network">
              <MailruShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <MailruIcon size={32} round />
              </MailruShareButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ShareModal;
