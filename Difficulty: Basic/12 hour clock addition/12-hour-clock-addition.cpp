//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
public:
    // Function to find the sum of two numbers on a clock
    int clockSum(int num1, int num2){
       int r = (num1 + num2) % 12;  // Add the numbers and take modulo 12 to simulate a clock
       return r;  // Return the result
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int num1, num2;
        cin>>num1>>num2;
        
        Solution ob;
        cout<<ob.clockSum(num1, num2)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends