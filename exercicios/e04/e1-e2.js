const ex1 = document.getElementById("ex-1");
const ex2 = document.getElementById("ex-2");

const dobrarNum = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 4000);
  });
};

const numeroDobrado = async () => {
  alert(await dobrarNum(1000));
};

const somarValores = async (value) => {
  const value1 = await dobrarNum(10);
  const value2 = await dobrarNum(20);
  const value3 = await dobrarNum(30);

  alert(value + value1 + value2 + value3);
};

ex1.addEventListener("click", numeroDobrado);

ex2.addEventListener("click", () => {
  somarValores(5);
});
