//{ Driver Code Starts
# include <bits/stdc++.h>
using namespace std;
long long int findPosition(long long int k, long long int n);
int main()
{
    long long int test =0 ;
    cin>>test; 
    while(test--)
    {
        long long int n,k; 
        cin>>n; 
        cin>>k; 
        
        cout<<findPosition(n,k)<<endl; 
        
    
cout << "~" << "\n";
}
}
// } Driver Code Ends

long long findPosition(long long n, long long a) {
    // Initialize Fibonacci sequence variables
    long long prev{1}, curr{1}, index{2}, temp;
    
    // Loop until we find a Fibonacci number divisible by 'a'
    while (curr % a != 0) {
        temp = prev + curr; // Compute next Fibonacci number
        prev = curr;        // Move forward in the sequence
        curr = temp;        
        ++index;            // Increment position counter
    }
    
    // Return the position multiplied by 'n'
    return n * index;
}
