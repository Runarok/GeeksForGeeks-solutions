//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution{
public:
    vector<long long> valid_pairs; // To store the precomputed valid numbers

    // Function to precompute all valid sums
    void precompute()
    {
        // Loop through all possible combinations of 3 distinct powers of 2
        for(int i=0; i<63; i++)
        {
            for(int j=i+1; j<63; j++)
            {
                for(int k=j+1; k<63; k++)
                {
                    valid_pairs.push_back(pow(2,i) + pow(2,j) + pow(2,k)); // Sum the powers of 2 and store
                }
            }
        }
        
        // Sort the list of valid sums
        sort(valid_pairs.begin(), valid_pairs.end());
    }

    // Function to calculate the number of valid sums within a range [l, r]
    long long solve(long long l, long long r)
    {
        // Find the lower bound index for 'l'
        int lower_idx = lower_bound(valid_pairs.begin(), valid_pairs.end(), l) - valid_pairs.begin();
        
        // Find the upper bound index for 'r'
        int upper_idx = lower_bound(valid_pairs.begin(), valid_pairs.end(), r) - valid_pairs.begin();
        
        // Adjust upper_idx if it's pointing to an element greater than 'r'
        if(valid_pairs[upper_idx] != r)
            upper_idx = upper_idx - 1;

        // Return the count of valid sums in the range [l, r]
        return upper_idx - lower_idx + 1;
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    Solution ob;
    ob.precompute();
    cin>>t;
    while(t--)
    {
        long long l,r;
        cin>>l>>r;
        cout << ob.solve(l, r) << endl; 
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends