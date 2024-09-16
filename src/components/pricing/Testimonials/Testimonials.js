"use client";

import React from "react";
import Image from "next/image";
import Testimonial1 from "../../../assets/unibazar-pricing-images/testimonial1.png";
import Testimonial2 from "../../../assets/unibazar-pricing-images/testimonial2.png";
import Testimonial3 from "../../../assets/unibazar-pricing-images/testimonial3.png";
import { FaArrowLeft, FaArrowRight, FaCircle, FaStar } from "react-icons/fa";



const Testimonials = () => {


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
          <div className="max-w-[340px] min-w-[300px] rounded-xl shadow-md outline outline-2 outline-gray-200">
            <div className="justify-between flex flex-row p-5">
              <div className="flex gap-5">
                <Image isBordered radius="full" size="md" src={Testimonial1} alt='wait'></Image>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                  <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                </div>
              </div>
              <p className="flex flex-row justify-items-center  items-center  gap-1">
                4.5 <FaStar className="text-yellow-500" />
              </p>
            </div>
            <div className="px-3 py-0 pb-2 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
              </p>
            </div>
          </div>
          <div className="max-w-[340px] min-w-[300px] rounded-xl shadow-md outline outline-2 outline-teal-600">
            <div className="justify-between flex flex-row p-5">
              <div className="flex gap-5">
                <Image isBordered radius="full" size="md" src={Testimonial2} alt='wait' ></Image>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                  <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                </div>
              </div>
              <p className="flex flex-row justify-items-center  items-center  gap-1">
                4.5 <FaStar className="text-yellow-500" />
              </p>
            </div>
            <div className="px-3 py-0 pb-2 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
              </p>
            </div>
          </div>
          <div className="max-w-[340px] min-w-[300px] rounded-xl shadow-md outline outline-2 outline-gray-200">
            <div className="justify-between flex flex-row p-5">
              <div className="flex gap-5">
                <Image isBordered radius="full" size="md" src={Testimonial3} alt='wait' ></Image>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                  <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                </div>
              </div>
              <p className="flex flex-row justify-items-center  items-center  gap-1">
                4.5 <FaStar className="text-yellow-500" />
              </p>
            </div>
            <div className="px-3 py-0 pb-2 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between ">
          <div className="flex flex-row gap-3 p-10">
            <FaCircle className="text-teal-600 bg-teal-600 outline outline-1 outline-teal-600 w-10 h-2 rounded-lg" />
            <FaCircle className="text-gray-100 outline outline-1 outline-teal-600 w-2 h-2 rounded-full" />
            <FaCircle className="text-gray-100 outline outline-1 outline-teal-600 w-2 h-2 rounded-full" />
            <FaCircle className="text-gray-100 outline outline-1 outline-teal-600 w-2 h-2 rounded-full" />
          </div>
          <div className="flex flex-row gap-5 p-10">
            <FaArrowLeft className="rounded-full outline outline-1 outline-teal-600 text-teal-600 p-1  w-7
            h-7 cursor-pointer"/>
            <FaArrowRight className="rounded-full bg-teal-600 text-white outline outline-1 outline-teal-600  p-1 w-7
            h-7 cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
