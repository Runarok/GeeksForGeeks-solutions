//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    int fib(int N){
        // Base cases for Fibonacci
        if (N == 0) return 0;
        if (N == 1) return 1;
        
        int a = 0, b = 1, c;
        for (int i = 2; i <= N; i++) {
            c = (a + b) % 10;  // Keep only the last digit
            a = b;
            b = c;
        }
        return b;  // Return the last digit of the N-th Fibonacci number
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        Solution ob;
        cout << ob.fib(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
}
// } Driver Code Ends