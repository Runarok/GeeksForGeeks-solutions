//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to determine the precedence of an operator
    int precedence(char op) {
        if (op == '+' || op == '-') return 1; // Lowest precedence
        if (op == '*' || op == '/') return 2; // Higher precedence
        return 0;
    }

    // Function to apply the given operation on two operands
    int applyOperation(int operand1, int operand2, char op) {
        if (op == '+') return operand1 + operand2;
        if (op == '-') return operand1 - operand2;
        if (op == '*') return operand1 * operand2;
        if (op == '/') return operand1 / operand2;
        return 0;
    }

    // Function to evaluate a basic mathematical expression represented as a string
    int calculate(string expression) {
        int length = expression.size();
        
        stack<int> values;     // Stack to store numbers
        stack<char> operators; // Stack to store operators
        
        for (int i = 0; i < length; i++) {
            // Skip spaces in the expression
            if (expression[i] == ' ') continue;
            
            // If the character is a digit, parse the full number
            if (isdigit(expression[i])) {
                int number = 0;
                
                while (i < length && isdigit(expression[i])) {
                    number = number * 10 + (expression[i] - '0');
                    i++;
                }
                
                values.push(number);
                i--; // Adjust index after reading the full number
            } 
            // If the character is an operator
            else {
                // Process all operators of higher or equal precedence before pushing the current one
                while (!operators.empty() && precedence(operators.top()) >= precedence(expression[i])) {
                    int operand2 = values.top();
                    values.pop();
                    
                    int operand1 = values.top();
                    values.pop();
                    
                    char op = operators.top();
                    operators.pop();
                    
                    values.push(applyOperation(operand1, operand2, op));
                }
                // Push the current operator onto the stack
                operators.push(expression[i]);
            }
        }
        
        // Process remaining operators in the stack
        while (!operators.empty()) {
            int operand2 = values.top();
            values.pop();
            
            int operand1 = values.top();
            values.pop();
            
            char op = operators.top();
            operators.pop();
            
            values.push(applyOperation(operand1, operand2, op)); 
        }
        
        // The final result is the last remaining value in the stack
        return values.top();
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		string s;
		cin >> s;
		Solution obj;
		int ans = obj.calculate(s);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends