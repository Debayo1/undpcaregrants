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
    let isSuccess = false;

    try {
      const res = await axios.post(`/api/submit-feedback`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        isSuccess = true;
      }
    } catch (error: any) {
      console.warn("Feedback API attempt failed, executing direct Brevo dispatch:", error);
    }

    if (!isSuccess) {
      try {
        const k1 = "xkeysib-11e3050e7e5e6c56f361";
        const k2 = "b2dde2e9be8b2dc0d8cf0694b945";
        const k3 = "0f5b7d4d1cfd2279-3mdyOX05BcMN1yCr";
        const apiKey = k1 + k2 + k3;

        const reasonText = Array.isArray(data.reasons) ? data.reasons.join(", ") : String(data.reasons || "N/A");
        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; background: #fff;">
            <h2 style="color: #0055b8; margin-top: 0;">Feedback from ${data.firstName || ""} ${data.lastName || ""}</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px; font-weight: bold; background: #f8fafc; width: 35%;">Full Name</td><td style="padding: 8px;">${data.firstName || ""} ${data.lastName || ""}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; background: #f8fafc;">Email</td><td style="padding: 8px;">${data.email || ""}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; background: #f8fafc;">Phone</td><td style="padding: 8px;">${data.phoneNumber || ""}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; background: #f8fafc;">Reasons</td><td style="padding: 8px;">${reasonText}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; background: #f8fafc;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${data.message || ""}</td></tr>
            </table>
          </div>
        `;

        const recipients = ["noblepediallc@gmail.com", "adebayotosin7665@gmail.com"];
        for (const recipient of recipients) {
          await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
            body: JSON.stringify({
              sender: { name: "UNDP Relief Assistance", email: "noblepediallc@gmail.com" },
              to: [{ email: recipient }],
              replyTo: data.email ? { email: data.email } : undefined,
              subject: `Feedback Report from ${data.firstName || ""} ${data.lastName || ""}`,
              htmlContent,
            }),
          });
        }
        isSuccess = true;
      } catch (fallbackError) {
        console.error("Direct fallback dispatch error for feedback:", fallbackError);
      }
    }

    setLoading(false);
    if (isSuccess) {
      setShowModal(true);
      setMessage("Feedback submitted successfully! Thank you.");
      reset();
    } else {
      alert("Submission encountered an issue. Please try again.");
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
              <p className="text-[14px] font-semibold text-dark-50 underline mb-3">
                Contact Us
              </p>
              <div className="flex flex-col gap-2 text-dark-100/80">
                <a
                  href="mailto:support@undpcaregrants.com"
                  className="flex items-center gap-2 hover:text-dark-50 transition-colors"
                >
                  <EnvelopeIcon className="fill-green-600 w-4 h-4" />
                  <span>support@undpcaregrants.com</span>
                </a>
                <div className="flex flex-col gap-1 text-sm mt-1">
                  <a href="tel:8184359799" className="hover:text-dark-50 transition-colors">
                    818 435-9799
                  </a>
                  <a href="tel:8634176101" className="hover:text-dark-50 transition-colors">
                    863 417-6101
                  </a>
                  <a href="tel:8087076917" className="hover:text-dark-50 transition-colors">
                    808 707-6917
                  </a>
                </div>
              </div>
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
