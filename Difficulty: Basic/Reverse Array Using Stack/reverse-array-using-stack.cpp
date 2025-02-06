//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


// User function Template for C++

// Complete this function
class Solution {
  public:
    // Function to reverse the array
    void reverseArray(vector<int>& arr) {

        // Stack to hold the array elements temporarily
        stack<int> tempStack;
        
        // Push all elements of the array into the stack
        for(int index = 0; index < arr.size(); index++){
            tempStack.push(arr[index]);
        }
        
        // Variable to track the index in the original array
        int arrIndex = 0;

        // Pop elements from the stack and place them back into the array in reverse order
        while(!tempStack.empty()){
            arr[arrIndex] = tempStack.top();  // Assign the top of the stack to the array
            tempStack.pop();  // Remove the top element from the stack
            arrIndex++;  // Move to the next index in the array
        }

        // The array is now reversed in place
    }
};


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
        Solution obj;
        obj.reverseArray(arr);

        for (int i = 0; i < arr.size(); i++) {
            cout << arr[i] << " ";
        }

        cout << endl;
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends