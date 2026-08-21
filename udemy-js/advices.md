WHENEVER YOU ENCOUNTER A PROBLEM:

- Stay calm and slow down, don’t just jump at a problem without a plan
- Take a very logical and rational approach (programming is just logic, in the
  end…)

- Use 4-step framework to solve any problem:
  1. Make sure you 100% understand the problem. Ask the right questions to get a
     clear picture of the problem.
  2. Divide and conquer: Break a big problem into smaller sub-problems.
  3. Don't be afraid to do as much research as you have to.
  4. For bigger problems, write pseudo-code before writing the actual code.

---

1. Make sure you 100% understand the problem. Ask the right questions to get a
   clear picture of the problem

EXAMPLE:

💬 Project Manager: “We need a function that reverses whatever we pass into it”

👉 What does “whatever” even mean in this context? What should be reversed?
Answer: Only strings, numbers, and arrays make sense to reverse...

👉 What to do if something else is passed in?

👉 What should be returned? Should it always be a string, or should the type be
the same as passed in?

👉 How to recognize whether the argument is a number, a string, or an array?

👉 How to reverse a number, a string, and an array.

---

2. Divide and conquer: Break a big problem into smaller sub-problems.

EXAMPLE:

💬 Project Manager: “We need a function that reverses whatever we pass into it”.

SUB-PROBLEMS:

👉 Check if argument is a number, a string, or an array

👉 Implement reversing a number

👉 Implement reversing a string

👉 Implement reversing an array

👉 Return reversed value Looks like a task list that we need to implement

---

3.  Don't be afraid to do as much research as you have to

EXAMPLE:

💬 Project Manager: “We need a function that reverses whatever we pass into it”

👉 How to check if a value is a number in JavaScript?

👉 How to check if a value is a string in JavaScript?

👉 How to check if a value is an array in JavaScript?

👉 How to reverse a number in JavaScript?

👉 How toreverse a string in JavaScript?

👉 How to reverse an array in JavaScript

---

4. For bigger problems, write pseudo-code before writing the actual code.

EXAMPLE: 💬 Project Manager: “We need a function that reverses whatever we pass
into it”

    function reverse(value)

      if value type !string && !number && !array
      return value

      if value type == string
      reverse string

      if value type == number
      reverse number

      if value type == array
      reverse array

      return reversed value

---
