import Link from 'next/link';
import dynamic from 'next/dynamic';
// import Video from '../components/video';

export default function Live() {
  const Video = dynamic(() => import('../components/video'), { ssr: false });
  return (
    <>
      <h1>First Post</h1>
      <Link href="/" className="">Back to home</Link>
      <Video />
    </>
  );
}