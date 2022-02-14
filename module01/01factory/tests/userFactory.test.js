const rewiremock = require('rewiremock/node');
const { deepStrictEqual } = require('assert');

// Poderia estar em outro arquivo

const dbData = [{ name: 'Mariazinha' }, { name: 'Joazinho' }];
class MockDataBase {
    connect = () => this;
    find = async (query) => dbData;
}

rewiremock(() => require('../src/util/database')).with(MockDataBase);

;(async () => {
    {
        const expected = [{ name: 'MARIAZINHA' }, { name: 'JOAZINHO' }];
        rewiremock.enable();
        const UserFactory = require("../src/factory/userFactory");

        const userFactory = await UserFactory.createInstance();
        const result = await userFactory.find();

        deepStrictEqual(result, expected);

        rewiremock.disable();
    }

    {
        const expected = [{ name: 'ERICKWENDEL' }];
        const UserFactory = require("../src/factory/userFactory");

        const userFactory = await UserFactory.createInstance();
        const result = await userFactory.find();

        deepStrictEqual(result, expected);
    }
})()