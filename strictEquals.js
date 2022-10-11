// eslint-disable-next-line import/prefer-default-export
export const strictEquals = (a, b) => {
    // With == operator
    // if (a == 0 && b == 0) {
    //     return true;
    // } // Pass Test 3 and 4: 0, -0 / -0, 0

    if (Object.is(a, 0) && Object.is(b, -0)) {
        return true; // Pass Test 3: 0, -0
    }

    if (Object.is(a, -0) && Object.is(b, 0)) {
        return true; // Pass Test 4: -0, 0
    }

    if (Object.is(a, -b)) {
        return false;
    } // Pass Test 2: NaN, NaN
    return Object.is(a, b);
};
