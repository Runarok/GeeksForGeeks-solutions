//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution
{
    public:
        // Function to maximize the minimum height after applying operations
        long long int maximizeMinHeight(int n, int k, int w, vector <int> &a)
        {
            // Vector to store the difference between consecutive heights
            vector<int> diff(n);
            diff[0] = a[0];  // Initialize the first height in the difference array
            int minHeight = a[0];  // Set the initial minimum height as the first element
            for (int i = 1; i < n; i++) {
                // Calculate the difference between consecutive heights
                diff[i] = a[i] - a[i-1];
                minHeight = min(a[i], minHeight);  // Update the minimum height
            }
            
            // Set the maximum possible height as the initial minHeight plus k
            int maxHeight = minHeight + k;
            
            long long ans;
            // Use binary search to find the maximum minimum height
            while (minHeight <= maxHeight) {
                int tryFor = (minHeight + maxHeight) / 2;  // Calculate middle point
                if (check(diff, k, w, tryFor)) {  // Check if it's possible to achieve this height
                    ans = tryFor;  // Update the result with the valid height
                    minHeight = tryFor + 1;  // Try for a higher minimum height
                }
                else
                    maxHeight = tryFor - 1;  // If not possible, try for a lower height
            }
            return ans;  // Return the best achievable minimum height
        }

        // Function to check if a given height can be achieved with the operations
        bool check(vector<int> diff, int k, int w, int tryFor)
        {
            int prev = 0;
            for (int i = 0; i < diff.size(); i++) {
                diff[i] += prev;  // Accumulate the previous difference
                prev = diff[i];
                if (diff[i] >= tryFor)
                    continue;  // If current height is already sufficient, no changes needed
                k -= (tryFor - diff[i]);  // Deduct the required increase from k
                if (k < 0)  // If not enough operations are left, return false
                    return 0;
                // If there are remaining elements after the current index, adjust their differences
                if (i + w < diff.size())
                    diff[i + w] -= (tryFor - diff[i]);
                prev = tryFor;  // Update previous to the target height
            }
            return 1;  // Return true if the height can be achieved
        }
};



//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,k,w;
        cin>>n>>k>>w;
        vector <int> a(n);
        for(auto &j:a)
            cin>>j;
        Solution s;
        cout<<s.maximizeMinHeight(n,k,w,a)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends