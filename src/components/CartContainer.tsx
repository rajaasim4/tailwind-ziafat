import { FunctionComponent, useCallback } from "react";
import Header from "./Header";

const CartContainer: FunctionComponent = () => {
  const onLayer1Click = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onShopProductsText1Click = useCallback(() => {
    // Please sync "Shop Products" to the project
  }, []);

  const onShopServicesText1Click = useCallback(() => {
    // Please sync "Shop Services" to the project
  }, []);

  const onMembershipsText1Click = useCallback(() => {
    // Please sync "Memberships (Monthly)" to the project
  }, []);

  const onAgentReferralsText1Click = useCallback(() => {
    // Please sync "Agents Referals" to the project
  }, []);

  return (
    <section className="flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border top-[0] z-[99] sticky max-w-full">
      <Header
        layer1="/layer-1.svg"
        frame1000005978="/frame-1000005978.svg"
        frame1000005979="/frame-1000005979.svg"
        cart1="/cart1.svg"
        frame1000005981="/frame-1000005981.svg"
        onLayer1Click={onLayer1Click}
        onShopProductsText1Click={onShopProductsText1Click}
        onShopServicesText1Click={onShopServicesText1Click}
        onMembershipsText1Click={onMembershipsText1Click}
        onAgentReferralsText1Click={onAgentReferralsText1Click}
      />
    </section>
  );
};

export default CartContainer;
