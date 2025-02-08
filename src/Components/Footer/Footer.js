import React from "react";
import { Container } from "react-bootstrap";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";
const Footer = () => (
  <Container className="mt-5">
    <article className="row">
      <div className="col-4">
        <p className="fs-2 fw-bold text-secondary">نام شرکت</p>
        <p>لورم اپیسوم متن ساختگی</p>
      </div>
      <div className="col-4 text-center">
        <h3 className="fs-base">اطلاعات تماس</h3>
        <h3  className="fs-base">
          <PhoneInTalkIcon />
          09105679278
        </h3>
        <h3 className="fs-base">
          <MarkEmailReadIcon />
          hosha1290@gmail.com
        </h3>
      </div>
      <div className="col-4 text-center">
        <h3 className="fs-base">مارا دنبال کنید</h3>
        <TelegramIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
    </article>
  </Container>
);
export default Footer;
