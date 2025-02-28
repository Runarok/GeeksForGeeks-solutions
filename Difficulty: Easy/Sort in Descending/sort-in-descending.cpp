//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;
        int arr[n];
        int integer_value;
        for (int i = 0; i < n; i++) {
            cin >> integer_value;
            arr[i] = integer_value;
        }

        
// } Driver Code Ends

// User function Template for C++

// Sorting the array in descending order using a lambda expression
sort(arr, arr + n, [] (int x, int y) { 
    return x > y;  // This ensures that the elements are sorted in descending order
});



//{ Driver Code Starts.

        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
        cout << "~\n";
    }
}
// } Driver Code Ends