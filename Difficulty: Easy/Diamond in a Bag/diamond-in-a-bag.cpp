//{ Driver Code Starts
// Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    int minScale(int N) {
        // Calculate the logarithm of N base 3 using change of base formula: log(N) / log(3)
        float a = log2(N) / log2(3);
        
        // Convert the floating-point result to an integer
        int b = a;
        
        // Return the closest integer scale: if a is already an integer, return b, else return b + 1
        return a == b ? b : b + 1;
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
        cout<<ob.minScale(N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends