export type Boundary = {
  value: number;
  inclusion: "INCLUSIVE" | "EXCLUSIVE";
};

export type Range = [Boundary, Boundary] | "ø";
