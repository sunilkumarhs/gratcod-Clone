import React, { useEffect, useState } from "react";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const MainPage = () => {
  const [logImage, setLogImage] = useState(
    <img
      className="w-full h-full"
      alt="cloud"
      src="https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg"
    />
  );
  const [logTextColor, setLogTextColor] = useState("gray-300");
  // const [padding, setPadding] = useState("4");
  const imageValues = [
    <img
      className="w-full h-full text-gray-300"
      alt="cloud"
      src="https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg"
    />,
    <svg
      className="w-full h-full text-yellow-300"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4caf50"
        d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
      ></path>
      <path
        fill="#ffc107"
        d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"
      ></path>
      <path
        fill="#4caf50"
        d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
      ></path>
      <path
        fill="#ffc107"
        d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"
      ></path>
      <path
        fill="#f44336"
        d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"
      ></path>
      <path
        fill="#dd2c00"
        d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"
      ></path>
      <path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path>
      <path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path>
      <path
        fill="#fff"
        d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"
      ></path>
      <path
        fill="#2196f3"
        d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"
      ></path>
    </svg>,
    <HiMiniDevicePhoneMobile className="w-full h-full text-pink-300" />,
  ];
  const textColor = ["gray-300", "yellow-300", "pink-300"];

  useEffect(() => {
    let currentIndex = 0;
    setInterval(() => {
      setLogImage(imageValues[currentIndex]);
      setLogTextColor(textColor[currentIndex]);
      currentIndex = (currentIndex + 1) % imageValues.length;
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-02-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="pt-12">
      <div className="flex flex-wrap justify-center text-[5rem] font-bold px-[12rem]">
        <div className="w-[6.5rem] h-[6.5rem] mt-4">
          <img
            className="w-full h-full"
            alt="arrow"
            src="https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgartcod-without-bg.33aa91c5.png&w=256&q=75"
          />
        </div>
        <div className="pl-7">
          <p className="text-white">for</p>
        </div>
        <div className="h-[5rem] w-[5rem] mx-6 mt-8">{logImage}</div>
        <div>
          <p className={`text-${logTextColor}`}>& cloud</p>
        </div>
        <div className="-mt-4">
          <p className={`text-${logTextColor}`}>gaming</p>
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <p className="text-white px-2">Join us on the launch of gratcod by</p>
        <div className="w-12 h-12 -mt-2">
          <img
            alt="grat"
            src="https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprovoke_logo.d9109ac6.png&w=128&q=75"
          />
        </div>
      </div>
      <div className={`absolute pt-4 px-[36rem]`}>
        <button
          className={`bg-${logTextColor} w-28 h-10 text-white rounded-md`}
        >
          Claim Ticket
        </button>
      </div>
      <div className="flex justify-center text-white pt-24 pb-4">
        <div className="px-2 text-center">
          <p className="text-3xl font-bold py-1">{formatTime(timeLeft.days)}</p>
          <p className={`text-[0.6rem] text-${logTextColor}`}>DAYS</p>
        </div>
        <div className="px-2 text-center">
          <p className="text-3xl font-bold py-1">
            {formatTime(timeLeft.hours)}
          </p>
          <p className={`text-[0.6rem] text-${logTextColor}`}>HOURS</p>
        </div>
        <div className="px-2 text-center">
          <p className="text-3xl font-bold py-1">
            {formatTime(timeLeft.minutes)}
          </p>
          <p className={`text-[0.6rem] text-${logTextColor}`}>MINUTES</p>
        </div>
        <div className="px-2 text-center">
          <p className="text-3xl font-bold py-1">
            {formatTime(timeLeft.seconds)}
          </p>
          <p className={`text-[0.6rem] text-${logTextColor}`}>SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
