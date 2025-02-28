//{ Driver Code Starts
// CPP program to find maximum sum
// by selecting a element from n arrays
#include<bits/stdc++.h>

using namespace std;

// To calculate maximum sum by
// selecting element from each array
int maximumSum( int n,int m, vector<vector<int>> &a);



// Driver program to test maximumSum
int main() {
    int t,n,m;
    cin>>t;
    while(t--)
    {
        cin>>n>>m;
        vector<vector<int>> arr(n, vector<int>(m,0));
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
            cin>>arr[i][j];
            
        cout << maximumSum(n,m,arr)<<endl;
    
    
cout << "~" << "\n";
}
    return 0;

}

// } Driver Code Ends

int maximumSum(int n, int m, vector<vector<int>>& a) {

    // Sort each row in the matrix in ascending order
    for (int i = 0; i < n; i++) {
        sort(a[i].begin(), a[i].end());
    }

    int sum = 0; // Variable to store the sum of selected elements
    int res = INT_MAX; // Variable to track the smallest element selected in each row

    // Loop through the rows starting from the last row
    for (int i = n - 1; i >= 0; i--) {
        bool check = false; // Flag to check if we found a valid element in the current row

        // Loop through the columns starting from the last column in the current row
        for (int j = m - 1; j >= 0; j--) {
            // If the current element is smaller than the previously selected element, select it
            if (a[i][j] < res) {
                res = a[i][j]; // Update the result with the current element
                check = true; // Set the flag to true since we found a valid element
                sum += a[i][j]; // Add the selected element to the sum
                break; // Break out of the inner loop once an element is selected
            }
        }

        // If no valid element was found in the current row, return 0
        if (!check) {
            return 0;
        }
    }

    // Return the total sum of selected elements
    return sum;
}
