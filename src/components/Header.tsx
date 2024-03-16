import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type HeaderType = {
  layer1?: string;
  frame1000005978?: string;
  frame1000005979?: string;
  cart1?: string;
  frame1000005981?: string;

  /** Style props */
  layer1IconTop?: CSSProperties["top"];
  layer1IconPosition?: CSSProperties["position"];

  /** Action props */
  onLayer1Click?: () => void;
  onShopProductsText1Click?: () => void;
  onShopServicesText1Click?: () => void;
  onMembershipsText1Click?: () => void;
  onAgentReferralsText1Click?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  layer1,
  frame1000005978,
  frame1000005979,
  cart1,
  frame1000005981,
  layer1IconTop,
  layer1IconPosition,
  onLayer1Click,
  onShopProductsText1Click,
  onShopServicesText1Click,
  onMembershipsText1Click,
  onAgentReferralsText1Click,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      top: layer1IconTop,
      position: layer1IconPosition,
    };
  }, [layer1IconTop, layer1IconPosition]);

  return (
    <header
      className="bg-white overflow-hidden flex flex-row items-start justify-start pt-[27px] px-[75px] pb-[26px] box-border gap-[44px] max-w-full text-center text-3xs text-white font-poppins mq750:gap-[44px_22px] mq750:pl-[37px] mq750:pr-[37px] mq750:box-border"
      style={headerStyle}
    >
      <div className="h-[47px] w-[154px] flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border">
        <img
          className="self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src={layer1}
          onClick={onLayer1Click}
        />
      </div>
      <nav className="m-0 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full mq1275:hidden">
        <nav className="m-0 flex flex-row items-start justify-start gap-[35px] text-left text-base text-darkslategray font-poppins mq450:hidden mq750:gap-[35px_17px]">
          <div
            className="relative whitespace-nowrap cursor-pointer"
            onClick={onShopProductsText1Click}
          >
            Shop Products
          </div>
          <div
            className="relative whitespace-nowrap cursor-pointer"
            onClick={onShopServicesText1Click}
          >
            Shop Services
          </div>
          <div
            className="relative cursor-pointer"
            onClick={onMembershipsText1Click}
          >
            Memberships
          </div>
          <div
            className="relative whitespace-nowrap cursor-pointer"
            onClick={onAgentReferralsText1Click}
          >
            Agent Referrals
          </div>
        </nav>
      </nav>
      <div className="h-[46px] w-[300px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
        <div className="self-stretch flex-1 rounded-10xs bg-goldenrod overflow-hidden flex flex-row items-start justify-between py-0 pr-0 pl-[22px] gap-[20px]">
          <input
            className="w-[57px] [border:none] [outline:none] bg-[transparent] h-[35px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border font-poppins font-medium text-base text-gray-200"
            placeholder="Search"
            type="text"
          />
          <img
            className="h-[45px] w-[45px] relative overflow-hidden shrink-0"
            alt=""
            src={frame1000005978}
          />
        </div>
      </div>
      <div className="h-[41px] w-[140px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-9 w-9 relative rounded-8xl overflow-hidden shrink-0 min-h-[36px]"
            loading="lazy"
            alt=""
            src={frame1000005979}
          />
          <div className="h-9 flex-1 relative">
            <img
              className="absolute h-3/4 w-9/12 top-[11.11%] right-[13.89%] bottom-[13.89%] left-[11.11%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src={cart1}
            />
            <div className="absolute h-[44.44%] w-[44.44%] top-[-2.78%] right-[-8.33%] bottom-[58.33%] left-[63.89%] rounded-26xl bg-red box-border overflow-hidden flex flex-row items-start justify-start py-0 px-1 z-[1] border-[1px] border-solid border-white">
              <b className="w-1.5 relative inline-block min-w-[6px]">2</b>
            </div>
          </div>
          <img
            className="h-9 w-9 relative rounded-8xl overflow-hidden shrink-0 min-h-[36px]"
            loading="lazy"
            alt=""
            src={frame1000005981}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
