export const fontSize = (index: number) => {
  switch (index) {
    case 0:
      return "32px Arial";
    case 1:
      return "24px Arial";
    case 2:
      return "20px Arial";
    case 3:
      return "16px Arial";
    case 4:
      return "14px Arial";
    default:
      return "12px Arial";
  }
};