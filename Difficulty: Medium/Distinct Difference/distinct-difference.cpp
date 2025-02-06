//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


class Array
{
public:
    template <class T>
    static void input(vector<T> &A,int n)
    {
        for (int i = 0; i < n; i++)
        {
            scanf("%d ",&A[i]);
        }
    }

    template <class T>
    static void print(vector<T> &A)
    {
        for (int i = 0; i < A.size(); i++)
        {
            cout << A[i] << " ";
        }
        cout << endl;
    }
};


// } Driver Code Ends

class Solution {
  public:
    // Function to get the distinct differences of the array A
    vector<int> getDistinctDifference(int N, vector<int> &A) {
        // Initialize the answer vector, left and right vectors to store distinct counts
        vector<int> ans;
        vector<int> left;
        vector<int> right;
        
        // Set to keep track of distinct elements for the right side
        set<int> st1;
        for(int i = N - 1; i >= 0; i--) {
            // Store the number of distinct elements on the right side for each index
            right.push_back(st1.size());
            st1.insert(A[i]);
        }

        // Set to keep track of distinct elements for the left side
        set<int> st2;
        for(int i = 0; i < N; i++) {
            // Store the number of distinct elements on the left side for each index
            left.push_back(st2.size());
            st2.insert(A[i]);
        }

        // Calculate the distinct difference for each index and store in the result
        for(int i = 0; i < N; i++) {
            ans.push_back(left[i] - right[N - 1 - i]);
        }

        return ans;  // Return the final answer vector
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int N;
        scanf("%d",&N);
        
        
        vector<int> A(N);
        Array::input(A,N);
        
        Solution obj;
        vector<int> res = obj.getDistinctDifference(N, A);
        
        Array::print(res);
        
    
cout << "~" << "\n";
}
}

// } Driver Code Ends