//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to find the maximum numbers that can be summed up to k
    int maxNumbers(int n, int k, int a[]) {
        // Calculate the size of the array a
        int size = sizeof(a) / sizeof(a[0]);
        
        // Sort the array a in ascending order
        sort(a, a + size);
        
        int ans = 0;  // To store the final count of numbers
        int sum = 0;  // To track the current sum
        int count = 0;  // To track the count of numbers used
        int i = 0;  // Index for the array a
        int j = 1;  // Number to add to sum if array number is skipped
        
        // Loop while the sum is less than or equal to k
        while (sum <= k && i < n) {
            // If the current array element equals j, add it to the sum
            if (a[i] == j) {
                sum += a[i];
                ++i;  // Move to the next element
            }
            // If the current sum + j is still <= k, increment the count and add j to the sum
            else if (sum + j <= k) {
                sum += j;
                count++;
                ++j;  // Move to the next number
            }
            // If we cannot add j to the sum due to the condition, simply increment j
            else {
                sum += j;
                ++j;
            }
        }
        
        // Return the total count of numbers added
        return count;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n, k;
        cin>>n>>k;
        int a[n];
        for(int i = 0; i < n; i++)
            cin>>a[i];
        
        Solution ob;
        cout<<ob.maxNumbers(n, k, a)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends