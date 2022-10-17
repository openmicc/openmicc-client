import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSignupList } from "../app/store";
import SignupForm from "./signup_form";
import SignupListItem from "./signup_list_item";

export default function SignupList() {
  const signupList = useAppSelector(selectSignupList);

  const divClasses = [
    "bg-green-100",
    "border-red-2",
    "max-w-[300px]",
    "min-h-[400px]",
    "flex-grow",
    "m-4",
    "ml-0",
    "p-6",
    "text-gray-600",
    "flex",
    "flex-col",
  ].join(" ");

  return (
    <div className={divClasses}>
      <h2 className="m-2 font-bold text-center">The Signup List</h2>
      <ol className="list-decimal m-2 ml-4 list-outside">
        {signupList.map((entry) => (
          <SignupListItem key={entry.id} entry={entry} />
        ))}
      </ol>
      <SignupForm />
    </div>
  );
}
