export default class Project {
    
    constructor(name="default") {
        this.name = name;
        this.todoArray = [];
        console.log(`New project object created with name ${name}`);
    }

    get projectName(){
        return this.name;
    }

    func1 () {
        console.log("Func1");
        // console.log(bigCall);
        console.log(this.p1); // undefined
    }

}