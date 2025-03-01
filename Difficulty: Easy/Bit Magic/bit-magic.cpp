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
    // Function to calculate the minimum number of bit flips required
    // to make the given array symmetric
    int bitMagic(int n, vector<int> &arr) {
        int mismatchCount = 0; // Variable to count the number of mismatches
        
        // Loop through the first half of the array to compare with the second half
        for(int i = 0; i < n / 2; i++) {
            // If the elements at the mirrored positions are different
            if(arr[i] != arr[n - 1 - i]) {
                mismatchCount += 1; // Increment mismatch count
            }
        }
        
        // If the number of mismatches is even, return half the count
        if(mismatchCount % 2 == 0) {
            return mismatchCount >> 1; // Right shift by 1 to divide by 2
        }
        
        // If the number of mismatches is odd, return half the count plus 1
        return (mismatchCount >> 1) + 1; // Right shift by 1 and add 1
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int n;
        scanf("%d",&n);
        
        
        vector<int> arr(n);
        Array::input(arr,n);
        
        Solution obj;
        int res = obj.bitMagic(n, arr);
        
        cout<<res<<endl;
        
    
cout << "~" << "\n";
}
}

// } Driver Code Ends