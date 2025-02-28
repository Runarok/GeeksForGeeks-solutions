//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to sort the array except the element at index 'k'
    void sortExceptK(vector<int>& arr, int k) {
        // Vector to store elements except the one at index 'k'
        vector<int> v;

        // Add all elements except the one at index 'k' to the vector
        for(int i = 0; i < arr.size(); i++) {
            if(i != k) {
                v.push_back(arr[i]);
            }
        }

        // Sort the vector
        sort(v.begin(), v.end());

        // Reassign the sorted elements back to the original array
        int j = 0;
        for(int i = 0; i < arr.size(); i++) {
            if(i != k) {
                arr[i] = v[j];
                j++;
            }
        }
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore(); // Ignore the newline after t
    while (t--) {
        string input;

        getline(cin, input);
        stringstream ss(input);
        int num;
        vector<int> arr;
        while (ss >> num)
            arr.push_back(num);

        int k;
        cin >> k;
        cin.ignore();
        Solution solution;
        solution.sortExceptK(arr, k);

        for (int i : arr)
            cout << i << " ";
        cout << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends