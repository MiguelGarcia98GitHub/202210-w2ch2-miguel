import { strictEquals } from "./strictEquals.js";

const tests = {
    Test1: strictEquals(1, 1),
    Test2: strictEquals(NaN, NaN), // Exception
    Test3: strictEquals(0, -0), // Exception
    Test4: strictEquals(-0, 0), // Exception
    Test5: strictEquals(1, "1"),
    Test6: strictEquals(true, false),
    Test7: strictEquals(false, false),
    Test8: strictEquals("Water", "oil"),
};

console.table(tests);
