// ANY

let stringArr: any[];

stringArr = [1, 'true', [], {}];

// funtcion

let sayHi = () => {
  console.log('hi');
};

let sayHello = (): string => {
  return 'hello';
};

let addNum = (num: number): number => {
  return num + 1;
};

addNum(1);

// type aliase

type User = {
  username: string;
  age: number;
  phone?: string;
};

let displayUser = (user: User) => {
  console.log(`hello ${user.username}, you are ${user.age}`);
};

displayUser({ username: 'phuong', age: 34 });
