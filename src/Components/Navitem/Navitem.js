import React from "react";
import {
  Container,
  Navbar,
  Nav,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import "./Navitem.css";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Lastestpost from "../Lastestpost/Lastestpost";
import BestTravel from "../BestTravel/BestTravel";
import SectionItem from "../SectionItem/SectionItem";
import "./../Header/Header.css";
import Comments from "../Comments/Comments";
import Footer from "../Footer/Footer";
import Typewriter from "typewriter-effect";

export default function Navitem() {
  return (
    <>
      <div className="Navbar">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="text-white fw-bolder fs-3">
              تور مسافرتی
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features" className="text-white">
                  خانه
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  تورها
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className="text-white">
                  درباره ما
                </Nav.Link>
                <Nav.Link href="#deets" className="text-white">
                  گالری
                </Nav.Link>
                <Nav.Link href="#deets" className="text-white">
                  ارتباط با ما
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="Navbar-search">
          <p className="fs-1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("از تعطیلات رویایی خود لذت ببرید")
                  .start()
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("بهترین تور ها فقط با ما")
                  .start()
                  .pauseFor(2000);
              }}
              options={{
                loop: true,
              }}
            />
          </p>
          <p className="fs-4">سفر به هر گوشه از جهان </p>
          <div className="Container-div">
            <InputGroup size="sm" className="mb-3">
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Text id="inputGroup-sizing-sm">
                <SearchIcon />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Container>
      </div>
      <Header />
      <Section />
      <Lastestpost />
      <BestTravel
        title="یک سفر کامل را با متخصصان حرفه ای و با"
        desc="تجربه در این زمینه تجربه کنید"
      />
      <div className="div-grid">
        <SectionItem
          title="افراد مختلف"
          src="z1.png"
          desc="مشتری های راضی"
          newClass={true}
        />
        <SectionItem
          title="جاهای دیدنی"
          src="z2.png"
          desc="توده های عالی"
          newClass={true}
        />
        <SectionItem
          title="596"
          src="z3.png"
          desc="مشتری های راضی"
          newClass={true}
        />
        <SectionItem
          title="8400"
          src="z4.png"
          desc="سوالات پاسخ داده شده"
          newClass={true}
        />
      </div>
      <BestTravel
        title="سریع ترین راه برای مقایسه و"
        desc="رزرو پرواز های مناسب"
        newImg="true"
        newP="true"
        end="end"
      />
      <div className="text-center">
        <p className="text-center fs-2 fw-bold pt-5">نظر مشتریان</p>
        <div className="comments-div">
          <Comments
            title="نعمان حمیدی"
            src="1.png"
            desc="متن ساختگی لورم اپیسوم"
          />
          <Comments
            title="نعمان حمیدی"
            src="2.png"
            desc="متن ساختگی لورم اپیسوم"
          />
          <Comments
            title="نعمان حمیدی"
            src="3.png"
            desc="متن ساختگی لورم اپیسوم"
          />
        </div>
        <Button variant="outline-info">ادامه مطالب</Button>
      </div>
      <hr />
      <hr />
      <Footer />
    </>
  );
}
