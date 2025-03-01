//{ Driver Code Starts
// Initial Template for C++

// C++ program to merge two sorted arrays in
// constant space

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//Back-end complete function Template for C++

// Function to merge two sorted arrays in constant space
void mergeArrays(vector<int> &a, vector<int> &b) {
    // Min-heap to store the elements of array 'b'
    priority_queue<int, vector<int>, greater<int>> minHeap(b.begin(), b.end());

    // Iterate through the array 'a' and place elements from 'b' where necessary
    for (int &num : a) {
        // If the current element of 'a' is larger than the smallest element in 'b', swap them
        if (!minHeap.empty() && num > minHeap.top()) {
            int temp = minHeap.top();  // Extract the smallest element from heap
            minHeap.pop();
            minHeap.push(num);  // Push the larger element into the heap
            num = temp;  // Place the smaller element in array 'a'
        }
    }

    // Transfer the remaining elements from the heap into array 'b'
    for (int &num : b) {
        num = minHeap.top();  // Take the top element from heap
        minHeap.pop();
    }
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

// Driver Code
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr1 = inputLine();
        vector<int> arr2 = inputLine();

        mergeArrays(arr1, arr2);
        for (auto it : arr1)
            cout << it << " ";
        for (auto it : arr2)
            cout << it << " ";

        cout << endl;
        cout << "~" << endl;
    }

    return 0;
}

// } Driver Code Ends