import MapSvg from "@/components/map";

export default function Map() {
  const mapData = [{ id: 1, name: "หอประชุม" },{id:2,name:"ชมรม"}];
  const mapId = mapData.map((item) => item.id);

  return (
    <div className=" min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#FFD6AC] via-[#FC7ADB] to-[#4924D1] ">
      <div className=" mt-20 flex justify-center">
        <div>
          <div className="text-center text-violet-900 lg:text-[65px] md:text-[40px] text-[20px] font-bold">
            แผนผังงาน
            <br />
            Triam Udom Open House 2023
          </div>
          <MapSvg className=" max-md:max-w-screen-sm h-auto" id={mapId} />
        </div>
      </div>
    </div>
  );
}
