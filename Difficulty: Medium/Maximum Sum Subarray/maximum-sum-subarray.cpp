//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;
#define ll long


// } Driver Code Ends
// User function Template for C++

int maximum_subarray(vector<int> &a) {
    // Get the size of the input array
    int n = a.size();

    // Arrays to store the maximum sum of subarrays ending at each index (pre) 
    // and starting at each index (post)
    vector<int> pre(n), post(n);

    // Variable to store the current sum of subarray while calculating prefix sum
    int cur = 0;

    // Calculate the prefix sum for each subarray ending at index i
    for(int i = 0; i < n; i++) {
        // Add the current element to the running sum
        cur += a[i];

        // Store the current sum of subarray ending at index i
        pre[i] = cur;

        // If the current sum becomes negative, reset it to 0
        if(cur < 0) cur = 0;
    }

    // Reset the current sum for calculating the suffix sum
    cur = 0;

    // Calculate the suffix sum for each subarray starting at index i
    for(int i = n - 1; i >= 0; i--) {
        // Add the current element to the running sum
        cur += a[i];

        // Store the current sum of subarray starting at index i
        post[i] = cur;

        // If the current sum becomes negative, reset it to 0
        if(cur < 0) cur = 0;
    }

    // Variable to store the final result: the maximum value found
    int ans = 0;

    // Loop through each element to find the maximum possible value
    for(int i = 0; i < n; i++) {
        // Start by considering the square of the current element a[i] as part of the result
        int t = a[i] * a[i];

        // If there are elements before the current index, add the maximum prefix sum before i
        if(i) t += max(0, pre[i - 1]);

        // If there are elements after the current index, add the maximum suffix sum after i
        if(i + 1 < n) t += max(0, post[i + 1]);

        // Update the final result with the maximum value found so far
        ans = max(ans, t);
    }

    // Return the final result: the maximum subarray value
    return ans;
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
        vector<int> v = inputLine();

        cout << maximum_subarray(v) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends