//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Geeks {
  public:
    // Function to insert element to stack
    void insert(stack<int>& st, int x) {
        // Push the element onto the stack
        st.push(x);
    }

    // Function to pop element from stack
    void remove(stack<int>& st) {
        // Pop the top element from the stack if it's not empty
        if (!st.empty()) {
            st.pop();
        }
    }

    // Function to print the top element of the stack
    void headOf_Stack(stack<int>& st) {
        // Check if the stack is not empty, then print the top element
        if (!st.empty()) {
            cout << st.top() << endl;
        }
    }

    // Function to find an element in stack, print Yes if found, else print No
    void find(stack<int>& st, int val) {
        // Create a temporary stack to avoid modifying the original stack
        stack<int> temp = st;

        // Traverse the temporary stack to search for the value
        while (!temp.empty()) {
            if (temp.top() == val) {
                // If the value is found, print "Yes" and return
                cout << "Yes" << endl;
                return;
            }
            temp.pop();
        }
        // If the value is not found, print "No"
        cout << "No" << endl;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;

    while (t--) {
        // Declaring stack of integers
        stack<int> st;

        int q;
        cin >> q;

        // Working with queries
        while (q--) {
            char ch;
            cin >> ch;
            Geeks obj;
            if (ch == 'i') {
                int x;
                cin >> x;
                obj.insert(st, x);
            }

            if (ch == 'r') {
                obj.remove(st);
            }

            if (ch == 'h') {
                obj.headOf_Stack(st);
            }
            if (ch == 'f') {
                int x;
                cin >> x;
                obj.find(st, x);
            }
        }
    }
}
// } Driver Code Ends