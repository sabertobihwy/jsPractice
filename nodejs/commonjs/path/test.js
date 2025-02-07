var name = "global"
class MyClass {
    constructor() {
      this.name = "MyClass";
    }
    arrowFunction = () => {
        console.log(this.name);
    };
}
  
const c = new MyClass()
c.arrowFunction()