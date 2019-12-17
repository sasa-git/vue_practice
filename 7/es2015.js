const array = [1, 2];
array.push(3);
console.log(array);
array.length = 0;
console.log(array);

const array2 = [1, 2, 3];
const newArray = array2.map(el => el * 2);
console.log(newArray);
const newArray2 = array2.map((el, index) =>
  console.log(`index...${index} : value...${el} `)
);
const newArray3 = array2.map(el => ({ value: el * 2 }));
console.log(newArray3);

const array4 = [{ id: 1, name: "apple" }, { id: 2, name: "lemon" }];
const result = array4.find(el => el.id === 2);
console.log(result);

const result2 = array4.findIndex(el => el.id === 2);
console.log(result2);

function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 1秒後にresolveが呼ばれる
      resolve("Later success!!");
    }, 1000);
  });
}

// myfunctionの処理が終わったら知らせを受けて、thenの処理が行われる。
myFunction().then(value => {
  console.log(value);
});

function myFunction2(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("succeed!!");
    } else {
      reject("error!!!");
    }
  });
}
myFunction2(100).catch(value => {
  console.log(value);
});

myFunction2(100)
  .then(value => {
    console.log(vaue);
  })
  .catch(value => {
    console.log(value);
  })
  .finally(() => {
    console.log("finished");
  });

function myFunction3({ id, name }) {
  console.log(`id:${id}, name: ${name}`);
}
myFunction3({ id: 2, name: "sasa" });

const array5 = [1, 2, 3];
function myFunction4(array) {
  console.log(array);
}
myFunction4(...array5);
const newArray4 = [...array5, 4];
