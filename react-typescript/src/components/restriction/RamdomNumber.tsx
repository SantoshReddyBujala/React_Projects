type RamdomNumberType = {
  value: number;
};

type PostiveNumber = RamdomNumberType & {
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RamdomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RamdomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RamdomNumberProps = Zero | NegativeNumber | PostiveNumber;

export const RamdomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RamdomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "isPositive"} {isNegative && "isNegative"}{" "}
      {isZero && "isZero"}
    </div>
  );
};
