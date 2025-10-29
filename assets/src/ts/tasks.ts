const cl = console.log;

//  ENUMS (10 Tasks)

// 1. Create an enum `OrderStatus` with values Pending, Shipped, Delivered, Cancelled and write a function that returns message based on status.  
// 2. Make a string enum `UserRole` (Admin, Editor, Viewer) and use it inside an interface.  
// 3. Demonstrate reverse-mapping on a numeric enum.  
// 4. Use a const enum `LogLevel` in a logging function.  
// 5. Create an enum with custom numeric values starting from 101.  
// 6. Write a function to check if `OrderStatus` is final (Delivered / Cancelled).  
// 7. Define computed enum values using expressions.  
// 8. Use enum inside a class to represent payment mode.  
// 9. Create a heterogeneous enum mixing number + string.  
// 10. Use enum in a switch-case returning readable text.

// TYPE ALIASES (10 Tasks)

// 11. Define a type alias `ID` as string | number.  
// 12. Create a generic type alias `ApiResponse<T>` having data, error, status.  
// 13. Make a tuple alias `Coordinates` and write a distance function.  
// 14. Use intersection types to merge Person & Contact aliases.  
// 15. Define a Product alias and create a product list array.  
// 16. Write a function that accepts `Readonly<Product>`.  
// 17. Create generic alias `Paginated<T>` with items, page, total.  
// 18. Build a `Result<T,E>` alias similar to Rust Result.  
// 19. Combine Employee & Department type aliases.  
// 20. Make utility alias `Nullable<T>` as T | null.

// INTERFACES (15 Tasks)

// 21. Create interface `User` with id, name, email.  
// 22. Extend `User` into `AdminUser` adding permissions.  
// 23. Add readonly property and try modifying it.  
// 24. Add optional field `phone?` and handle conditionally.  
// 25. Use index signature for dynamic string keys.  
// 26. Design interface `UserListResponse` for API list + pagination.  
// 27. Demonstrate interface merging using same name.  
// 28. Create interface `Shape` and implement it in Circle & Rectangle classes.  
// 29. Write interface with function signature and use it.  
// 30. Make generic interface `Dictionary<T>` using index signature.  
// 31. Create interface extending multiple other interfaces.  
// 32. Add readonly array property in interface.  
// 33. Build nested interface having `User.address.city`.  
// 34. Add optional methods start() and stop() in interface.  
// 35. Create configuration interface with strict typed options.


//TYPE LITERALS (10 Tasks)

// 36. Write a function taking literal object `{name:string, age:number}`.  
// 37. Function accepting `{x:number,y:number}` and returning distance.  
// 38. Create literal type for theme object with nested colors.  
// 39. Define inline literal type for API config.  
// 40. Add readonly modifier in literal type and test immutability.  
// 41. Build nested literal type containing array of objects.  
// 42. Create literal type for Product and write CRUD functions.  
// 43. Compare Record<string,any> vs literal type in a function.  
// 44. Build literal type for Profile including address & social links.  
// 45. Create literal type for validation config (required, maxLength, pattern).


// UNION OF TYPE LITERALS (10 Tasks)

// 46. Declare variable with union 'success' | 'error' | 'loading'.  
// 47. Function `handleResponse(status:'success'|'error')`.  
// 48. Make discriminated union for Circle | Square | Rectangle.  
// 49. Write function computing area based on shape type.  
// 50. Create union type string | number | boolean and narrow inside function.  
// 51. Use assertion on union to call specific method.  
// 52. Function taking action type 'add' | 'remove' | 'update'.  
// 53. Implement exhaustive switch with `never` type.  
// 54. Create union for different API response structures.  
// 55. Build union of object literals for payment methods.


//  CLASSES (20 Tasks)

// 56. Create class Person with name & age and greet() method.  
// 57. Extend Person into Employee adding salary & override greet().  
// 58. Use private & protected members with getters/setters.  
// 59. Add static property count tracking created objects.  
// 60. Create abstract class Shape with abstract getArea().  
// 61. Implement Circle & Rectangle extending Shape.  
// 62. Add constructor overloading using optional params.  
// 63. Implement interface Printable in a class.  
// 64. Use readonly property inside class.  
// 65. Create generic class Storage<T> managing items array.  
// 66. Implement Singleton pattern with static instance.  
// 67. Build method-chaining (builder) pattern class.  
// 68. Use private constructor + static factory method.  
// 69. Combine inheritance + interface implementation.  
// 70. Demonstrate instanceof & in operators for type checking.  
// 71. Base class Logger → extend FileLogger & ConsoleLogger.  
// 72. Show composition-based class instead of inheritance.  
// 73. Use parameter properties in constructor shorthand.  
// 74. Add static method performing utility operation.  
// 75. Create class accepting enum value in constructor and log it.


//  TUPLES (15 Tasks)

// 76. Define tuple `[string,number]` for user info.  
// 77. Use tuple destructuring inside a function parameter.  
// 78. Create tuple with optional element `[string,number?]`.  
// 79. Define labeled tuple `[x:number,y:number,z?:number]`.  
// 80. Make readonly tuple and verify immutability.  
// 81. Build array of tuples `[string,boolean][]` for user list.  
// 82. Function returning tuple `[boolean,string]` for validation.  
// 83. Swap two variables using tuple.  
// 84. Merge two tuples using spread operator.  
// 85. Create tuple for pagination info `[page,total]`.  
// 86. Label tuple elements `[id:number,name:string]`.  
// 87. Build tuple of mixed types `[string,number,boolean,Date]`.  
// 88. Function returning tuple and destructure result.  
// 89. Tuple representing database record.  
// 90. Combine multiple tuples and map through them.
