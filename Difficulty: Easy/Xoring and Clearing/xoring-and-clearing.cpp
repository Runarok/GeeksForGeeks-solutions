//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to print the elements of an array
    void printArr(int n, int arr[]) {
        // Loop through the array and print each element followed by a space
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;  // Print a newline after the array is printed
    }

    // Function to set all elements of the array to zero
    void setToZero(int n, int arr[]) {
        // Use memset to set all elements of arr to 0
        memset(arr, 0, n * sizeof(arr[0]));  // Set memory for n elements to zero
    }

    // Function to XOR each element of the array with its index
    void xor1ToN(int n, int arr[]) {
        // Loop through the array and XOR each element with its index
        for (int i = 0; i < n; i++) {
            arr[i] = arr[i] ^ i;  // XOR operation
        }
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution obj;
        obj.xor1ToN(n, arr);
        obj.printArr(n, arr);
        obj.setToZero(n, arr);
        obj.printArr(n, arr);
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends