"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { EnvelopeIcon } from "@/icons/envelope-icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackFormSchema } from "@/schema/feeback-form";
import axios from "axios";
import { CancelIcon } from "@/icons/cancel-icon";
import { LoadModal } from "@/components/base-components/modal";
gsap.registerPlugin(ScrollTrigger);
const FeedBackPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  //
  useEffect(() => {
    gsap.fromTo(
      ".img_right",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".img_right",
        },
      }
    );
  }, []);
  //
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(feedbackFormSchema),
  });
  // send feedback function
  const submitFeedBack = async (data: any) => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/submit-feedback`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setShowModal(true);
        setMessage(res.data.message);
        reset();
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //
  //
  return (
    <MainDiv className="relative py-12 !px-0 bg-light-100">
      <div>
        <h3 className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 text-[20px] sm:text-[39px] font-semibold text-dark-50 mb-4">
          Feedback
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap-12 md:gap-16">
          <div className="flex flex-col gap-4">
            <h4>For general enquiry, drop us a message.</h4>
            {/*  */}
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(submitFeedBack)}
            >
              {/* first name and last name */}
              <div className="form-control1">
                <label className="form-label1" htmlFor="firstName">
                  <p className="font-semibold text-dark-50">First Name</p>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    className="form-input1"
                    {...register("firstName")}
                  />
                  <small className="text-[10px] text-red-500">
                    {errors.firstName?.message}
                  </small>
                </label>
                {/*  */}
                <label className="form-label1" htmlFor="lastName">
                  <p className="font-semibold text-dark-50">Last Name</p>
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    className="form-input1"
                    {...register("lastName")}
                  />
                  <small className="text-[10px] text-red-500">
                    {errors.lastName?.message}
                  </small>
                </label>
                {/*  */}
              </div>
              {/* email and phone number */}
              <div className="form-control1">
                <label className="form-label1" htmlFor="email">
                  <p className="font-semibold text-dark-50">Email</p>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="form-input1"
                    {...register("email")}
                  />
                  <small className="text-[10px] text-red-500">
                    {errors.email?.message}
                  </small>
                </label>
                {/*  */}
                <label className="form-label1" htmlFor="phoneNumber">
                  <p className="font-semibold text-dark-50">Phone Number</p>
                  <input
                    type="mobile"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    className="form-input1"
                    {...register("phoneNumber")}
                  />
                  <small className="text-[10px] text-red-500">
                    {errors.phoneNumber?.message}
                  </small>
                </label>
                {/*  */}
              </div>
              {/* select contact reasons */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-dark-50 uppercase">
                  Please Select Contact Reason *
                </p>
                <div className="flex flex-col gap-3">
                  <label
                    className="w-[220px] flex items-center gap-[5px]"
                    htmlFor="contact"
                  >
                    <input
                      className="checked:ring-0 checked:ring-transparent focus:ring-0 focus:ring-transparent size-[14px] rounded-sm"
                      type="checkbox"
                      id="contact"
                      value={"Contact"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("reasons.0", e.target.value);
                        } else {
                          setValue("reasons.0", "");
                        }
                      }}
                    />
                    <p className="text-[14px] font-semibold text-dark-50">
                      Contact
                    </p>
                  </label>
                  {/*  */}
                  <label
                    className="w-[220px] flex items-center gap-[5px]"
                    htmlFor="feedBack"
                  >
                    <input
                      className="checked:ring-0 checked:ring-transparent focus:ring-0 focus:ring-transparent size-[14px] rounded-sm"
                      type="checkbox"
                      id="feedBack"
                      value="Feed back"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("reasons.1", e.target.value);
                        } else {
                          setValue("reasons.1", "");
                        }
                      }}
                    />
                    <p className="text-[14px] font-semibold text-dark-50">
                      Feed back
                    </p>
                  </label>
                  {/*  */}
                  <label
                    className="w-[220px] flex items-center gap-[5px]"
                    htmlFor="generalEnquiry"
                  >
                    <input
                      className="checked:ring-0 checked:ring-transparent focus:ring-0 focus:ring-transparent size-[14px] rounded-sm"
                      type="checkbox"
                      id="generalEnquiry"
                      value="General Enquiry"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("reasons.2", e.target.value);
                        } else {
                          setValue("reasons.2", "");
                        }
                      }}
                    />
                    <p className="text-[14px] font-semibold text-dark-50">
                      General Enquiry
                    </p>
                  </label>
                  {/*  */}
                  <label
                    className="w-[220px] flex items-center gap-[5px]"
                    htmlFor="support"
                  >
                    <input
                      className="checked:ring-0 checked:ring-transparent focus:ring-0 focus:ring-transparent size-[14px] rounded-sm"
                      value="Support"
                      type="checkbox"
                      id="support"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("reasons.3", e.target.value);
                        } else {
                          setValue("reasons.3", "");
                        }
                      }}
                    />
                    <p className="text-[14px] font-semibold text-dark-50">
                      Support
                    </p>
                  </label>
                  {/*  */}
                  <label
                    className="w-[220px] flex items-center gap-[5px]"
                    htmlFor="reportScam"
                  >
                    <input
                      className="checked:ring-0 checked:ring-transparent focus:ring-0 focus:ring-transparent size-[14px] rounded-sm"
                      value="Report a scam"
                      type="checkbox"
                      id="reportScam"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("reasons.4", e.target.value);
                        } else {
                          setValue("reasons.4", "");
                        }
                      }}
                    />
                    <p className="text-[14px] font-semibold text-dark-50">
                      Report a scam
                    </p>
                  </label>
                  {/*  */}
                </div>
              </div>
              {/*  */}
              <label htmlFor="message" className="form-label1">
                <p className="text-[14px] font-semibold text-dark-50">
                  MESSAGE
                </p>
                <textarea
                  className="form-input1"
                  id="message"
                  rows={5}
                  placeholder="Message"
                  {...register("message")}
                ></textarea>
                <small className="text-[10px] text-red-500">
                  {errors.message?.message}
                </small>
              </label>
              {/*  */}
              <button className="rounded px-4 py-2 self-end bg-green-600 text-light-50">
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            {/*  */}
            <div className="mt-5 bg-dark-100/10 w-full min-h-20 p-5 flex flex-col justify-center py-5">
              <p className="text-[14px] font-semibold text-dark-50 underline">
                Contact Us
              </p>
              <div className="flex items-center gap-2 text-dark-100/80 mt-5">
                <EnvelopeIcon className="fill-green-500" />
                <p>jessicamatt91@gmail.com</p>
              </div>
              <a href="tel:6614382332" className="text-dark-100/80 ml-6">
                (661) 438-2332
              </a>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-4">
            <Image
              src="/img39.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img32.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img40.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img41.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img40.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
          </div>
        </div>
      </div>
      {/*  */}
      {showModal && (
        <div className="fixed z-[9999] top-0 right-0 left-0 bottom-0 bg-dark-200/50 backdrop-blur-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-light-50 text-green-600 rounded-xl px-5 py-3 min-h-[100px] w-[90%] 476:w-[400px]">
            <p>{message && message}</p>
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <CancelIcon fill="#810000b9" />
            </div>
          </div>
        </div>
      )}
      {loading && <LoadModal />}
    </MainDiv>
  );
};

export default FeedBackPage;
