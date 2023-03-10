const sKey = {};
const items = new WeakMap();

class Stack {
    constructor() {
        items.set(sKey, []);
        this.items = [];
    }
    rPolNot(arr){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != "+" && arr[i] && "-" && arr[i] != "*" && arr[i] != "/"){
                Stack.push(parseInt(arr[i]));
                continue;
            } else {
                let b = parseInt(Stack.pop());
                let a = parseInt(Stack.pop());
                if(arr[i] == "+"){
                    Stack.push(a + b);
                } else if(arr[i] = "-"){
                    Stack.push(a - b);
                } else if(arr[i] = "*"){
                    Stack.push(a * b);
                } else Stack.push(parseInt(a / b));
            }
        }
        return parseInt(Stack[Stack.length - 1]);
    }
}



