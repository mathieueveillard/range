import { Range } from "./range";

const contains =
  (first: Range) =>
  (second: Range): boolean => {
    if (second === "ø") {
      return true;
    }

    if (first !== "ø") {
      return (
        (first[0].value < second[0].value ||
          (first[0].value === second[0].value &&
            (first[0].inclusion === "INCLUSIVE" || second[0].inclusion === "EXCLUSIVE"))) &&
        (first[1].value > second[1].value ||
          (first[1].value === second[1].value &&
            (first[1].inclusion === "INCLUSIVE" || second[1].inclusion === "EXCLUSIVE")))
      );
    }

    return false;
  };

export default contains;
