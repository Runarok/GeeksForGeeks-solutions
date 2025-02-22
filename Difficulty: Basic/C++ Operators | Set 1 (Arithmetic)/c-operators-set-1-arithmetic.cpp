//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to perform various operations on A and B
    vector<int> cppOperators(int A, int B) {
        int max, plus, prod, diff, div, min;
        
        // Calculate the maximum and minimum of A and B
        max = (A > B) ? A : B;
        min = (A > B) ? B : A;
        
        // Initialize a vector to store the results of operations
        vector<int> arr;
        
        // Perform the operations
        plus = A + B;      // Addition
        prod = A * B;      // Multiplication
        diff = max - min;  // Difference (max - min)
        div = max / min;   // Division (max / min)
        
        // Store the results in the vector
        arr = {plus, prod, diff, div};
        
        // Return the vector with the results
        return arr;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int A, B;
        cin >> A >> B;
        Solution ob;
        vector<int> ans = ob.cppOperators(A, B);
        for (int u : ans) cout << u << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends