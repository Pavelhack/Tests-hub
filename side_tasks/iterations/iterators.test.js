import { toConsumableArray } from './iterators';

describe(`side_tasks/iterations/iterators.js`, () => {
    describe(`toConsumableArray(iterable)`, () => {

        test(`it takes an array, iterates it, and produces a new array`, () => {

            const source = [ 'a', 'B', 123, 0, false ];
            expect(toConsumableArray(source)).toEqual(source);

        });

        test(`it takes a string, iterates it, and produces an array of characters`, () => {
            const subject = 'Hello';
            expect(toConsumableArray(subject)).toEqual(subject.split(''));
        });

    });
});
