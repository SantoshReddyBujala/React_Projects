import { PersonProps } from "./Types";
export const Person = (props: PersonProps) => {
  return (
    <div>
        <h1>Props Object</h1>
      <h2>
        {props?.name?.first} {props?.name?.last}
      </h2>
    </div>
  );
};
