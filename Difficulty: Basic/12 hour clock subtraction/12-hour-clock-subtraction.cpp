//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to subtract two clock numbers and return the result within the range of 0 to 11 (mod 12)
    int subClock(int num1, int num2) {
        // Adjust the numbers to the range of 0 to 11 (clock values)
        num1 = num1 % 12;
        num2 = num2 % 12;

        // Perform the subtraction and adjust the result to be within the valid clock range (0 to 11)
        return (num1 - num2 + 12) % 12;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int num1,num2;
        
        cin>>num1>>num2;

        Solution ob;
        cout << ob.subClock(num1,num2) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends