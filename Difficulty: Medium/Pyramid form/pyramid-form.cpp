//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    int pyramidForm(int arr[], int n) {
        // Arrays to store maximum possible height at each position from left and right
        int left[n], right[n];

        // Initialize the first element in the left array
        left[0] = min(arr[0], 1);

        // Compute the max height for each position from the left
        for (int i = 1; i < n; ++i)
            left[i] = min(arr[i], min(left[i - 1] + 1, i + 1));

        // Initialize the last element in the right array
        right[n - 1] = min(arr[n - 1], 1);

        // Compute the max height for each position from the right
        for (int i = n - 2; i >= 0; --i)
            right[i] = min(arr[i], min(right[i + 1] + 1, n - i));

        // Array to store the minimum of left and right values at each position
        int minHeight[n];
        for (int i = 0; i < n; ++i)
            minHeight[i] = min(right[i], left[i]);

        // Find the index with the maximum possible height
        int maxIndex = 0;
        for (int i = 0; i < n; ++i)
            if (minHeight[i] > minHeight[maxIndex])
                maxIndex = i;

        // Calculate the cost to transform the array into the pyramid shape
        int cost = 0;
        int height = minHeight[maxIndex];

        // Compute the cost for the left half of the pyramid
        for (int x = maxIndex; x >= 0; --x) {
            cost += arr[x] - height;
            if (height > 0)
                --height;
        }

        // Compute the cost for the right half of the pyramid
        height = minHeight[maxIndex] - 1;
        for (int x = maxIndex + 1; x < n; ++x) {
            cost += arr[x] - height;
            if (height > 0)
                --height;
        }

        return cost;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;
        int a[N];
        
        for(int i=0; i<N; i++)
            cin>>a[i];

        Solution ob;
        cout << ob.pyramidForm(a,N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends