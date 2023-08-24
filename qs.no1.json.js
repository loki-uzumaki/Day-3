//1. comparing two JSON having the same properties without order
// let obj1 = { name: "Person1", age: 5 };
// let obj2 = { age: 5, name: "Person1" };

let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };
function compareJSON(a, b) {
    let res = true;
    if (Object.keys(a).length == Object.keys(b).length) {
        for (key in a) {
            if (a[key] == b[key]) {
                continue;
            }
            else {
                res = false;
                break;
            }

        }
    } else {
        res = false;
    }
    console.log(res)
}
compareJSON(obj1, obj2)