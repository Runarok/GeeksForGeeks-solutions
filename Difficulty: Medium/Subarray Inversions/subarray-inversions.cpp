//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  private:
    // Helper function to create a subarray from index s to e (excluding e)
    vector<int> copyOfRange(vector<int> &arr, int start, int end) {
        vector<int> subArray;
        for (int i = start; i < end; ++i) {
            subArray.push_back(arr[i]);
        }
        return subArray;
    }

    // Merges two sorted subarrays and counts inversions
    long long mergeInversionCount(vector<int>& arr, vector<int>& left, vector<int>& right) {
        int i = 0, j = 0;
        long long inversionCount = 0;

        while (i < left.size() || j < right.size()) {
            if (i == left.size()) { // Left subarray exhausted, take from right
                arr[i + j] = right[j];
                ++j;
            } 
            else if (j == right.size()) { // Right subarray exhausted, take from left
                arr[i + j] = left[i];
                ++i;
            } 
            else if (left[i] <= right[j]) { // Maintain order
                arr[i + j] = left[i];
                ++i;
            } 
            else { // Inversion occurs
                arr[i + j] = right[j];
                inversionCount += left.size() - i; // Count inversions
                ++j;
            }
        }
        return inversionCount;
    }

    // Recursively counts inversions using merge sort
    long long subarrayInversionCount(vector<int> &arr) {
        if (arr.size() < 2) return 0;

        int mid = (arr.size() + 1) / 2;
        vector<int> left = copyOfRange(arr, 0, mid);
        vector<int> right = copyOfRange(arr, mid, arr.size());

        return subarrayInversionCount(left) + subarrayInversionCount(right) + mergeInversionCount(arr, left, right);
    }

  public:
    // Counts total inversions in all subarrays of size k
    long long inversion_count(vector<int> &arr, int k) {
        int n = arr.size();
        long long totalInversions = 0;

        for (int start = 0; start <= n - k; ++start) {
            vector<int> subArray(k);

            // Extract subarray of size k
            for (int i = start; i < start + k; ++i) {
                subArray[i - start] = arr[i];
            }

            totalInversions += subarrayInversionCount(subArray);
        }
        return totalInversions;
    }
};


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {

        string input;
        int num;
        vector<int> arr;

        getline(cin, input);
        stringstream s2(input);
        while (s2 >> num) {
            arr.push_back(num);
        }
        int k;
        cin >> k;
        cin.ignore();

        Solution ob;
        cout << ob.inversion_count(arr, k);

        cout << "\n~\n";
    }
    return 0;
}

// } Driver Code Ends