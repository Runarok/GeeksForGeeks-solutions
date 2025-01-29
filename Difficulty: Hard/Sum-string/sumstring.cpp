//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {   
public:

    // Adds two numeric strings
    string add(string num1, string num2) {
        string result = "";
        int carry = 0;
        int i = num1.length() - 1, j = num2.length() - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            int digit1 = (i >= 0) ? num1[i] - '0' : 0; 
            int digit2 = (j >= 0) ? num2[j] - '0' : 0; 
            int sum = digit1 + digit2 + carry;
            carry = sum / 10;
            result.push_back((sum % 10) + '0');
            i--; j--;
        }

        reverse(result.begin(), result.end()); 
        return result;
    }
    
    // Removes leading zeros from a numeric string
    string removeLeadingZeros(const string& s) {
        int i = 0;
        while (i < s.length() && s[i] == '0') i++;
        return s.substr(i);
    }
    
    // Counts leading zeros in a string
    int cntLeadingZeros(const string& s) {
        int i = 0;
        while (i < s.length() && s[i] == '0') i++;
        return i;
    }
    
    // Recursively checks if the string is a sum-string
    bool solve(string s, int beg, int i, int j) {
        if (i == 0 || j == 0) return false;
        string s1 = removeLeadingZeros(s.substr(beg, i));
        string s2 = removeLeadingZeros(s.substr(beg + i, j));
        string sum = add(s1, s2);
        string s3 = s.substr(beg + i + j);
        
        string trimmedS3 = removeLeadingZeros(s3);
        if (sum.length() > trimmedS3.length()) return false;

        if (trimmedS3.substr(0, sum.length()) == sum) {
            if (sum.length() == trimmedS3.length()) return s3.length() < 2 || s3[0] != '0';
            return solve(s, beg + i, j, sum.length() + cntLeadingZeros(s3));
        }
        return false;
    }
    
    // Checks if a string is a sum-string
    int isSumString(string s) {
        int n = s.length();
        for (int i = 1; i < n; i++) {
            for (int j = 1; i + j < n; j++) {
                if (solve(s, 0, i, j)) return 1;
            }
        }
        return 0;
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        string S;
        cin >> S;
        Solution ob;
        cout << ob.isSumString(S) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends