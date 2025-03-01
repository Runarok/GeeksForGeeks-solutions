//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Geeks {
  public:
  
  // Function to print elements greater than or equal to 'k'
  static void greaterKSorted(vector<int>& arr, int k) {
      set<int> s;  // Set to store unique elements greater than or equal to k
      int flag = 0;  // Flag to check if there are any elements >= k
      
      // Loop through the array and insert elements greater than or equal to k into the set
      for (int i = 0; i < arr.size(); i++) {
          if (arr[i] >= k) {
              s.insert(arr[i]);
              flag = 1;  // Set flag to 1 if any element >= k is found
          }
      }
      
      // If no element >= k is found, print -1
      if (flag == 0) {
          cout << "-1";
          return;
      }
      
      // Print all the elements in the set (which are sorted by default in a set)
      for (auto i : s)
          cout << i << " ";
  }

  // Function to print elements smaller than 'k'
  static void smallerKSorted(vector<int>& arr, int k) {
      set<int> s;  // Set to store unique elements smaller than k
      int flag = 0;  // Flag to check if there are any elements < k
      
      // Loop through the array and insert elements smaller than k into the set
      for (int i = 0; i < arr.size(); i++) {
          if (arr[i] < k) {
              s.insert(arr[i]);
              flag = 1;  // Set flag to 1 if any element < k is found
          }
      }
      
      // If no element < k is found, print -1
      if (flag == 0) {
          cout << "-1";
          return;
      }
      
      // Print all the elements in the set (which are sorted by default in a set)
      for (auto i : s)
          cout << i << " ";
  }
};



//{ Driver Code Starts.
int main() {
    
    int t; 
    cin >> t;
    while(t--) {
        int n, k;
        cin >> n;
        cin >> k;
        
        vector<int>arr;
        for(int i = 0; i < n; i++) {
            int x;
            cin >> x;
            arr.push_back(x);
        }
        Geeks obj;
        obj.greaterKSorted(arr, k);
        cout<<endl;
        obj.smallerKSorted(arr, k);
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends