"use client";

import React, { useState } from "react";
import Image from "next/image";
import Testimonial1 from "../../assets/unibazar-pricing-images/testimonial1.png";
import Testimonial2 from "../../assets/unibazar-pricing-images/testimonial2.png";
import Testimonial3 from "../../assets/unibazar-pricing-images/testimonial3.png";
import { FaArrowLeft, FaArrowRight, FaCircle, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [activeCard, setActiveCard] = useState(0);

  const testimonials = [
    {
      image: Testimonial1,
      name: "Zoey Lang",
      username: "@zoeylang",
      rating: 4.5,
      description: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      image: Testimonial2,
      name: "Zoey Lang",
      username: "@zoeylang",
      rating: 4.5,
      description: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      image: Testimonial3,
      name: "Zoey Lang",
      username: "@zoeylang",
      rating: 4.5,
      description: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
  ];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setActiveCard((prevActiveCard) => (prevActiveCard - 1 + testimonials.length) % testimonials.length);
    } else if (direction === "right") {
      setActiveCard((prevActiveCard) => (prevActiveCard + 1) % testimonials.length);
    }
  };

  return (
    <>
      <div className="w-full md:p-5">
        <div className="w-full justify-center items-center justify-items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800">Customer quotes and feedback</h2>
          <p className="text-xl font-normal text-gray-400 py-4">
            Hear from Our Satisfied Users 
          </p>
        </div>
        <div className="w-full p-5 flex flex-row justify-around items-start overflow-y-auto md:gap-0 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`max-w-[340px] min-w-[300px] rounded-xl shadow-md outline outline-2 ${
                activeCard === index ? "outline-teal-600" : "outline-gray-200"
              }`}
            >
              <div className="justify-between flex flex-row p-5">
                <div className="flex gap-5">
                  <Image isBordered radius="full" size="md" src={testimonial.image} alt="wait" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">{testimonial.name}</h4>
                    <h5 className="text-small tracking-tight text-default-400">{testimonial.username}</h5>
                  </div>
                </div>
                <p className="flex flex-row justify-items-center  items-center  gap-1">
                  {testimonial.rating} <FaStar className="text-yellow-500" />
                </p>
              </div>
              <div className="px-3 py-0 pb-2 text-small text-default-400">
                <p>{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between ">
          <div className="flex flex-row gap-3 p-10">
            {testimonials.map((_, index) => (
              <FaCircle
                key={index}
                className={`text-${activeCard === index ? "teal-600 w-8 bg-teal-600" : "gray-100"} outline outline-1 outline-teal-600 w-2 h-2 rounded-full`}
              />
            ))}
          </div>
          <div className="flex flex-row gap-5 p-10">
            <FaArrowLeft
              className="rounded-full outline outline-1 outline-teal-600 text-teal-600 p-1 w-7 h-7 cursor-pointer"
              onClick={() => handleArrowClick("left")}
            />
            <FaArrowRight
              className="rounded-full bg-teal-600 text-white outline outline-1 outline-teal-600 p-1 w-7 h-7 cursor-pointer"
              onClick={() => handleArrowClick("right")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;