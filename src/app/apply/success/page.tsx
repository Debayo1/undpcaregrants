"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Link from "next/link";
import { CheckCircleIcon } from "@/icons/check-circle-icon"; // We'll create or use clean SVG
import Image from "next/image";

export default function ApplicationSuccessPage() {
  return (
    <MainDiv className="py-16 bg-light-100 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-2xl w-[92%] mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 sm:p-12 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <svg
            className="w-10 h-10 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-dark-50 mb-3">
          Application Submitted Successfully!
        </h1>

        {/* Main notice requested by user */}
        <div className="bg-blue-50/10 border-l-4 border-blue-50 p-4 rounded-r-lg mb-8 text-left">
          <p className="text-dark-100/90 font-medium text-sm sm:text-base leading-relaxed">
            Our verification team will review your application to determine your eligibility. 
            You will receive a text on the status of your application soon. Good luck!
          </p>
        </div>

        {/* What Happens Next Section */}
        <div className="text-left bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
          <h2 className="text-base font-bold text-dark-100 mb-4 uppercase tracking-wider text-xs">
            What Happens Next?
          </h2>
          <div className="space-y-3 text-sm text-dark-100/80">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <p>
                <strong>Underwriting Review:</strong> An assigned eligibility underwriter will verify your submitted identity and employment details.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <p>
                <strong>Status Update:</strong> You will receive an SMS text notification and email updating you on your approval status.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <p>
                <strong>Disbursement:</strong> Once approved, relief funds will be dispatched via your preferred method (Direct Deposit / ACH, Bank Transfer, Cashier&apos;s Check, or Wire).
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-blue-50 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-md text-sm"
          >
            Return to Home
          </Link>
          <Link
            href="/feedback"
            className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-dark-100 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </MainDiv>
  );
}
