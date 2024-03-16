import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-goldenrod overflow-hidden flex flex-col items-start justify-start pt-16 pb-7 pr-[74px] pl-[75px] gap-[25px] text-left text-base text-darkslategray font-poppins mq450:pt-[42px] mq450:pb-5 mq450:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1100:flex-wrap">
          <img
            className="h-[55px] w-[137.9px] relative overflow-hidden shrink-0"
            alt=""
            src="/layer-1-1.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative font-medium inline-block min-w-[45px]">
              Menu
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-white">
              <div className="relative">Shop Products</div>
              <div className="relative">Shop Services</div>
              <div className="relative">Memberships</div>
              <div className="relative">Agent Referrals</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative font-medium inline-block min-w-[43px]">
              Legal
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-white">
              <div className="relative">Privacy Policy</div>
              <div className="relative">Copyright Information</div>
              <div className="relative">Cookie Policy</div>
            </div>
          </div>
          <div className="w-56 flex flex-col items-start justify-start gap-[16px]">
            <div className="relative font-medium">Get in Touch</div>
            <div className="self-stretch h-8 flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/icbaselinefacebook.svg"
              />
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/simpleiconsx.svg"
              />
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/vaadinyoutube.svg"
              />
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/mdilinkedin.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-white" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center text-white">
        <div className="relative">
          Copyright © 2023 Etao7 LLC. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
