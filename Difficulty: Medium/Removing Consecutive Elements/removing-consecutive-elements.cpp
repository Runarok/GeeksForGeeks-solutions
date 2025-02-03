//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++


vector<int> remove_special_consecutive(vector<int>& arr, int x, int y) {
    vector<int> result;  // To store the final result after removal

    // Loop through each element in the given array
    for (int num : arr) {
        // If the number is neither x nor y, add it to the result
        if (num != x && num != y) {
            result.push_back(num);
        }
        else {
            // If the result is not empty and the last added element is not equal to the current element
            // then add the current element to the result
            if (result.empty() || result.back() != num) {
                result.push_back(num);
            }
        }
    }

    return result;  // Return the filtered array with no consecutive x and y
}

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }

        int x, y;
        cin >> x >> y;
        cin.ignore();

        vector<int> result = remove_special_consecutive(arr, x, y);
        for (auto i : result) {
            cout << i << " ";
        }
        cout << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends