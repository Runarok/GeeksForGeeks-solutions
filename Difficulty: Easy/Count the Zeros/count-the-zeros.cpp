//{ Driver Code Starts
// Initial template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function template for C++

class Solution {
  public:
    // Function to count the number of zeroes in the array
    int countZeroes(vector<int> &arr) {
        int zeroCount = 0;
        
        // Iterate through each element in the array
        for (int element : arr) {
            if (element == 0) {
                zeroCount++;
            }
        }
        
        // Return the final count of zeroes
        return zeroCount;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input); // Read the entire line for the array elements
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }

        Solution ob;
        cout << ob.countZeroes(arr) << endl;
        cout << "~" << endl;
    }

    return 0;
}

// } Driver Code Ends