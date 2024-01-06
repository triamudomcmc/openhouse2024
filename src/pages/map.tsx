import MapSvg from "@/components/map";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Map() {
  const mapData = [
    { id: 1, name: "ชมรมสิ่งละอันพันละน้อยและ กสร. การงานอาชีพ" },
    { id: 2, name: "ชมรมเพาะพันธุ์ไม้" },
    { id: 3, name: "ชมรมการ์ตูน" },
    { id: 4, name: "ศิลป์ญี่ปุ่น" },
    { id: 5, name: "ศิลป์จีน" },
    { id: 6, name: "ศิลป์เกาหลี" },
    { id: 7, name: "ศิลป์สเปน" },
    { id: 8, name: "ศิลป์ฝรั่งเศส" },
    { id: 9, name: "ศิลป์เยอรมัน" },
    { id: 10, name: "วิทย์-คณิต" },
    { id: 11, name: "ศิลป์คำนวณ" },
    { id: 12, name: "กิฟต์วิทย์" },
    { id: 13, name: "กิฟต์คณิต" },
    { id: 14, name: "กิฟต์อังกฤษ" },
    { id: 15, name: "ชมรมเพื่อนที่ปรึกษาและงานแนะแนว" },
    { id: 16, name: "ชมรมดนตรีสากล" },
    { id: 17, name: "ชมรมนิเทศศิลป" },
    { id: 18, name: "ชมรมสร้างสรรค์หนังสือ" },
    { id: 19, name: "ชมรมวาทศิลป์" },
    { id: 20, name: "ชมรมวรรณศิลป์ ต.อ." },
    { id: 21, name: "ชมรมหมากกระดาน" },
    { id: 22, name: "ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์" },
    { id: 23, name: "หน่วยงานภายนอก" },
    { id: 24, name: "หน่วยงานภายนอก" },
    { id: 25, name: "หน่วยงานภายนอก" },
    { id: 26, name: "หน่วยงานภายนอก" },
    { id: 27, name: "หน่วยงานภายนอก" },
    { id: 28, name: "หน่วยงานภายนอก" },
    { id: 29, name: "ชมรมภาษาเกาหลี" },
    { id: 30, name: "ชมรมภาษาจีน" },
    { id: 31, name: "ชมรมภาษาญี่ปุ่น" },
    { id: 32, name: "ชมรมภาษาสเปน" },
    { id: 33, name: "ชมรมภาษาเยอรมัน" },
    { id: 34, name: "ชมรมภาษาฝรั่งเศส" },
    { id: 35, name: "ชมรมและกสร.ภาษาต่างประเทศที่ 2" },
    { id: 36, name: "หน่วยงานภายนอก" },
    { id: 37, name: "หน่วยงานภายนอก" },
    { id: 38, name: "หน่วยงานภายนอก" },
    { id: 39, name: "หน่วยงานภายนอก" },
    { id: 40, name: "หน่วยงานภายนอก" },
    { id: 41, name: "หน่วยงานภายนอก" },
    { id: 42, name: "หน่วยงานภายนอก" },
    { id: 43, name: "ชมรมศิลปะและ กสร. ศิลปะ" },
    { id: 44, name: "ชมรมภาษาอังกฤษและ กสร. ภาษาอังกฤษ" },
    { id: 45, name: "ชมรมคณิตศาสตร์และ กสร. คณิตศาสตร์" },
    { id: 46, name: "ชมรมสังคมศึกษาและ กสร. สังคมศึกษา" },
    { id: 47, name: "ชมรมเศรษฐศาสตร์" },
    { id: 48, name: "ชมรมผู้บำเพ็ญประโยชน์" },
    { id: 49, name: "ชมรมเยาวชนฯ" },
    { id: 50, name: "ชมรมวิทยาศาสตร์และ กสร. วิทยาศาสตร์" },
    { id: 51, name: "ชมรมวิทยาศาสตร์" },
    { id: 52, name: "ชมรมโลกศาสตร์" },
    { id: 53, name: "ชมรมหุ่นยนต์" },
    { id: 54, name: "สปค.ต.อ." },
    { id: 55, name: "สนตอ." },
    { id: 56, name: "สปค.รร.ต.อ." },
    { id: 57, name: "กช." },
    { id: 58, name: "กน." },
    { id: 59, name: "AIC" },
    { id: 60, name: "ชมรมนันทนาการกิฬาและ กสร. สุขศึกษาฯ" },
    { id: 61, name: "สโมสรอาจารย์ โรงเรียนฯ" },
    { id: 62, name: "โรงเรียนมักกะสัน" },
    { id: 63, name: "โรงเรียนเตรียมฯ สุวินทวงศ์" },
    { id: 64, name: "โรงเรียนเตรียมฯ ภาคเหนือ" },
    { id: 65, name: "โรงเรียนเตรียมฯ ภาคตะวันออกฯ" },
    { id: 66, name: "โรงเรียนเตรียมฯ ภาคใต้" },
    { id: 67, name: "ชมรมถ่ายภาพ" },
    { id: 68, name: "TUPRO" },
    { id: 69, name: "ชมรมภาษาไทยและ กสร. ภาษาไทย" },
    { id: 70, name: "กิฟต์ไทย" },
  ];

  const [mapId, setMapId] = useState<number[]>([]);
  const [filter, setFilter] = useState("All");
  const [rows, setRows] = useState("")
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(event: any) {
    setSearchQuery(event.target.value);
    setFilter("All")
  }

  function handleNameSearch() {
    const foundItems = mapData
      .filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((item) => item.id);

    if (foundItems.length > 0) {
      setMapId(foundItems);
    } else {
      // Handle the case when no matching name is found
      console.log("No matching name found");
      setMapId(mapData.map((item) => item.id) )
    }
  }

  function handleAll() {
    setFilter("All");
    const ids = mapData.map((item) => item.id);
    setMapId(ids);
    setSearchQuery("")
  }
  function handleProgrammes() {
    console.log("Before setMapId:", mapId);
    setFilter("สายการเรียน");
    setMapId([4, 5, 6, 7, 8, 9, 10, 11]);
    setSearchQuery("")
  }

  function handleClubs() {
    setFilter("ชมรม");
    setMapId([
      1, 2, 3, 15, 16, 17, 18, 19, 20, 21, 22, 29, 30, 31, 32, 33, 34, 35, 43,
      44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 60,
    ]);
    setSearchQuery("")
  }
  function handleGifted() {
    setFilter("Gifted");
    setMapId([12, 13, 14, 70]);
    setSearchQuery("")
  }
  function handleOrganizations() {
    setFilter("องค์กร");
    setMapId([54, 55, 56, 57, 58, 59, 68]);
    setSearchQuery("")
  }

  useEffect(() => {
    setFilter("All");
    const ids = mapData.map((item) => item.id);
    setMapId(ids);
  }, []);
  useEffect(() => {
    if (searchQuery !== "") {
      handleNameSearch();
    }
    else{
      setMapId(mapData.map((item) => item.id))
    }
  }, [searchQuery]);

  return (
    <div className=" min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#FFD6AC] via-[#FC7ADB] to-[#4924D1] ">
      <div className=" mt-20 flex justify-center">
        <div>
          <div className="text-center text-violet-900 lg:text-5xl md:text-3xl text-xl font-bold">
            แผนผังงาน
            <br />
            Triam Udom Open House 2024
          </div>
          <div className=" flex justify-around mt-5 gap-1">
            <button
              className={`md:min-w-[100px] px-4 py-1 md:rounded-xl rounded-md md:text-lg text-xs font-semibold ${
                filter === "All"
                  ? "bg-[#400591] text-white"
                  : "text-[#400591] bg-white"
              }`}
              onClick={handleAll}
            >
              All
            </button>
            <button
              className={`md:min-w-[100px] px-4 py-1 md:rounded-xl rounded-md md:text-lg text-xs font-semibold ${
                filter === "สายการเรียน"
                  ? "bg-[#400591] text-white"
                  : "text-[#400591] bg-white"
              }`}
              onClick={handleProgrammes}
            >
              สายการเรียน
            </button>
            <button
              className={`md:min-w-[100px] px-4 py-1 md:rounded-xl rounded-md md:text-lg text-xs font-semibold ${
                filter === "ชมรม"
                  ? "bg-[#400591] text-white"
                  : "text-[#400591] bg-white"
              }`}
              onClick={handleClubs}
            >
              ชมรม
            </button>
            <button
              className={`md:min-w-[100px] px-4 py-1 md:rounded-xl rounded-md md:text-lg text-xs font-semibold ${
                filter === "Gifted"
                  ? "bg-[#400591] text-white"
                  : "text-[#400591] bg-white"
              }`}
              onClick={handleGifted}
            >
              Gifted
            </button>
            <button
              className={`md:min-w-[100px] px-4 py-1 md:rounded-xl rounded-md md:text-lg text-xs font-semibold ${
                filter === "องค์กร"
                  ? "bg-[#400591] text-white"
                  : "text-[#400591] bg-white"
              }`}
              onClick={handleOrganizations}
            >
              องค์กร
            </button>
          </div>
          <div className=" flex justify-center">
            <div className="relative mt-4 w-3/4 text-white ">
              <div className="absolute top-0 left-0 flex items-center h-full ml-6">
                <MagnifyingGlassIcon className="w-6 h-6 text-white" />
              </div>
              <input
                onChange={handleSearch}
                value={searchQuery}
                className="w-full py-2 max-md:h-8 pr-4 bg-white border rounded-full bg-opacity-20 placeholder:text-white pl-14 border-opacity-40"
                placeholder="ค้นหา..."
              />
            </div>
          </div>
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            velocityAnimation={{ sensitivity: 0.02 }}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <div className="flex flex-col items-center mt-8">
                <TransformComponent>
                  <MapSvg
                    className="cursor-grab md:w-full w-[90vw] max-md:hidden h-auto md:h-[64rem] "
                    id={mapId}
                  />
                </TransformComponent>
              </div>
            )}
          </TransformWrapper>
          <MapSvg
                    className="cursor-grab w-[90vw] md:hidden h-auto md:h-[64rem] "
                    id={mapId}
                  />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <div className="grid grid-flow-col grid-rows-70 md:grid-rows-30 lg:grid-rows-16 gap-x-2 text-sm w-fit">
          {mapId.map((id) => (
            <div key={id} className="m-1 w-fit">
              <div className="flex items-center">
                <div className="bg-white rounded-full h-6 w-6 flex justify-center items-center leading-relaxed">
                  {id < 10 ? `0${id}` : id}
                </div>
                <div className="ml-2 text-white">
                  {mapData.find((item) => item.id === id)?.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
