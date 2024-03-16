import { FunctionComponent, useCallback } from "react";
import MenuBar1 from "./MenuBar1";

const LightReversibleQuiltedJacke: FunctionComponent = () => {
  const onCopyrightInfoClick = useCallback(() => {
    // Please sync "Checkout Product" to the project
  }, []);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[51px] max-w-full text-left text-21xl text-darkslategray font-poppins mq750:gap-[25px_51px]">
      <div className="flex flex-row items-start justify-start pt-0 px-px pb-[13px]">
        <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-5xl mq450:leading-[24px] mq750:text-13xl mq750:leading-[32px]">
          Cart
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full text-base mq450:gap-[16px_64px] mq750:gap-[32px_64px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
          <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between py-5 pr-[87px] pl-5 box-border max-w-full gap-[20px] text-xl mq750:pr-[21px] mq750:box-border mq1100:flex-wrap mq1275:pr-[43px] mq1275:box-border">
            <div className="relative font-medium inline-block min-w-[79px] mq450:text-base">
              Product
            </div>
            <div className="w-[630px] flex flex-row items-start justify-start gap-[203px] max-w-full mq450:gap-[203px_51px] mq750:flex-wrap mq750:gap-[203px_101px]">
              <div className="relative font-medium inline-block min-w-[50px] mq450:text-base">
                Price
              </div>
              <div className="flex-1 relative font-medium inline-block min-w-[57px] mq450:text-base">
                Quantity
              </div>
              <div className="flex-1 relative font-medium inline-block min-w-[57px] mq450:text-base">
                Subtotal
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-10xs bg-floralwhite overflow-x-auto flex flex-row items-start justify-start p-5 gap-[32px] mq750:gap-[32px_16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 relative overflow-hidden shrink-0">
              <img
                className="absolute w-[calc(100%_-_18.2px)] top-[calc(50%_-_30px)] right-[9.2px] left-[9px] max-w-full overflow-hidden h-[60px] object-cover"
                alt=""
                src="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
              />
            </button>
            <div className="w-[409px] shrink-0 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
              <div className="relative">Quilted Satin Jacket</div>
            </div>
            <MenuBar1 />
            <div className="w-[259px] shrink-0 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <div className="w-[101px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start pt-3 pb-[11px] pr-3.5 pl-[15px] border-[1px] border-solid border-darkslategray">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="relative inline-block min-w-[16px]">01</div>
                  </div>
                  <div className="h-8 w-4 relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-4 h-4 overflow-hidden object-contain"
                      alt=""
                      src="/dropupsmall@2x.png"
                    />
                    <img
                      className="absolute top-[16px] left-[0px] w-4 h-4 overflow-hidden"
                      alt=""
                      src="/dropupsmall-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
              <div className="relative inline-block min-w-[41px] whitespace-nowrap">
                $650
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start p-5 box-border gap-[32px] max-w-full mq750:gap-[32px_16px] mq1275:flex-wrap">
            <div className="h-20 w-20 relative overflow-hidden shrink-0">
              <img
                className="absolute w-[calc(100%_-_22.5px)] top-[calc(50%_-_30px)] right-[11.5px] left-[11px] max-w-full overflow-hidden h-[60px] object-cover"
                loading="lazy"
                alt=""
                src="/ideapadgaming3i01500x500-1@2x.png"
              />
            </div>
            <div className="w-[409px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full">
              <div className="relative">ASUS FHD Gaming Laptop</div>
            </div>
            <MenuBar1 />
            <div className="w-[259px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <div className="w-[101px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start pt-3 pb-[11px] pr-3.5 pl-[15px] border-[1px] border-solid border-darkslategray">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="relative inline-block min-w-[16px]">01</div>
                  </div>
                  <div className="h-8 w-4 relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-4 h-4 overflow-hidden object-contain"
                      alt=""
                      src="/dropupsmall@2x.png"
                    />
                    <img
                      className="absolute top-[16px] left-[0px] w-4 h-4 overflow-hidden"
                      alt=""
                      src="/dropupsmall-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
              <div className="relative inline-block min-w-[45px] whitespace-nowrap">
                $1299
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <button className="cursor-pointer pt-4 pb-[15px] pr-[29px] pl-7 bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                <div className="w-[121px] relative text-base font-poppins text-darkslategray text-center inline-block">
                  Return To Shop
                </div>
              </button>
              <button className="cursor-pointer pt-4 pb-[15px] pr-[29px] pl-7 bg-[transparent] w-[180px] rounded-10xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                <div className="flex-1 relative text-base font-poppins text-darkslategray text-center">
                  Update Cart
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[801px] flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-9xl">
          <div className="w-[280px] rounded-10xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-4 px-6 pb-[15px] border-[1px] border-solid border-darkslategray">
            <input
              className="w-28 [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-gray-100 text-center inline-block p-0"
              placeholder="Coupon Code"
              type="text"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[226px] max-w-full">
            <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[34px] pl-[35px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
              <div className="w-[115px] relative text-base font-medium font-poppins text-white text-center inline-block">
                Apply Coupon
              </div>
            </button>
          </div>
          <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl">
            Cart Total
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-xl">
        <div className="w-[630px] flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[16px_64px] mq750:gap-[32px_64px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19.5px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="relative font-medium mq450:text-base">
                  Subtotal
                </div>
                <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                  $1795
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="relative font-medium mq450:text-base">
                  Shipping
                </div>
                <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 mq450:text-base">
                  Free
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="relative font-medium inline-block min-w-[51px] mq450:text-base">
                  Total
                </div>
                <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                  $1795
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button
              className="cursor-pointer [border:none] pt-4 px-[31px] pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod"
              onClick={onCopyrightInfoClick}
            >
              <div className="w-[166px] relative text-base font-medium font-poppins text-white text-center inline-block">
                Proceed to checkout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightReversibleQuiltedJacke;
