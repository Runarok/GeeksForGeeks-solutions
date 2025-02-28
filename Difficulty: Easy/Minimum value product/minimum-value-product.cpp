//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution {
  public:
    // Function to find the minimum value using logarithms and exponentiation
    long long findMinValue(vector<long> arr) {
        // Initialize logSum to accumulate the logarithmic values of elements
        long double logSum = 0.0;

        // Loop through the array to calculate the sum of logarithms of each element
        for (long num : arr) {
            logSum += log(num); // Add the log of each number to logSum
        }

        // Get the number of elements in the array
        int n = arr.size();

        // Calculate the nth root of the sum by using the exponentiation of the average log
        long double nthRoot = exp(logSum / n);

        // Return the ceiling of nthRoot as the result
        return static_cast<long long>(ceil(nthRoot));
    }
};


//{ Driver Code Starts.

int main() {

    long long t;

    cin >> t;
    cin.ignore();
    while (t--) {
        string input;
        int num;
        vector<long> arr;

        getline(cin, input);
        stringstream s2(input);
        while (s2 >> num) {
            arr.push_back(num);
        }

        Solution ob;

        cout << ob.findMinValue(arr) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends