const ForEach = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (value: T, index: number, array: T[]) => React.ReactNode;
}) => {
  return <>{items.map((...p) => render(...p))}</>;
};

export default ForEach;
