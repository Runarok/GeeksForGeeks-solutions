//{ Driver Code Starts
// Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function template for C++

class Solution {
  public:
    int BasicDataType(string s) {
        // Check if the first character is not a digit and not a decimal point, meaning it's a char.
        if (!isdigit(s[0]) && s[0] != '.') {
            return sizeof(char);
        }
        // If there is no decimal point in the string, it's an integer.
        else if (s.find('.') == string::npos) {
            return sizeof(int);
        }
        // If it has a decimal point, determine if it's a float or a double based on precision.
        else {
            return (s.length() - s.find('.') - 1) < 6 ? sizeof(float) : sizeof(double);
        }
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;

        Solution ob;
        cout << ob.BasicDataType(S) << endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends