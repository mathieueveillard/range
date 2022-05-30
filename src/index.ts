import { FiniteBoundary, Range } from "./range";

const compareLeftFiniteBoundaries =
  (first: FiniteBoundary) =>
  (second: FiniteBoundary): boolean => {
    return (
      first.value < second.value ||
      (first.value === second.value && (first.inclusion === "INCLUSIVE" || second.inclusion === "EXCLUSIVE"))
    );
  };

const compareRightFiniteBoundaries =
  (first: FiniteBoundary) =>
  (second: FiniteBoundary): boolean => {
    return (
      first.value > second.value ||
      (first.value === second.value && (first.inclusion === "INCLUSIVE" || second.inclusion === "EXCLUSIVE"))
    );
  };

const contains =
  (first: Range) =>
  (second: Range): boolean => {
    if (second === "ø") {
      return true;
    }

    if (first === "ø") {
      return false;
    }

    if (first[1] === "+∞") {
      if (first[0] === "-∞") {
        return true;
      }
      return second[0] !== "-∞" && compareLeftFiniteBoundaries(first[0])(second[0]);
    }

    if (second[1] === "+∞") {
      return false;
    }

    if (first[0] === "-∞") {
      return compareRightFiniteBoundaries(first[1])(second[1]);
    }

    if (second[0] === "-∞") {
      return false;
    }

    return compareLeftFiniteBoundaries(first[0])(second[0]) && compareRightFiniteBoundaries(first[1])(second[1]);
  };

export default contains;
