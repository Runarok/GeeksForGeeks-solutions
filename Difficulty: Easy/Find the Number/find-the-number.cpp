//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to extract lucky digits (4, 7) from n
    int F(int n) {
        int result = 0, place = 1;
        
        // Loop through the digits of n
        while (n > 0) {
            int digit = n % 10;  // Extract the last digit
            // If the digit is 4 or 7, include it in the result
            if (digit == 4 || digit == 7) {
                result = digit * place + result;  // Add the lucky digit to result
                place *= 10;  // Move to the next place value
            }
            n /= 10;  // Remove the last digit from n
        }
        
        return result;  // Return the lucky number formed
    }

    // Function to find the smallest number c > a such that F(c) = b
    int findTheNum(int a, int b) {
        int c = a + 1;  // Start with the next number after a
        
        // Keep incrementing c until F(c) equals b
        while (F(c) != b) {
            c++;
        }
        
        return c;  // Return the number c
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int a,b;
        
        cin>>a>>b;

        Solution ob;
        cout << ob.findTheNum(a,b) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends