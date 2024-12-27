import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
  return (
    <>
      <Container className="mt-5">
        <div className="row">
          <div className="col-4">
            <p className="fs-2 fw-bold text-secondary">نام شرکت</p>
            <p>لورم اپیسوم متن ساختگی</p>
          </div>
          <div className="col-4">
            <p>اطلاعات تماس</p>
            <p>
              <PhoneInTalkIcon />
              09105679278
            </p>
            <p>
              <MarkEmailReadIcon />
              hosha1290@gmail.com
            </p>
          </div>
          <div className="col-4 text-center">
            <p>مارا دنبال کنید</p>
            <TelegramIcon />
            <InstagramIcon />
            <WhatsAppIcon />
          </div>
        </div>
      </Container>
    </>
  );
}
