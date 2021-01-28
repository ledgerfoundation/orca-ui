export const truncateAddress = address => {
  const { length } = address;
  return `${address.slice(0, 5)}...${address.slice(length - 5, length - 1)}`;
};
