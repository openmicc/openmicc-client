export default function SignupList() {
    const divClasses = [
        "bg-green-100",
        "border-red-2",
        "w-[300px]",
        "h-[400px]",
        "m-6",
        "text-gray-600",
        "flex",
        "flex-col",
    ].join(' ');
    return <div className={divClasses}>
        <h2 className="m-2 font-bold text-center">The Signup List</h2>
    </div>
}