import { Carousel, Card, Button } from "react-bootstrap";
import img1 from "../../assets/images/PriceList.png";
import img2 from "../../assets/images/jettdark.jpg";
import img3 from "../../assets/images/valorant.jpg";
import img4 from "../../assets/images/CaraOrder.png";
import "../../styles/home/home.css";
import { useEffect, useState } from "react";
export const Home = ({ user }) => {
  return (
    <div className="">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={img4}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="w-100 text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="mt-5 fs-1 fw-bold">Joki Rank</h1>
        <Card style={{ width: "22rem" }} className="shadow my-5">
          <Card.Img variant="top" src={img2} className="card-img" />
          <Card.Body>
            <Card.Title className="fs-3 fw-bold">Valorant</Card.Title>
            <Card.Text>
              Joki Rank Valorant murah dengan pengerjaan cepat.Tersedia dari
              rank Iron hingga Platinum
            </Card.Text>
            {user ? (
              user?.role === "USER" ? (
                <button
                  className="btn btn-primary fw-bold"
                  onClick={() => {
                    const token = localStorage.getItem("token");
                    if (token) {
                      window.location.href = "/checkout";
                      return;
                    }
                    window.alert("Anda perlu login terlebih dahulu! ");
                    window.location.href = "/login";
                  }}
                >
                  Pesan Joki
                </button>
              ) : (
                ""
              )
            ) : (
              <button
                className="btn btn-primary fw-bold"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  if (token) {
                    window.location.href = "/checkout";
                    return;
                  }
                  window.alert("Anda perlu login terlebih dahulu! ");
                  window.location.href = "/login";
                }}
              >
                Pesan Joki
              </button>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
