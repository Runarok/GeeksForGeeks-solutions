//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    int numberOfDays(long long N){
        // Initialize the count of operations
        int count = 0;

        // Keep performing operations until N becomes 1
        while (N > 1) {
            // If N is even, divide by 2
            if (N % 2 == 0) {
                count++;
                N /= 2;
            } 
            else {
                // Find the largest divisor of N (other than 1 and N)
                long long int divide = 1;
                for (long long int i = 3; i * i <= N; i += 2) {
                    if (N % i == 0) {
                        // If i is a divisor, check if it's larger than the current 'divide'
                        if (i > divide)
                            divide = i;
                        if ((N / i) > divide)
                            divide = N / i;
                        break; // We break after finding the largest divisor
                    }
                }
                count++;
                N = N - divide; // Reduce N by the largest divisor found
            }
        }

        // If N is reduced to 1, count the last operation
        if (N == 1) {
            count++;
        }

        // Return the number of operations performed
        return count;
    }
};



//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        long long N;
        cin >> N;
        Solution ob;
        cout << ob.numberOfDays(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends