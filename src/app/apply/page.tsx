"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { CancelIcon } from "@/icons/cancel-icon";
import { useQuery } from "@tanstack/react-query";
import { ApplySchema } from "@/schema/apply-schema";
import { LoadModal } from "@/components/base-components/modal";
gsap.registerPlugin(ScrollTrigger);

const ApplyPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [receiveType, setReceiveType] = useState<string>("Cash");
  const [accountType, setAccountType] = useState<string>("Checking");

  const { data: states } = useQuery({
    queryKey: ["states"],
    queryFn: async () => {
      const res = await axios.get(
        `https://countriesnow.space/api/v0.1/countries/states`
      );
      return res.data;
    },
    select: (data) => data.data,
    staleTime: 2000,
  });

  const usStates = states?.find((country: any) => country.name === "United States")?.states;

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

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ApplySchema),
  });

  const toBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const submitApplication = async (data: any) => {
    setLoading(true);
    try {
      const formData = {
        ...data,
        receiveType,
        accountType: accountType || data.accountType,
      };
      const res = await axios.post(`/api/submit-application`, formData, {
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

  return (
    <MainDiv className="relative py-12 !px-0 bg-light-100">
      <div>
        <h3 className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 text-[20px] sm:text-[39px] font-semibold text-dark-50 mb-4">
          Grant Application
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap-12 md:gap-16 items-start">
          <div className="shadow-1 flex flex-col gap-4">
            <div className="mt-8 mb-12 w-[90%] md:w-[85%] mx-auto">
              <h4 className="text-3xl font-semibold mb-4  text-dark-100">
                Submit your details
              </h4>
              <p className="leading-4 tracking-wider text-dark-100/80 mt-2">
                To apply for the Grant you must be above 18 years of age. These
                Grants are not a loan and you don't need to pay back. Fill
                out your information and you can choose your preferred Grant
                type from the list below. You can only receive your payment
                through Direct Deposit or Debit Card. Your application will be
                approved based on your credit score. If your credit score is
                below 300, we will automatically reject your application. If
                your credit score is between 300 to 850 then you have a high
                percentage of getting approved. If your application is denied,
                our representatives are online to assist you or you can re-apply
                for a different Grant. We'll update you via email as soon
                as we know if your Grant has been approved or not, and then we
                can proceed to funding.
              </p>
              <p className="leading-4 tracking-wider text-dark-100/80 mt-4">
                As a reminder, the UNDP Grants (United Nations Development
                Programme Grants) do not need to be repaid. An underwriter will
                contact you within 24 hours as soon as your application has been
                approved.
              </p>
              <h4 className="text-xl font-semibold mt-4  text-dark-100/60">
                Our requirements and information
              </h4>
            </div>

            <form
              className="flex flex-col !text-dark-100/60 gap-4 shadow-[-6px_0_12px_rgba(0,0,0,0.15)] pt-6 px-8"
              onSubmit={handleSubmit(submitApplication)}
            >
              <div className="w-[98%] text-dark-100 mx-auto flex items-center gap-2">
                <p className="h-[2px] bg-dark-100/50 w-full" />
                <p className="whitespace-nowrap">Personal Information</p>
                <p className="h-[2px] bg-dark-100/50 w-full" />
              </div>

              <div className="grid grid-cols-1 887:grid-cols-2 997:grid-cols-3 items-center gap-4">
                <label className="form-label1" htmlFor="firstName">
                  <p className="font-semibold text-dark-50">First Name</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="firstName"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  <small className="text-[12px] text-red-500">
                    {errors.firstName?.message}
                  </small>
                </label>

                <label className="form-label1" htmlFor="middleName">
                  <p className="font-semibold text-dark-50">Middle Name</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="middleName"
                    placeholder="Middle Name"
                    {...register("middleName")}
                  />
                  <small className="text-[12px] text-red-500">
                    {errors.middleName?.message}
                  </small>
                </label>

                <label className="form-label1" htmlFor="lastName">
                  <p className="font-semibold text-dark-50">Last Name</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="lastName"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  <small className="text-[12px] text-red-500">
                    {errors.lastName?.message}
                  </small>
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1" htmlFor="phoneNumber">
                  <p className="font-semibold text-dark-50">Phone Number</p>
                  <input
                    className="form-input1"
                    type="text"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                  />
                  <small className="text-[12px] text-red-500">
                    {errors.phoneNumber?.message}
                  </small>
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1" htmlFor="gender">
                  <p className="font-semibold text-dark-50">Gender</p>
                  <select
                    id="gender"
                    className="form-input1"
                    {...register("gender")}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <small className="text-[12px] text-red-500">
                    {errors.gender?.message}
                  </small>
                </label>
              </div>

              <label className="form-label1" htmlFor="birthCity">
                <p className="font-semibold text-dark-50">
                  In What City & State Where You Born?
                </p>
                <textarea
                  className="form-input1"
                  rows={3}
                  id="birthCity"
                  {...register("homeCity")}
                ></textarea>
              </label>

              <label className="form-label1" htmlFor="taxReturn">
                <p className="font-semibold text-dark-50">
                  Have You Filed This Year Tax Return?
                </p>
                <select
                  id="taxReturn"
                  className="form-input1"
                  {...register("taxReturn")}
                >
                  <option value="">Select one Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              <label className="form-label1" htmlFor="homeAddress">
                <p className="font-semibold text-dark-50">Home Address</p>
                <textarea
                  className="form-input1"
                  rows={3}
                  id="homeAddress"
                  {...register("streetAddress")}
                ></textarea>
              </label>

              <div className="form-control1">
                <label className="form-label1" htmlFor="city">
                  <p className="font-semibold text-dark-50">Home City</p>
                  <input
                    className="form-input1"
                    type="text"
                    id="city"
                    {...register("city")}
                  />
                </label>
                <label className="form-label1" htmlFor="state">
                  <p className="font-semibold text-dark-50">Home State</p>
                  <select
                    id="state"
                    className="form-input1"
                    {...register("state")}
                  >
                    <option value="">Select State</option>
                    {usStates &&
                      usStates?.map((state: any, index: number) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                  </select>
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1" htmlFor="zipCode">
                  <p className="font-semibold text-dark-50">Zip Code</p>
                  <input
                    className="form-input1"
                    type="text"
                    id="zipCode"
                    {...register("zipCode")}
                  />
                </label>

                <label className="form-label1" htmlFor="country">
                  <select
                    id="country"
                    className="form-input1"
                    {...register("country")}
                  >
                    <option value="">Select Country</option>
                    {states &&
                      states?.map((state: any, index: number) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                  </select>
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1" htmlFor="email">
                  <p className="font-semibold text-dark-50">Email</p>
                  <input
                    className="form-input1"
                    type="email"
                    id="email"
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <small className="text-[10px] text-red-500">
                      {errors.email?.message}
                    </small>
                  )}
                </label>

                <label className="form-label1" htmlFor="confirmEmail">
                  <p className="font-semibold text-dark-50">Confirm Email</p>
                  <input
                    className="form-input1"
                    type="email"
                    id="confirmEmail"
                    {...register("confirmEmail")}
                  />
                  {errors.confirmEmail?.message && (
                    <small className="text-[10px] text-red-500">
                      {errors.confirmEmail?.message}
                    </small>
                  )}
                </label>
              </div>

              <div className="w-[98%] text-dark-100 mx-auto flex items-center gap-2">
                <p className="h-[2px] bg-dark-100/50 w-full" />
                <p className="whitespace-nowrap">Grant Payment Information</p>
                <p className="h-[2px] bg-dark-100/50 w-full" />
              </div>

              <div className="form-control1 !items-start">
                <label className="form-label1" htmlFor="grantType">
                  <p className="font-semibold text-dark-50">Grant Type</p>
                  <select
                    id="grantType"
                    className="form-input1"
                    {...register("grantType")}
                  >
                    <option value="">Select Grant Type</option>
                    <option value="Educational Grant">Educational Grant</option>
                    <option value="Persnal Grant">Persnal Grant</option>
                    <option value="Business Grant">Business Grant</option>
                    <option value="Healthcare Grant">Healthcare Grant</option>
                    <option value="Home Development Grant">
                      Home Development Grant
                    </option>
                  </select>
                </label>

                <label className="form-label1" htmlFor="grantAmount">
                  <p className="font-semibold text-dark-50">Grant Amount</p>
                  <select
                    id="grantAmount"
                    className="form-input1"
                    {...register("grantAmount")}
                  >
                    {grantAmountOptions?.map((option, idx) => (
                      <option key={idx} value={option?.value}>
                        {option?.label}
                      </option>
                    ))}
                  </select>
                  <small className="text-xs">
                    NOTE: The charges is a one-time tax clearance fee for an
                    approved beneficiary
                  </small>
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1">
                  <p className="font-semibold text-dark-50">
                    How To Receive The Grant
                  </p>
                  <div className="flex items-center gap-1">
                    <h3
                      className={`py-2 px-3 border-[2px] text-xs cursor-pointer border-slate-400 ${receiveType === "Cash"
                        ? "bg-slate-400 border-slate-800 text-slate-50"
                        : ""
                        }`}
                      onClick={() => setReceiveType("Cash")}
                    >
                      Cash
                    </h3>
                    <h3
                      className={`py-2 px-3 border-[2px] text-xs cursor-pointer border-slate-400 ${receiveType === "Cheque"
                        ? "bg-slate-400 border-slate-800 text-slate-50"
                        : ""
                        }`}
                      onClick={() => setReceiveType("Cheque")}
                    >
                      Cheque
                    </h3>

                    <h3
                      className={`py-2 px-3 border-[2px] text-xs cursor-pointer border-slate-400 ${receiveType === "Debit Card"
                        ? "bg-slate-400 border-slate-800 text-slate-50"
                        : ""
                        }`}
                      onClick={() => setReceiveType("Debit Card")}
                    >
                      Debit Card
                    </h3>
                  </div>
                </label>

                <label className="form-label1" htmlFor="grantAmount">
                  <p className="font-semibold text-dark-50">Account Type</p>
                  <div className="flex items-center gap-1">
                    <h3
                      className={`py-2 px-3 border-[2px] text-xs cursor-pointer border-slate-400 ${accountType === "Checking"
                        ? "bg-slate-400 border-slate-800 text-slate-50"
                        : ""
                        }`}
                      onClick={() => {
                        setAccountType("Checking");
                        setValue("accountType", "Checking");
                      }}
                    >
                      Checking
                    </h3>
                    <h3
                      className={`py-2 px-3 border-[2px] text-xs cursor-pointer border-slate-400 ${accountType === "Savings"
                        ? "bg-slate-400 border-slate-800 text-slate-50"
                        : ""
                        }`}
                      onClick={() => {
                        setAccountType("Savings");
                        setValue("accountType", "Savings");
                      }}
                    >
                      Savings
                    </h3>
                  </div>
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <div className="form-control1">
                  <label className="form-label1" htmlFor="grantMailAddress">
                    <p className="font-semibold text-dark-50">Grant Mail Address</p>
                    <textarea
                      className="form-input1"
                      rows={3}
                      id="grantMailAddress"
                      {...register("grantMailAddress")}
                    ></textarea>
                  </label>
                </div>

                <div className="form-control1">
                  <label className="form-label1" htmlFor="grantCity">
                    <input
                      className="form-input1"
                      type="text"
                      id="grantCity"
                      placeholder="City"
                      {...register("grantCity")}
                    />
                  </label>
                  <label className="form-label1" htmlFor="grantState">
                    <p className="font-semibold text-dark-50">Grant State</p>
                    <select
                      id="grantState"
                      className="form-input1"
                      {...register("grantState")}
                    >
                      <option value="">Select State</option>
                      {usStates &&
                        usStates?.map((state: any, index: number) => (
                          <option key={index} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>

                <div className="form-control1">
                  <label className="form-label1" htmlFor="grantZipCode">
                    <input
                      className="form-input1"
                      type="text"
                      id="grantZipCode"
                      placeholder="Zip Code"
                      {...register("grantZipCode")}
                    />
                  </label>

                  <label className="form-label1" htmlFor="grantCountry">
                    <select
                      id="grantCountry"
                      className="form-input1"
                      {...register("grantCountry")}
                    >
                      <option value="">Select Country</option>
                      {states &&
                        states?.map((state: any, index: number) => (
                          <option key={index} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>

                <div className="form-control1">
                  <label className="form-label1" htmlFor="grantPhoneNumber">
                    <p className="font-semibold text-dark-50">Phone Number</p>
                    <input
                      className="form-input1"
                      type="text"
                      id="grantPhoneNumber"
                      {...register("grantPhoneNumber")}
                    />
                  </label>
                </div>
              </div>
              <button
                disabled={loading}
                className="rounded px-4 py-2 bg-blue-50 text-light-50 mb-8"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

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
      {
        showModal && (
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
        )
      }
      {loading && <LoadModal />}
    </MainDiv>
  );
};

export default ApplyPage;

const grantAmountOptions = [
  { value: "", label: "Select Grant Amount" },
  { value: "Pay $1,500 get $50,000.00", label: "Pay $1,500 get $50,000.00" },
  { value: "Pay $2,500 get $60,000.00", label: "Pay $2,500 get $60,000.00" },
  { value: "Pay $5,000 get $80,000.00", label: "Pay $5,000 get $80,000.00" },
  { value: "Pay $7,500 get $100,000.00", label: "Pay $7,500 get $100,000.00" },
  {
    value: "Pay $10,000 get $150,000.00",
    label: "Pay $10,000 get $150,000.00",
  },
  {
    value: "Pay $13,500 get $200,000.00",
    label: "Pay $13,500 get $200,000.00",
  },
  {
    value: "Pay $17,500 get $300,000.00",
    label: "Pay $17,500 get $300,000.00",
  },
  {
    value: "Pay $25,500 get $400,000.00",
    label: "Pay $25,500 get $400,000.00",
  },
  {
    value: "Pay $45,000 get $550,000.00",
    label: "Pay $45,000 get $550,000.00",
  },
  {
    value: "Pay $65,000 get $700,000.00",
    label: "Pay $65,000 get $700,000.00",
  },
  {
    value: "Pay $80,000 get $850,000.00",
    label: "Pay $80,000 get $850,000.00",
  },
  {
    value: "Pay $100,000 get $1,000,000.00",
    label: "Pay $100,000 get $1,000,000.00",
  },
];
