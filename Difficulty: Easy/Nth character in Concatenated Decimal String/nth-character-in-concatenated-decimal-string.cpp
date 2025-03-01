//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    typedef long long ll;

    // Recursive function to calculate power
    ll power(ll b, ll e) {
        if (e == 0) {
            return 1;  // Base case: any number raised to the power 0 is 1
        }
        return b * power(b, e - 1);  // Recursive case: multiply b by itself e times
    }

    // Function to find the Nth character in the sequence of concatenated numbers
    char NthCharacter(int n) {
        int i = 1;  // Start with 1-digit numbers
        int digs = 0;  // Track the number of digits in the current range
        int val = 0;  // Track the cumulative number of characters processed so far
        int next = 9 * power(10, i - 1) * i;  // Calculate the number of characters for current range

        // Loop through number ranges until we find the range that contains the nth character
        while (n > val + next) {
            digs++;  // Increment digit count
            i++;  // Move to the next number range (1-digit, 2-digit, etc.)
            val += next;  // Update the total character count
            next = 9 * power(10, i - 1) * i;  // Update number of characters for the new range
        }

        // Calculate the remaining characters after accounting for previous ranges
        int rem = n - val;

        digs++;  // Increment for the current digit length
        int nums = rem / digs;  // Calculate the number of complete numbers that fit within the remaining characters
        int chars = rem - nums * digs;  // Calculate the number of characters within the current number

        if (chars == 0) {
            // If exactly the last character of the current number is needed
            string num = to_string(nums + power(10, digs - 1) - 1);
            return num[num.size() - 1];  // Return the last digit of the number
        }

        // Find the number and return the appropriate character
        string num = to_string(nums + power(10, digs - 1));
        return num[chars - 1];  // Return the character at the specific position
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        cout<<ob.NthCharacter(N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends