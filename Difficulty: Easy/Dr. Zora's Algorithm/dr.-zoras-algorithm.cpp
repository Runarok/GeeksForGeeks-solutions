//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to check if the given year is "Destructive Year" or "Non-Destructive Year"
    string isDestructive(int year) {
        // Calculate the sum of the digits of the year
        int sum = year / 1000 % 10 + year / 100 % 10 + year / 10 % 10 + year % 10;
        
        // Extract the last two digits of the year
        int num = year / 10 % 10 * 10 + year % 10;
        
        // Check if the sum of digits is odd and if the last two digits are divisible by 6
        if (sum % 2 == 1 && num % 6 == 0)
            return "Destructive Year";  // Return "Destructive Year" if both conditions are met
        
        else
            return "Non-Destructive Year";  // Otherwise, return "Non-Destructive Year"
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int year;
        cin >> year;
        Solution ob;
        cout<<ob.isDestructive(year)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends