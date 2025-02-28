//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to calculate the sum of selections
    int Selection(vector<int>& arr) {

        // Define modulus for large number handling
        int mod = 1e9 + 7;

        // Get the size of the array
        int n = arr.size();

        // Sort the array in ascending order
        sort(arr.begin(), arr.end());

        // Initialize a variable to store the sum
        long long sum = 0;

        // Calculate the sum of selections, where each element is multiplied by its index
        for (int i = 0; i < arr.size(); i++) {
            sum = (sum + (arr[i] * i) % mod) % mod;  // Apply modulus to avoid overflow
        }

        // Return the final sum
        return sum;
    }
};


//{ Driver Code Starts.
int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        Solution obj;
        cout << obj.Selection(arr) << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends