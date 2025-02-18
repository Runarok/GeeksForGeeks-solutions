//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
    public:
    // Function to calculate the sum of all factors of N
    long long factorSum(int N)
    {
        // Variable to store the sum of factors
        long long sum = 0;

        // Loop from 1 to sqrt(N) to find all factors
        for(int i = 1; i * i <= N; i++) {
            // If i is a factor of N
            if(N % i == 0) {
                // Add i to the sum
                sum += i;

                // If i is not the same as N / i, add N / i to the sum as well
                if(i != (N / i)) {
                    sum += (N / i);
                }
            }
        }

        // Return the sum of factors
        return sum;
    }
};


//{ Driver Code Starts.
int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin >> N;

        Solution ob;
       	cout <<  ob.factorSum(N) << "\n";
   
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends