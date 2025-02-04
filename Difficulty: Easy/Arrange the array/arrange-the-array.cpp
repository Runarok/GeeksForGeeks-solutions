//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
bool comp(int a, int b)
{
    // Compare two numbers based on their logarithmic values to determine their order
    long double x = a * log10(b * 1.0);  // log10 of a^b
    long double y = b * log10(a * 1.0);  // log10 of b^a
    return y <= x;  // Compare the results
}

class Solution
{
public:
    vector <int> rearrange(vector <int> &a, int n)
    {
        // Copy the input array to v
        vector <int> v(a.begin(), a.end());

        // Sort the array v using the custom comparison function
        sort(v.begin(), v.end(), comp);

        // If there are more than 2 elements, check the third largest one
        if(v.size() > 2)
        {
            // Get the iterator for the third last element
            auto it = v.end();
            it--;   // Move to second last
            it--;   // Move to third last
            it--;   // Now it points to the third last element

            // If the third largest element is greater than 1, sort the remaining elements in descending order
            if (*it > 1) 
                sort(it, v.end(), greater<int>());
        }

        return v;  // Return the rearranged vector
    }
};



//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<int> a(n);
        for(auto &j:a)
            cin>>j;
        Solution s;
        vector<int> ans=s.rearrange(a,n);
        for(auto j:ans)
            cout<<j<<" ";
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends