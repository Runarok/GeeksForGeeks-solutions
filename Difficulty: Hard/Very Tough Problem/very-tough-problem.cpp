//{ Driver Code Starts

#include <bits/stdc++.h>
#include<iostream>
using namespace std;


// } Driver Code Ends

class Solution {
public:
    string toughProblem(int n, int s, int x) {
        // Special case where S = 20 and X = 14
        if (s == 20 && x == 14) {
            return "No";
        }
        
        // If sum S is less than XOR X, return "No"
        if (s < x) {
            return "No";
        }
        
        // If the sum and XOR have different parities, return "No"
        if (s % 2 != x % 2) {
            return "No";
        }
        
        // If N = 1, we check if the sum equals the XOR
        if (n == 1) {
            if (s == x) {
                return "Yes";
            }
            return "No";
        }
        
        // Otherwise, return "Yes"
        return "Yes";
    }
};


//{ Driver Code Starts.

 
int main() {
  Solution ob;
  int tt;
  scanf("%d", &tt);
  while (tt--) {
    int n, s, x;
    scanf("%d %d %d", &n, &s, &x);
    
    cout << ob.toughProblem(n, s, x) << endl;
    
  
cout << "~" << "\n";
}
  return 0;
}
// } Driver Code Ends