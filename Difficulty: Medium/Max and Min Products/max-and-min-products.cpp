//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    vector<long long> maxMinProduct(vector<int>& arr) {
        int n = arr.size();
        
        // Edge case: if the array is empty, return {0, 0}
        if (n == 0) return {0, 0};  
        
        // Sort the array to handle negative numbers properly
        sort(arr.begin(), arr.end());  
        
        // Initialize variables to calculate the maximum and minimum products
        int maxProduct = 1;
        int minProduct = 1;
        int negativeCount = 0, zeroCount = 0;
        int largestNegative = INT_MIN;  // Variable to store the largest negative number
        bool hasPositive = false;  // Flag to check if there are any positive numbers
        
        // Loop through the array to calculate the initial products
        for (int num : arr) {
            if (num > 0) {
                maxProduct *= num;  // Multiply positive numbers to maxProduct
                minProduct *= num;  // Multiply positive numbers to minProduct
                hasPositive = true;  // Mark that there's at least one positive number
            } 
            else if (num < 0) {
                negativeCount++;  // Count negative numbers
                maxProduct *= num;  // Multiply negative numbers to maxProduct
                minProduct *= num;  // Multiply negative numbers to minProduct
                largestNegative = max(largestNegative, num);  // Update largest negative number
            } 
            else {
                zeroCount++;  // Count zeros in the array
            }
        }
        
        // Edge case: if the array consists entirely of zeros, return {0, 0}
        if (zeroCount == n) return {0, 0};
        
        // Handle max product calculation
        if (negativeCount % 2 != 0) {
            maxProduct /= largestNegative;  // If there is an odd count of negative numbers, remove the least negative
        }
        
        // Special Case: If there are zeros and no positive numbers, and not enough negatives to form a product
        if (zeroCount > 0 && !hasPositive && negativeCount < 2) {
            maxProduct = 0;  // Set maxProduct to zero because no positive product is possible
        }
        
        // Handle min product calculation
        if (negativeCount == 0) {
            minProduct = *min_element(arr.begin(), arr.end());  // If there are no negative numbers, set minProduct to the smallest number
        } 
        else if (negativeCount % 2 == 0) {
            minProduct /= largestNegative;  // If there is an even count of negative numbers, exclude the largest negative
        }
        
        // Return the max and min products as a vector
        return {maxProduct, minProduct};
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore(); // To consume any newline character left in the input buffer
    Solution obj;
    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        vector<long long> result = obj.maxMinProduct(arr);
        cout << result[0] << " " << result[1] << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends