"use client";

import { useState } from "react";
import Image from "next/image";
import Testimonial1 from "../../assets/unibazar-pricing-images/testimonial1.png";
import Testimonial2 from "../../assets/unibazar-pricing-images/testimonial2.png";
import Testimonial3 from "../../assets/unibazar-pricing-images/testimonial3.png";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Utkarsh Yadav",
      location: "Shanxi, China",
      rating: 4.5,
      image: {Testimonial1},
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: {Testimonial2},
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      image: {Testimonial3},
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial + 1) % testimonials.length
    );
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer quotes and feedback
      </h2>
      <p className="text-center mb-16">
        Hear from Our Satisfied Users
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {testimonials.map((testimonials, index) => (
          <div
            key={index}
            className={`testimonial rounded-lg shadow-md p-8 w-full md:w-1/3 ${
              index === currentTestimonial
                ? "opacity-100"
                : "opacity-50"
            }`}
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonials.image}
                alt={testimonials.name}
                className="rounded-full w-12 h-12 mr-4"
              ></Image>
              <div>
                <h3 className="font-bold">{testimonials.name}</h3>
                <p className="text-gray-600">{testimonials.location}</p>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl mr-2">
                  {testimonials.rating}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.951.69h3.462c.969 0 1.371.871.583 1.481l-2.8 2.034a1 1 0 00-.364 1.13l1.295 3.462c.48.129.582.46.194.688l-3.196 1.504a1 1 0 00-.69.951h-3.462a1 1 0 00-.951-.69l-1.295-3.462c-.48-.129-.582-.46-.194-.688l3.196-1.504a1 1 0 00.69-.951h3.462a1 1 0 00.951.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700">{testimonials.quote}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousTestimonial}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-l-lg"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full bg-teal-500 ${
                index === currentTestimonial ? "bg-teal-700" : "bg-gray-300"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNextTestimonial}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
