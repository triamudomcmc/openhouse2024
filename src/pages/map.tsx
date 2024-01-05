import MapSvg from "@/components/map";

export default function map() {
  const mapId = [{ id: 1, name: "หอประชุม" }];

  return (
    <div className=" min-h-screen w-screen overflow-x-hidden">
      <div className=" mt-20 flex justify-center">
        <MapSvg id={[2]} />
      </div>
    </div>
  );
}
