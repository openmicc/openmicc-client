import Navbar from './navbar';

export default function Layout({ children }: { children: any }) {
    return <>
        <Navbar />
        <div>{children}</div>
    </>;
}