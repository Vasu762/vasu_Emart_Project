import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";

function Main_Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [demo, setdemo] = useState(false);
  const mouseenter = (e) => {
    setdemo(true);
  };
  const mouseout = (e) => {
    setdemo(false);
  };
  const [Product, setproduct] = useState(false);
  const Productmouseenter = (e) => {
    setproduct(true);
  };
  const Productmouseout = (e) => {
    setproduct(false);
  };
  const [Shop, setShop] = useState(false);
  const Shopmouseenter = (e) => {
    setShop(true);
  };
  const Shoptmouseout = (e) => {
    setShop(false);
  };
  const [Bolg, setBolg] = useState(false);
  const Bolgmouseenter = (e) => {
    setBolg(true);
  };
  const Bolgmouseout = (e) => {
    setBolg(false);
  };

  const [Contact, setContact] = useState(false);
  const Contactmouseenter = (e) => {
    setContact(true);
  };
  const Contactmouseout = (e) => {
    setContact(false);
  };

  return (
    <Navbar collapseOnSelect expand="xl" className="flex items-center">
      <Container>
        <Navbar.Brand href="home" className="max-xl:order-2">
          <img
            alt="logo"
            src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp"
            width={140}
            height={31}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
          className="d-xl-none max-xl:order-1"
        />
        <Offcanvas show={show} onhide={handleClose} responsive="xl">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp"
                width={100}
                height={25}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-white">
            <Nav className="flex justify-center pe-5">
              {/* Demo */}
              <NavDropdown
                title={
                  <div className="flex justify-between items-center font-semibold icon max-xl:border-b-[1px]">
                    Demo
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline
                          points="6 9 12 15 18 9"
                          className="arrow"
                        ></polyline>
                      </svg>
                    </span>
                  </div>
                }
                show={demo}
                onMouseEnter={mouseenter}
                onMouseLeave={mouseout}
              >
                <section className="flex max-xl:justify-center items-center w-screen h-[500px] max-xl:ml-0 max-xl:w-block max-xl:h-auto m-auto max-xl:border-b-[1px]">
                  <div className="flex max:xl:block py-[50px] max-xl:py-0 pl-[50px]">
                    <div className="max-xl:hidden max-xl:ml-0">
                      <div className="py-[50px] max-xl:p-0">
                        <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp" />
                        <div className="">
                          <p className="mb-[8px] font-[jost] text-[21px] pt-[20px] pb-[10px]">
                            New Product on the Market
                          </p>
                          <p className="font-bold text-[16px] text-muted add">
                            <a href="#">Shop Now</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="leading-8 max-xl:leading-6 py-[60px] pl-[120px] pr-2 max-xl:my-0 max-xl:border-0  max-xl:p-0 max-xl:pl-0">
                      <NavDropdown.Item
                        href="#action2"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Fashion Hub
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Kids Wear
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text leading-0"
                      >
                        Women
                        <br className="max-xl:hidden" />
                        Fashion
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Big Fashion
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Fashion store
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Handicarft
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action7"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Interior
                      </NavDropdown.Item>
                    </div>

                    <div className="bg-[#c7c8cb] w-[1px] -mt[23px] -mb-[16px] ml-10 max-xl:hidden"></div>
                    <div className="py-[50px] pl-[120px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0">
                      <NavDropdown.Item
                        href="#action2"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Plant Garden
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Kids Toys
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text leading-0"
                      >
                        Electorinic
                        <br className="max-xl:hidden" />
                        Gadget
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Bathroom
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Bicycle
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Shoes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action7"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Bags
                      </NavDropdown.Item>
                    </div>

                    <div className="bg-[#c7c8cb] w-[1px] -mt[23px] -mb-[16px] ml-10 max-xl:hidden"></div>
                    <div className="py-[50px] pl-[120px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0">
                      <NavDropdown.Item
                        href="#action2"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Soap
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Skin Care
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Grocery Outlet
                        <span className="text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]">
                          New
                        </span>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Hiking Heaven
                        <span className="text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]">
                          New
                        </span>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Exotic Fragrances
                        <span className="text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]">
                          New
                        </span>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </section>

                <div className="h-[1px] bg-[#c7c8cb] max-xl:hidden"></div>
                <section className="max-xl:hidden">
                  <div className="flex items-center justify-center py-[15px]  pl-[800px]">
                    <p className="text-danger flex">
                      Summere sale 65% off
                      <span>
                        <a href="#" className="text-muted ml-2 add">
                          Shop Now
                        </a>
                      </span>
                    </p>
                  </div>
                </section>
                <div></div>
              </NavDropdown>

              {/* Product */}
              <NavDropdown
                title={
                  <div className="flex justify-between items-center font-semibold icon max-xl:border-b-[1px]">
                    Product
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline
                          points="6 9 12 15 18 9"
                          className="arrow"
                        ></polyline>
                      </svg>
                    </span>
                  </div>
                }
                show={Product}
                onMouseEnter={Productmouseenter}
                onMouseLeave={Productmouseout}
              >
                <section className="flex max-xl:justify-center items-center w-screen h-[500px] max-xl:ml-0 max-xl:w-block max-xl:h-auto m-auto max-xl:border-b-[1px]">
                  <div className="flex max:xl:block py-[50px] max-xl:py-0 pl-[50px]">
                    <div className="max-xl:hidden max-xl:ml-0">
                      <div className="py-[50px] max-xl:p-0 flex">
                        <div className="">
                          <img
                            src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-3rd.webp"
                            className="h-[350px] w-56"
                          />
                          <p>
                            Each Product has a number for
                            <br />
                            easy identification
                          </p>
                        </div>
                        <div className="ml-10">
                          <img
                            src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp"
                            className="h-[350px] w-56"
                          />
                          <p>
                            it's just a product of your fevered
                            <br />
                            imaginaton
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="leading-8 max-xl:leading-6 py-[50px] pl-[120px] pr-2 max-xl:my-0 max-xl:border-0  max-xl:p-0 max-xl:pl-0">
                      <NavDropdown.Item className="">
                        <img
                          src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/dress-02.png"
                          className="h-11 w-11"
                        />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Product Styles
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Style One
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Style Two
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Style Three
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Style Four
                      </NavDropdown.Item>
                    </div>

                    <div className="bg-[#c7c8cb] w-[1px] -mt[23px] -mb-[16px] ml-10 max-xl:hidden"></div>
                    <div className="py-[50px] pl-[120px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0">
                      <NavDropdown.Item className="">
                        <img
                          src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/school-bag.png"
                          className="h-11 w-11"
                        />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Product Gallery
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Vertical Carousel
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Carousel
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Horizontal Style
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Grid Style
                      </NavDropdown.Item>
                    </div>

                    <div className="bg-[#c7c8cb] w-[1px] -mt[23px] -mb-[16px] ml-10 max-xl:hidden"></div>
                    <div className="py-[50px] pl-[120px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0">
                      <NavDropdown.Item className="">
                        <img
                          src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/chair-1.png"
                          className="h-11 w-11"
                        />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Product Type
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Simple Product
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Veriable Product
                      </NavDropdown.Item>
                    </div>
                  </div>
                </section>

                <div className="h-[1px] bg-[#c7c8cb] max-xl:hidden"></div>
                <section className="max-xl:hidden">
                  <div className="flex items-center justify-center py-[15px]  pl-[800px]">
                    <p className="text-danger flex">
                      Summere sale 65% off
                      <span>
                        <a href="#" className="text-muted ml-2 add">
                          Shop Now
                        </a>
                      </span>
                    </p>
                  </div>
                </section>
                <div></div>
              </NavDropdown>

              {/* Shop */}
              <NavDropdown
                title={
                  <div className="flex justify-between items-center font-semibold icon max-xl:border-b-[1px]">
                    Shop
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline
                          points="6 9 12 15 18 9"
                          className="arrow"
                        ></polyline>
                      </svg>
                    </span>
                  </div>
                }
                show={Shop}
                onMouseEnter={Shopmouseenter}
                onMouseLeave={Shoptmouseout}
              >
                <section className="flex max-xl:justify-center items-center w-screen h-[500px] max-xl:ml-0 max-xl:w-block max-xl:h-auto m-auto max-xl:border-b-[1px]">
                  <div className="flex max:xl:block py-[50px] max-xl:py-0 pl-[50px]">
                    <div className="leading-8 max-xl:leading-6 py-[60px] pl-[120px] pr-2 max-xl:my-0 max-xl:border-0  max-xl:p-0 max-xl:pl-0">
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Listing Layouts
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        4 Column
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        4 Column + Side bar
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        5 Column
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        5 Column + Side bar
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Shop Pages
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Wishlist
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Cart
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        5 Column
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action6"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Checkout
                      </NavDropdown.Item>
                    </div>

                    <div className="bg-[#c7c8cb] w-[1px] -mt[23px] -mb-[16px] ml-10 max-xl:hidden"></div>
                    <div className="py-[60px] pl-[50px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0">
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Sidebar Widgets
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Product Filter at Top
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Product Filter at Left
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Product Filter at Right
                      </NavDropdown.Item>
                    </div>

                    <div className="bg-[#c7c8cb] w-[1px] -mt[23px] -mb-[16px] ml-10 max-xl:hidden"></div>
                    <div className="py-[60px] pl-[120px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0">
                      <NavDropdown.Item
                        href="#action2"
                        className="text-2xl py-[8px] text-[18px] animated-text font-bold"
                      >
                        Shop Box Styles
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action3"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Shop Style One
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Shop Style Two
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Shop Style Three
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action5"
                        className="text-muted py-[8px] text-[18px] animated-text"
                      >
                        Shop Style Four
                      </NavDropdown.Item>
                    </div>

                    <div className="max-xl:hidden ml-[80px] my-[60px]">
                      <div className="relative">
                        <img
                          width="360px"
                          height="450px"
                          src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/New-Project.webp"
                          className="attachment-large size-large wp-image-279"
                          alt=""
                          loading="lazy"
                        />
                        <div className="absolute text-3xl text-white -my-[225px] ml-[40px] tracking-winder">
                          <p>On The Weekend</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="h-[1px] bg-[#c7c8cb] max-xl:hidden"></div>
                <section className="max-xl:hidden">
                  <div className="flex items-center justify-center py-[15px]  pl-[800px]">
                    <p className="text-danger flex">
                      Summere sale 65% offj
                      <span>
                        <a href="#" className="text-muted ml-2 add">
                          Shop Now
                        </a>
                      </span>
                    </p>
                  </div>
                </section>
                <div></div>
              </NavDropdown>

              {/* Bolg */}
              <NavDropdown
                title={
                  <div className="flex justify-between drop items-center font-semibold icon max-xl:border-b-[1px] ">
                    Bolg
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-chevron-down arrow "
                      >
                        <polyline
                          points="6 9 12 15 18 9"
                          className="arrow "
                        ></polyline>
                      </svg>
                    </span>
                  </div>
                }
                show={Bolg}
                onMouseEnter={Bolgmouseenter}
                onMouseLeave={Bolgmouseout}
              >
                <NavDropdown.Item
                  href="#action52"
                  className="text-muted py-[8px] text-[18px] animated-text"
                >
                  {" "}
                  Default Bolg{" "}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action53"
                  className="text-muted py-[8px] text-[18px] animated-text"
                >
                  {" "}
                  Bolg One{" "}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action54"
                  className="text-muted py-[8px] text-[18px] animated-text"
                >
                  Bolg Two
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action55"
                  className="text-muted py-[8px] text-[18px] animated-text"
                >
                  Bolg Three
                </NavDropdown.Item>
              </NavDropdown>

              {/* Contact */}
              <NavDropdown
                title={
                  <div className="flex justify-between items-center drop font-semibold icon max-xl:border-b-[1px] ">
                    Contact
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-chevron-down arrow"
                      >
                        <polyline
                          points="6 9 12 15 18 9"
                          className="arrow "
                        ></polyline>
                      </svg>
                    </span>
                  </div>
                }
                show={Contact}
                onMouseEnter={Contactmouseenter}
                onMouseLeave={Contactmouseout}
              >
                <NavDropdown.Item
                  href="#action56"
                  className="text-muted py-[8px] text-[18px] animated-text"
                >
                  {" "}
                  Contact One{" "}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action57"
                  className="text-muted py-[8px] text-[18px] animated-text"
                >
                  {" "}
                  Contact Two{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Nav className="flex items-center pr-[10px] order-3">
          <div className="flex justify-between">
            <div className="max-xl:hidden max-xl:pr-0 pr-2 ">
              <a href="" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </a>
            </div>

            <div className="max-xl:pr-0 ml-2  pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <div className="max-xl:hidden ml-2 flex  max-xl:pr-0 pr-2 ">
              <a href="" className="flex ">
                <span className="wishlist_products_counter_text">
                  <img
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg"
                    alt="Wishlist-logo"
                  />{" "}
                </span>
                <span className="-mt-4 font-semibold">0</span>
              </a>
            </div>

            <div className="flex max-md:-mr-2 ml-2  ">
              <a href="" className="flex pr-[20px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-shopping-bag"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </span>
                <span className="-mt-4 font-semibold">0</span>
              </a>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Main_Navbar;
