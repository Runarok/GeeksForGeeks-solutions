//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to take an integer input and return it
    int cppIntType() {
        int integerInput;
        cin >> integerInput;
        return integerInput;
    }
    
    // Function to take a character input and return it
    char cppCharType() {
        char charInput;
        cin >> charInput;
        return charInput;
    }
    
    // Function to take a float input and return it
    float cppFloatType() {
        float floatInput;
        cin >> floatInput;
        return floatInput;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        Solution ob;
        cout << ob.cppIntType() << endl;
        cout << ob.cppCharType() << endl;
        cout << ob.cppFloatType() << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends