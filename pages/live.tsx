import Link from 'next/link';
import dynamic from 'next/dynamic';
// import Video from '../components/video';

export default function Live() {
  const Camera = dynamic(() => import('../components/camera'), { ssr: false });
  return (
    <>
      <h1>First Post</h1>
      <Link href="/" className="">Back to home</Link>
      <Camera />
    </>
  );
}