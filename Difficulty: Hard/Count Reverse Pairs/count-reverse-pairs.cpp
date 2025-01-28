//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
#include <iostream>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Merges two sorted halves of the array into a single sorted sequence
    void merge(vector<int> &arr, int low, int mid, int high) {
        vector<int> temp; // Temporary array to store merged elements
        int left = low;   // Starting index of the left half of the array
        int right = mid + 1; // Starting index of the right half of the array

        // Merge the two halves into the temporary array in sorted order
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push_back(arr[left]);
                left++;
            } else {
                temp.push_back(arr[right]);
                right++;
            }
        }

        // Add remaining elements from the left half, if any
        while (left <= mid) {
            temp.push_back(arr[left]);
            left++;
        }

        // Add remaining elements from the right half, if any
        while (right <= high) {
            temp.push_back(arr[right]);
            right++;
        }

        // Copy elements from the temporary array back to the original array
        for (int i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    // Counts reverse pairs in the range [low, high]
    int countPairs(vector<int> &arr, int low, int mid, int high) {
        int right = mid + 1;
        int cnt = 0;

        // Count pairs where arr[i] > 2 * arr[j]
        for (int i = low; i <= mid; i++) {
            while (right <= high && (long long)arr[i] > (long long)2 * arr[right]) {
                right++;
            }
            cnt += (right - (mid + 1));
        }

        return cnt;
    }

    // Implements merge sort while counting reverse pairs
    int mergeSort(vector<int> &arr, int low, int high) {
        int cnt = 0;

        // Base case: If there is only one element, return 0
        if (low >= high) return cnt;

        int mid = (low + high) / 2;

        // Count reverse pairs in the left and right halves
        cnt += mergeSort(arr, low, mid);
        cnt += mergeSort(arr, mid + 1, high);

        // Count reverse pairs across the two halves
        cnt += countPairs(arr, low, mid, high);

        // Merge the two halves into a sorted sequence
        merge(arr, low, mid, high);

        return cnt;
    }

    // Counts the total number of reverse pairs in the array
    int countRevPairs(int n, vector<int> arr) {
        return mergeSort(arr, 0, n - 1);
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> arr;

        for (int i = 0; i < n; ++i) {
            int x;
            cin >> x;
            arr.push_back(x);
        }

        Solution obj;
        cout << obj.countRevPairs(n, arr) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends