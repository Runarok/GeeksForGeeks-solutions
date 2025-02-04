//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution {
    public:
    // Function to find the length of the longest Geometric Progression (GP) in a given set
    int lenOfLongestGP(int set[], int n) {
        // Base cases
        if (n < 2) 
            return n; // If less than two elements, the longest GP is just the set itself
        if (n == 2) 
            return (set[1] % set[0] == 0) ? 2 : 1; // If exactly two elements, return 2 if they form a GP

        // Sort the set to facilitate checking for GP relationships
        sort(set, set + n);

        // Table to store lengths of longest GP (LLGP) with set[i] and set[j] as first two elements of GP
        int L[n][n];

        // Initialize result (A single element is always considered a GP)
        int llgp = 1;

        // Initialize values of the last column of the table
        for (int i = 0; i < n - 1; ++i) {
            if (set[n - 1] % set[i] == 0) { // Check if set[n-1] is divisible by set[i]
                L[i][n - 1] = 2;  // If divisible, we can form a GP with at least two elements
                llgp = max(llgp, 2); // Update the length of the longest GP found so far
            } else {
                L[i][n - 1] = 1;  // Otherwise, set[i] cannot form a GP with set[n-1]
            }
        }
        L[n - 1][n - 1] = 1; // A single element (last element) forms a GP of length 1

        // Start considering each element as the second element of GP
        for (int j = n - 2; j >= 1; --j) {
            int i = j - 1, k = j + 1;

            // Look for valid (i, j, k) triplets that can form a GP
            while (i >= 0 && k <= n - 1) {
                // Check if the elements i, j, and k form a valid GP or not
                if (set[i] * set[k] < set[j] * set[j]) {
                    ++k;  // If i, j, k don't form a GP, increase k
                } else if (set[i] * set[k] > set[j] * set[j]) {
                    // If i, j, k don't form a GP, check divisibility for the first two elements
                    if (set[j] % set[i] == 0) {
                        L[i][j] = 2;  // They form a GP of length 2
                    } else {
                        L[i][j] = 1;  // Otherwise, it doesn't form a valid GP
                    }
                    --i;  // Move i backwards
                } else {
                    // If i, j, k form a valid GP, extend the length of the GP found earlier
                    if (set[j] % set[i] == 0) {
                        L[i][j] = L[j][k] + 1;  // Increment length of the GP
                        llgp = max(llgp, L[i][j]);  // Update the longest GP length
                    } else {
                        L[i][j] = 1;  // If not divisible, it cannot form a GP
                    }

                    // Move i and k to check more pairs for the current j
                    --i;
                    ++k;
                }
            }

            // If the loop ends due to k being out of bounds, fill the remaining entries for column j
            while (i >= 0) {
                if (set[j] % set[i] == 0) {
                    L[i][j] = 2;  // If divisible, we can form a GP of length 2
                    llgp = max(llgp, 2);  // Update the longest GP length
                } else {
                    L[i][j] = 1;  // Otherwise, it's just a single element
                }
                --i;  // Move i backwards
            }
        }

        // Return the length of the longest GP found
        return llgp;
    }
};



//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int  N;
        cin >> N;
        int arr[N];
        for(int i=0;i<N;i++)cin>>arr[i];
        Solution ob;
        cout<<ob.lenOfLongestGP(arr, N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends