// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import contains from ".";
import { Range } from "./range";
expect.extend(matchers);

describe("Test of contains", function () {
  test("ø contains itself", function () {
    // GIVEN
    const first: Range = "ø";
    const second: Range = "ø";

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("ø does not contain [0, 1]", function () {
    // GIVEN
    const first: Range = "ø";
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("[Control] [0, 1] contains ø", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = "ø";

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 1] contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("]0, 1] does not contain [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "EXCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("]0, 1] does contain ]0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "EXCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "EXCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 1] does contain ]0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "EXCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 1[ does not contain [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "EXCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("[0, 1[ contains [0, 1[", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "EXCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "EXCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 1] contains [0, 1[", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "EXCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[-1, 1] contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: -1,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 2] contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 2,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[Control] [0, 2] does not contain [1, 3]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 2,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
      {
        value: 3,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("]-1, 1] contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: -1,
        inclusion: "EXCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 2[ contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 2,
        inclusion: "EXCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, +∞[ contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      "+∞",
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("]0, +∞[ does not contain [0, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "EXCLUSIVE",
      },
      "+∞",
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("[0, +∞[ contains [0, +∞[", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      "+∞",
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      "+∞",
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 1] does not contain [0, +∞[", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      "+∞",
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("]-∞, 1] contains [0, 1]", function () {
    // GIVEN
    const first: Range = [
      "-∞",
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("]-∞, 1[ does not contain [0, 1]", function () {
    // GIVEN
    const first: Range = [
      "-∞",
      {
        value: 1,
        inclusion: "EXCLUSIVE",
      },
    ];
    const second: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("]-∞, 1] contains ]-∞, 1]", function () {
    // GIVEN
    const first: Range = [
      "-∞",
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      "-∞",
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });

  test("[0, 1] does not contain ]-∞, 1]", function () {
    // GIVEN
    const first: Range = [
      {
        value: 0,
        inclusion: "INCLUSIVE",
      },
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];
    const second: Range = [
      "-∞",
      {
        value: 1,
        inclusion: "INCLUSIVE",
      },
    ];

    // WHEN
    expect(contains(first)(second)).toEqual(false);
  });

  test("]-∞, +∞[ contains ]-∞, +∞[", function () {
    // GIVEN
    const first: Range = ["-∞", "+∞"];
    const second: Range = ["-∞", "+∞"];

    // WHEN
    expect(contains(first)(second)).toEqual(true);
  });
});
