//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
  public:
    char nthFibonacciDigit(long long int n) {
        // Initialize the Fibonacci sequence as a string with the first digit "1"
        string fibSequence = "1";  
        long long first = 1, second = 1;
    
        // Generate Fibonacci numbers and append them to the sequence until length reaches n
        while (fibSequence.length() < n) {
            fibSequence += to_string(second);
            long long next = first + second;
            first = second;
            second = next;
        }
        
        // Return the nth digit in the concatenated Fibonacci sequence
        return fibSequence[n - 1];
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int n;
        cin >> n;
        Solution ob;
        cout << ob.nthFibonacciDigit(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends