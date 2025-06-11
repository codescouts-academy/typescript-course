class User {
  constructor(private readonly name: string, public age: number) { }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  get isAdult(): boolean {
    return this.age >= 18;
  }

  celebrateBirthday() {
    this.age += 1;
    return `Happy birthday! I am now ${this.age} years old.`;
  }
}
