import dynamic from "next/dynamic";
// import Video from '../components/video';

export default function Stage() {
  const Camera = dynamic(() => import("../components/camera"), { ssr: false });

  return (
    <div className="w-[600px] h-[400px] bg-gray-300 m-4">
      <Camera />
    </div>
  );
}
