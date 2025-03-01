//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    long long int nonFibonacci(int N) {
        // Handle the edge case when N is 0 (invalid input)
        if (N == 0) return -1;
        
        // Initialize the first two Fibonacci numbers
        int a = 0, b = 1;
        
        // Variable to count non-Fibonacci numbers
        int count = 0;
        
        // Loop until we find the Nth non-Fibonacci number
        while (count < N) {
            // Calculate the next Fibonacci number
            int nextFib = a + b;
            
            // Check the non-Fibonacci numbers between the previous Fibonacci number (b)
            // and the current Fibonacci number (nextFib)
            for (int i = b + 1; i < nextFib; i++) {
                count++;
                // If we've reached the Nth non-Fibonacci number, return it
                if (count == N) {
                    return i;
                }
            }
            
            // Update the previous two Fibonacci numbers
            a = b;
            b = nextFib;
        }
        
        // If N is not valid or an unexpected case occurs, return -1
        return -1;
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
        cout<<ob.nonFibonacci(N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends