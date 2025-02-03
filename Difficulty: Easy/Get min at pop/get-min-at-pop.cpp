//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

// Function to push all the elements into the stack.
stack<int> push(vector<int>& arr) {
    // Create a stack and push all elements from the array into it
    stack<int> s;
    for(int num : arr) {
        s.push(num);
    }
    return s;
}

// Function to print the minimum value in stack each time while popping.
void getMinAtPop(stack<int>& s) {
    // Create a temporary vector to store all elements from the stack
    vector<int> temp;
    while(!s.empty()) {
        temp.push_back(s.top());
        s.pop();
    }
    
    // Push the elements back into the stack in the original order
    for(int i = temp.size() - 1; i >= 0; i--) {
        s.push(temp[i]);
    }
    
    // Now process each pop operation
    while(!s.empty()) {
        // Find the minimum in the current stack by checking all elements
        stack<int> tempStack = s;
        int minVal = tempStack.top();
        
        while(!tempStack.empty()) {
            minVal = min(minVal, tempStack.top());
            tempStack.pop();
        }
        
        // Output the minimum value for this pop operation
        cout << minVal << " ";
        s.pop();  // Pop the element from the stack
    }
}


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        stack<int> s = push(arr);
        getMinAtPop(s);

        cout << endl;
    }
    return 0;
}

// } Driver Code Ends