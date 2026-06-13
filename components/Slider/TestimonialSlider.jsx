import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: "/images/testimonial_2.png",
      testimonialText:
        "Omed Ahmed provided exceptional service during a stressful roadside situation. He arrived quickly, handled the vehicle with great care, and explained every step of the process clearly. His professionalism, honesty, and attention to customer care made the experience smooth and worry-free. Highly recommended for anyone needing reliable towing assistance.",
      avatarName: "Alk Ihsan",
      avatarDesignation: "Outstanding Tow Truck Service",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_3.png",

      testimonialText:
        "I was stranded on Highway 401 with a flat tire, and Williams Towing responded immediately. The team arrived quickly, was professional throughout the process, and made sure I felt safe while they handled everything. The service was efficient, stress-free, and exceeded expectations. I would confidently recommend Williams Towing to anyone needing roadside assistance.",
      avatarName: "Sameer Hussain",
      avatarDesignation: "Fast Response & Professional Roadside Assistance",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_1.png",
      testimonialText:
        "After getting stuck in deep snow and being unable to move my vehicle for nearly an hour, Williams Towing came to the rescue. The dispatch team was calm and reassuring, while the driver provided exceptional assistance under difficult conditions. Their professionalism, kindness, and expertise turned a frightening situation into a positive experience.",
      avatarName: "Hossein Esfahani Zadeh",
      avatarDesignation: "Vehicle Recovery During Severe Winter Conditions",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_4.png",
      testimonialText:
        "After becoming stranded on a highway off-ramp, Williams Towing provided outstanding support. Driver Umer arrived promptly, handled the recovery professionally, and treated everyone involved with patience and respect. His calm approach, clear communication, and focus on safety helped make a stressful situation much easier to manage.",
      avatarName: "Ty Reid",
      avatarDesignation: "Professional, Caring & Safety-Focused Service",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_5.png",
      testimonialText:
        "I received excellent roadside assistance through my insurance provider. The technician arrived within the estimated timeframe, quickly got my vehicle running again, and provided helpful advice afterward. Professional, knowledgeable, and efficient service from start to finish.",
      avatarName: "Faith M",
      avatarDesignation: "Knowledgeable & Efficient Roadside Assistance",
      ratings: "5",
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
