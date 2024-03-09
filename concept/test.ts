let x = 1;

function foo() {
  let x = 10;
  function bar() {
    console.log(x, "foo 안");
  }
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 10
bar(); // 1
