//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to print numbers from N to 1
    void printNos(int N) {
        // Base case: if N is 0, stop the recursion
        if (N == 0) {
            return;
        }

        // Print the current number
        cout << N << " ";

        // Recursively call the function to print the next number
        printNos(N - 1);
    }
};



//{ Driver Code Starts.
/* Driver program to test printNos */
int main() {
    int T;

    // taking testcases
    cin >> T;

    while (T--) {
        int N;

        // input N
        cin >> N;
        Solution ob;
        // calling printNos() function
        ob.printNos(N);
        cout << "\n";
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends