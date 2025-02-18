//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// To find minimum sum of unique elements.
long long int minSum(int arr[], int n);




int main()
{
    int t;cin>>t;
    while(t--)
    {
        int n;cin>>n;
        int a[n];
        for(int i=0;i<n;i++)
            cin>>a[i];
        
        cout << minSum(a, n) << endl;
        
    
cout << "~" << "\n";
}
}
// } Driver Code Ends

long long int minSum(int arr[], int n) {
    // Sort the array first
    sort(arr, arr + n);

    // Initialize the sum with the first element
    long long int sum = arr[0];

    // Traverse through the array starting from the second element
    for (int i = 1; i < n; i++) {
        // If the current element is not greater than the previous element
        if (arr[i] <= arr[i - 1]) {
            // Increment the current element to make it distinct
            arr[i] = arr[i - 1] + 1;
        }
        // Add the current element (modified or not) to the sum
        sum += arr[i];
    }

    return sum;
}
