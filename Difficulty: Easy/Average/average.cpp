//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

int posAverage(int arr[], int size) {
    // Initialize sum and count variables
    int sum = 0;
    int count = 0;

    // Iterate through the array
    for(int i = 0; i < size; i++) {
        // Check if the element is positive or zero
        if(arr[i] >= 0) {
            count++;        // Increment the count of positive numbers
            sum += arr[i];  // Add the positive number to the sum
        }
    }

    // If count is zero, it means there are no positive numbers, avoid division by zero
    if(count == 0) return 0;

    // Return the average of positive numbers
    return sum / count;
}



//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;
        int numbers[n];
        for (int i = 0; i < n; i++) {
            cin >> numbers[i];
        }
        int avg = posAverage(numbers, n);
        cout << avg << endl;

        cout << "~"
             << "\n";
    }

    return 0;
}
// } Driver Code Ends