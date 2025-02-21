//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
  public:
    // Function to count the number of digits in the product of two numbers a and b
    long long int countDigits(long long int a, long long int b) { 
        // Calculate the absolute value of the product of a and b
        long long int result = abs(a) * abs(b);
        
        // Initialize a variable to count the number of digits
        long long int digitCount = 0;
        
        // Loop to count the digits in the result
        while (result > 0) {
            digitCount++;  // Increment the digit count for each division
            result = result / 10;  // Remove the last digit by dividing by 10
        }
        
        // Return the total count of digits
        return digitCount;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int a,b;
        cin >> a >> b;
        Solution ob;
        cout << ob.countDigits(a, b) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends