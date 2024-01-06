type GreetProps = {
  name: string;
  version?: number;
  isLogedin: boolean;
};
export const Greet = (props: GreetProps) => {
  const { version = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLogedin
          ? `Welcome ${props?.name}! React Learning v${props?.version}`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
