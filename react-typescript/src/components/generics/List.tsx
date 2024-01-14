type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
export const List = <T extends {id: number, first:string, last:string}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.id} {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};
