<!-- exporting code I want to be able to use in different file. -->
"use strict";

const capitalizedString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizedString };
export const foo = "bar";
export const bar = "foo";
