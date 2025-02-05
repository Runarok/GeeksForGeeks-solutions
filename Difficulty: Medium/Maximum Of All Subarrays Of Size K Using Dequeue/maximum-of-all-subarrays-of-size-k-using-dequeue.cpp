//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

vector<int> maxOfSubarrays(vector<int>& arr, int k) {
    // Result vector to store the maximum values for each subarray
    vector<int> res;
    
    // Deque to store indices of elements in the current window
    deque<int> dq;
    
    // Traverse through the array
    for(int i = 0; i < arr.size(); i++){
        // Remove indices of elements that are out of the current window
        if(!dq.empty() && dq.front() == i - k){
            dq.pop_front();
        }
        
        // Remove indices of all elements smaller than the current element
        // because they will never be the maximum in the current window
        while(!dq.empty() && arr[dq.back()] <= arr[i]){
            dq.pop_back();
        }
        
        // Add the current element's index to the deque
        dq.push_back(i);
        
        // Once we have processed at least 'k' elements, 
        // add the maximum element of the current window to the result
        if(i >= k - 1){
            res.push_back(arr[dq.front()]);
        }
    }
    
    // Return the result vector with the maximum values for each subarray
    return res;
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
        string line2;
        getline(cin, line2);
        stringstream ss1(line2);
        vector<int> arr2;
        while (ss1 >> num) {
            arr2.push_back(num);
        }
        int k = (arr2[0]);

        vector<int> res = maxOfSubarrays(arr, k);
        for (auto it : res)
            cout << it << " ";
        cout << endl;
        cout << "~\n";
    }

    return 0;
}
// } Driver Code Ends