
const db = require('../../connection/connection')
const testServices = () =>{

    const insertTest = async (name) => {
        const result = await db(`Insert into test (name) values ('${name}')`)
        return result
    }
    const deleteTest = async (name) => {
        const result = await db(`delete from test where name = '${name}' `)
        return result
    }
    const getTest = async () => {
        const result = await db(`Select * from test `)
        return result
    }

    return {
        insertTest,
        deleteTest,
        getTest
    }
}

module.exports = testServices;