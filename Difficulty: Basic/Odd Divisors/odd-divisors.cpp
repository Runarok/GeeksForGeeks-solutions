//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {   
public:
    int oddNumberOfDivisor(int N) {
        // Count the numbers that have an odd number of divisors.
        // Only perfect squares have an odd number of divisors.
        
        int count = 0;
        int i = 1;

        // Loop through numbers whose square is ≤ N
        while (i * i <= N) {
            count++;
            i++;
        }

        return count; // The count of perfect squares up to N
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
        cin >> N;
        Solution ob;
        cout << ob.oddNumberOfDivisor(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends