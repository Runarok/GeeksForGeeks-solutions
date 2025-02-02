//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    string largestDivisible(string n){
      
       // Sort the digits in descending order
       sort(n.begin(), n.end(), greater<int>());
       
       // Check all permutations in descending order
       do {
           // If divisible by 17 and doesn't start with '0'
           if(stoi(n) % 17 == 0 && n[0] != '0') {
                return n; // return the valid permutation
           }
       } while (prev_permutation(n.begin(), n.end()));
       
       // Return "Not Possible" if no valid permutation is found
       return "Not Possible";
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string n;
        cin >> n;
        Solution ob;
        cout<<ob.largestDivisible(n)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends