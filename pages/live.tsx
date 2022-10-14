import dynamic from 'next/dynamic';
import SignupList from '../components/signup_list';
// import Video from '../components/video';

export default function Live() {
  const Camera = dynamic(() => import('../components/camera'), { ssr: false });
  return (
    <>
      
      <SignupList />
      {/* <Camera /> */}
    </>
  );
}