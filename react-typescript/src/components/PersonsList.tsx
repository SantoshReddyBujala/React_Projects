import "../App.css";
import { PersonsListProps } from "./Types";

export const PersonsList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.first} className="nameColor">
            {name.first} {name.last}
          </h1>
        );
      })}
    </div>
  );
};
