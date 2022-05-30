export type FiniteBoundary = {
  value: number;
  inclusion: "INCLUSIVE" | "EXCLUSIVE";
};

type LeftBoundary = FiniteBoundary | "-∞";

type RightBoundary = FiniteBoundary | "+∞";

export type Range = [LeftBoundary, RightBoundary] | "ø";
