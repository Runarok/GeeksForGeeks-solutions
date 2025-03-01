//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//Back-end complete function Template for C++

int minDiff(vector<int> &arr, int k) {
    // Sort the array to calculate the minimum difference between the k largest and smallest elements
    sort(arr.begin(), arr.end());

    // Calculate the initial difference between the first k elements
    int minDiff = arr[k-1] - arr[0];

    // Iterate over the array to find the minimum difference for any subset of k elements
    for(int i = k; i < arr.size(); i++) {
        // Update the minimum difference
        minDiff = min(minDiff, arr[i] - arr[i-k+1]);
    }

    // Return the minimum difference found
    return minDiff;
}



//{ Driver Code Starts.

vector<int> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    int num;
    vector<int> res;
    while (ss >> num) {
        res.push_back(num);
    }
    return res;
}

int main() {

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr = inputLine();

        int m;
        cin >> m;
        cin.ignore();

        cout << minDiff(arr, m) << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends