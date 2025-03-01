//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to calculate the maximum value by selecting k largest elements
    int getMaxVal(vector<int> &arr, int k) {
        // Sort the array in ascending order
        sort(arr.begin(), arr.end());
        
        // Variable to store the sum of the k largest elements
        int sum = 0;
        
        // Iterate over the last k elements in the sorted array (largest elements)
        for (int i = arr.size() - 1; k > 0; k--, i--) {
            // Add each largest element to the sum
            sum += arr[i];
        }
        
        // Return the total sum of the k largest elements
        return sum;
    }
};


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
        // Creating a new vector
        vector<int> arr = inputLine();

        // taking k
        int k;
        cin >> k;
        cin.ignore();

        Solution ob;
        // calling getMaxVal() method
        // and printing the result
        cout << ob.getMaxVal(arr, k) << endl;
        cout << "~" << endl;
    }
}
// } Driver Code Ends