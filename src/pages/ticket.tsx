import Ticket from "@/vectors/ticket";
import { useRouter } from "next/router";

const TicketGen = () => {
  const router = useRouter();

  const props = router?.query;
  return (
    <div className=" bg-blue-50">
      <div className=" relative w-[840px] h-[1656px]  ">
        <Ticket className="w-[840px] h-[1656px] rounded-[50px]" />
        <div className=" w-[840px] flex justify-center items-center gap-2 absolute top-6 z-50 left-1/2 -translate-x-1/2 text-[#1B0C76] text-5xl ">
          <hr className=" w-[120px] border-[3px] border-[#1B0C76] bg-[#1B0C76] " />
          ID: {props.id}
          <hr className=" w-[120px] border-[3px] border-[#1B0C76] bg-[#1B0C76]" />
        </div>
        <div className=" absolute left-12 top-[120px] text-transparent bg-clip-text bg-gradient-to-r from-[#3E47F7] to-[#FF25A1] text-[108px] font-bold font-Figerona w-fit  ">
          {props.username}
          <div className=" text-[#0E1150] text-5xl font-medium font-Thai leading-tight  ">
            {props.firstName}
            <br />
            {props.lastName}
            <div className=" flex font-Thai items-center text-[#1B0C76] text-2xl ">
              <svg
                width="36"
                height="39"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00371 5.55996C6.94743 5.55996 7.71247 4.77102 7.71247 3.7978C7.71247 2.82459 6.94743 2.03564 6.00371 2.03564C5.05999 2.03564 4.29495 2.82459 4.29495 3.7978C4.29495 4.77102 5.05999 5.55996 6.00371 5.55996Z"
                  fill="#1B0C76"
                />
                <path
                  d="M2.0166 10.8464C2.0166 8.57561 3.80169 6.73473 6.00371 6.73473C8.20573 6.73473 9.99081 8.57561 9.99081 10.8464H2.0166Z"
                  fill="#1B0C76"
                />
              </svg>
              {props.roles}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketGen;
