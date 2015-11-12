class Person {
	// PRIVATE INSTANCE VARIABLE
	private _name;
	
	//CONSTRUCTOR +++++++++++++++++++++++
	constructor(name:string) {
		this._name = name;
	}
	
	public sayName():void {
		console.log("your name is: " + this._name)
	}
}

var tom:Person = new Person("Tom");
tom.sayName();


