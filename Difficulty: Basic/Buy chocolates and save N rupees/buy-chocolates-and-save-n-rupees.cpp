//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
    private:
    // Recursive function to check if we can reach exactly N using only 3 and 7.
    bool checkPossibility(int N, int value) {
        if (value < N) 
            return false; // If value goes below N, return false.
        if (value == N) 
            return true; // If value matches N, return true.

        // Recursively check by subtracting 3 or 7.
        return checkPossibility(N, value - 3) || checkPossibility(N, value - 7);
    }

    public:
    int isPossible(int N) {
        // Start checking from 100.
        return checkPossibility(N, 100);
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin >> N;
        
        Solution ob;
        cout<<ob.isPossible(N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends