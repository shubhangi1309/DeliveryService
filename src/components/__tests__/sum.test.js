import { sum } from "../sum"
test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(3,4);
    //Assertion
    expect(result).toBe(7);
})
// test is a function, takes 2 arguments, string & callback function