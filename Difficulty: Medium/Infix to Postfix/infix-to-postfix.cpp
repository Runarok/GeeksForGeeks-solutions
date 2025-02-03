//{ Driver Code Starts
// C++ implementation to convert infix expression to postfix
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
public:

    // Function to return precedence of operators
    int prec(char c) {
        switch (c) {
            case '^': return 3;  // Highest precedence for '^'
            case '/': 
            case '*': return 2;  // Operators with equal precedence
            case '+': 
            case '-': return 1;  // Lowest precedence
            default: return -1;  // Invalid operator
        }
    }

    // Function to convert infix expression to postfix expression
    string infixToPostfix(string infix) {
        stack<char> s;      // Stack to store operators
        string postfix;     // String to build postfix expression
        
        // Traverse the infix expression
        for (char c : infix) {
            // If character is an operand (alphanumeric), add to postfix string
            if (isalnum(c)) {
                postfix += c;
            }
            // If '(' encountered, push to stack
            else if (c == '(') {
                s.push(c);
            }
            // If ')' encountered, pop from stack until '(' is encountered
            else if (c == ')') {
                while (!s.empty() && s.top() != '(') {
                    postfix += s.top();
                    s.pop();
                }
                if (!s.empty()) s.pop();  // Remove '(' from stack
            }
            // If operator encountered, pop operators with higher or equal precedence
            else {
                while (!s.empty() && prec(s.top()) >= prec(c)) {
                    postfix += s.top();
                    s.pop();
                }
                s.push(c);  // Push the current operator onto the stack
            }
        }

        // Pop any remaining operators from the stack
        while (!s.empty()) {
            postfix += s.top();
            s.pop();
        }

        return postfix;  // Return the postfix expression
    }
};
//{ Driver Code Starts.
//  Driver program to test above functions
int main() {
    int t;
    cin >> t;
    cin.ignore(INT_MAX, '\n');
    while (t--) {
        string exp;
        cin >> exp;
        Solution ob;
        cout << ob.infixToPostfix(exp) << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends