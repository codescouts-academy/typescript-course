// Example of all types in TypeScript

// Primitive types
let text: string = "Hello world";
let numberValue: number = 42;
let booleanValue: boolean = true;
let undefinedValue: undefined = undefined;
let nullValue: null = null;
let symbolValue: symbol = Symbol("symbol");

// Special types
let unknownValue: unknown = "something";
let anyValue: any = 123;
function throwError(): never { throw new Error("Error"); }

// Composite types
let arrayValue: number[] = [1, 2, 3];
let tupleValue: [string, number] = ["age", 30];
let objectValue: { name: string; age: number } = { name: "Ana", age: 25 };

// Enum
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Green;

// Function
function sum(a: number, b: number): number {
  return a + b;
}

// Literal types
let direction: "left" | "right" = "left";

// Type alias
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };

// Interfaces
interface Person {
  name: string;
  age: number;
}
let person: Person = { name: "John", age: 40 };

// Union types
let idValue: number | string = 123;
idValue = "abc";

// Intersection types
type Employee = Person & { salary: number };
let employee: Employee = { name: "Luis", age: 35, salary: 2000 };

// Function types
let operation: (x: number, y: number) => number = (x, y) => x * y;

// Class types
class Animal {
  species: string;
  constructor(species: string) {
    this.species = species;
  }
}
let dog = new Animal("dog");

// Generic types
function identity<T>(value: T): T {
  return value;
}
let result = identity<string>("text");
