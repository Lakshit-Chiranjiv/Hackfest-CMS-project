const data = [
    {
        id: 1,
        name: "bob"
    },
    {
        id: 2,
        name: "rinky"
    },
    {
        id: 3,
        name: "abhishek"
    },
    {
        id: 4,
        name: "vikash"
    }
]
const chkid = 3
const foundUser = data.find(ob => ob.id===chkid)

const someObj = {
    a: 6,
    b: 5
}

const x = {...someObj,d: 10};
x.c = 9


const zz = {
    a: 6,
    b: 9,
    arr: [
        {
            x: 5,
            y: 3,
            z: [
                {v: 8}
            ]
        },
        {
            x: 2,
            y: 4,
            z: [
                {v: 1}
            ]
        },
        {
            x: 1,
            y: 8,
            z: [
                {v: 5}
            ]
        },
        {
            x: 21,
            y: 5,
            z: [
                {v: 3}
            ]
        }
    ]
}

let w = [
    {a: 2},
    {b: 4},
    {c: 0}
]

zz.arr.find(ob => ob.x===2).z.push({c: 7})

zz.arr.find(ob => ob.x===2).z = w

console.log(zz)


// console.log(someObj)
// console.log(x)