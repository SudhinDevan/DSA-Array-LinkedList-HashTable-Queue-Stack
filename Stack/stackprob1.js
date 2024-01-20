// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid. An input string is valid if: Open brackets
// must be closed by the same type of brackets. Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.



var isValid = function (s) {
    let stack = []
    let i
    for (i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i])
        }
        else if (s[i] == '}') {
            if (stack[stack.length - 1] == '{') {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }
        else if (s[i] == ')') {
            if (stack[stack.length - 1] == '(') {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }
        else if (s[i] == ']') {
            if (stack[stack.length - 1] == '[') {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
        else if (s[i] == ']') {
            if (stack[stack.length - 1] == '[') {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }
    }
    return stack.length === 0
};

let str = "(){}[]"
console.log(isValid(str))