this.id = "exports";

const testObj = {
  funct1: function () {
    console.log("function 1", this);
  },
  funct2: () => {
    console.log("function 2", this);
  },
};

testObj.funct1();
testObj.funct2();
