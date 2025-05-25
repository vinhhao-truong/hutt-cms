export const formatVNNumber = (num: number) => {
  return new Intl.NumberFormat("vi-VN").format(num);
};

export const formatVNCurrency = (num: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(num);
};
