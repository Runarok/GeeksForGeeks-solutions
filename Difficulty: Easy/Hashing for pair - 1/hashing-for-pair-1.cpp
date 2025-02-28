//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to check if there is a pair with the given sum in the array.
int sumExists(vector<int>& arr, int sum) {
    // Get the size of the array
    int n = arr.size();
    
    // Iterate over the array using two nested loops
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            // Calculate the sum of the current pair
            int curr = arr[i] + arr[j];
            
            // If the sum equals the target sum, return 1 (pair found)
            if (curr == sum) {
                return 1;
            }
        }
    }
    
    // Return 0 if no pair with the given sum is found
    return 0;
}



//{ Driver Code Starts.

int main() {

    int testcases;
    cin >> testcases;
    cin.ignore();
    while (testcases--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        int num;
        vector<int> arr;
        while (ss >> num) {
            arr.push_back(num);
        }
        string line2;
        getline(cin, line2);
        stringstream ss1(line2);
        vector<int> arr2;
        while (ss1 >> num) {
            arr2.push_back(num);
        }

        int sum = arr2[0];

        cout << sumExists(arr, sum) << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends