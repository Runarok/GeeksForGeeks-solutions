//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    int evaluate(vector<string>& tokens) {
        // Stack to store operands
        stack<int> operandStack;

        // Iterate through each token in the expression
        for (const auto& token : tokens) {
            // If token is an operator, pop operands and evaluate
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int operand2 = operandStack.top();
                operandStack.pop();
                int operand1 = operandStack.top();
                operandStack.pop();
                
                // Perform the respective operation
                if (token == "+")  
                    operandStack.push(operand1 + operand2);
                else if (token == "-")  
                    operandStack.push(operand1 - operand2);
                else if (token == "*")  
                    operandStack.push(operand1 * operand2);
                else if (token == "/")  
                    operandStack.push(operand1 / operand2);
            } 
            // If token is a number, push it onto the stack
            else {
                operandStack.push(stoi(token));
            }
        }
        // Return the final result
        return operandStack.top();
    }
};


//{ Driver Code Starts.

int main() {
    string str;
    getline(cin, str);
    int t = stoi(str);
    while (t--) {
        getline(cin, str);
        stringstream ss(str);
        vector<string> arr;
        while (ss >> str) {
            arr.push_back(str);
        }
        Solution ob;
        cout << ob.evaluate(arr) << endl;
        cout << "~" << endl;
    }
}
// } Driver Code Ends