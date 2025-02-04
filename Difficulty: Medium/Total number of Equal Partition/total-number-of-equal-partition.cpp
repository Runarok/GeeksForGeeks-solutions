//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    long long partitions(int l, int r) {
        long long count = 0;  // To keep track of the total count of partitions
        
        // Loop to iterate through possible divisors from 2 to sqrt(r)
        for (int i = 2; i <= sqrt(r); i++) {
            // For each divisor i, iterate through multiples of i starting from 2*i
            for (int j = 2 * i; j <= r; j += i) {
                // Only consider multiples within the range [l, r]
                if (j >= l) {
                    // If the quotient (j / i) exceeds sqrt(r), add the divisor 'i' to the count
                    if (j / i > sqrt(r)) {
                        count += i;
                    }
                    // Add the quotient (j / i) to the count as it is also part of the partition
                    count += (j / i);
                }
            }
        }
        
        // Consider the remaining numbers in the range [l, r]
        for (int i = max(2, l); i <= r; i++) {
            // Add the value (i + 1) for every remaining number in the range
            count += (i + 1);
        }
        
        // If the lower bound 'l' is 1, include the number 1 in the count
        if (l == 1) {
            count++;
        }
        
        // Return the total count of partitions
        return count;
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int l, r;
        cin>>l>>r;
        
        Solution ob;
        cout<<ob.partitions(l, r)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends