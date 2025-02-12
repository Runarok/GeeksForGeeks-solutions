//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution
{
    public:
        vector<int> xor_play(int n)
        {
            vector<int> divisors;
            
            // Finding all divisors of 'n'
            for (int i = 1; i <= n / i; i++)
            {
                if (n % i == 0)
                {
                    if (i != n / i)
                    {
                        divisors.push_back(i);
                        divisors.push_back(n / i);
                    }
                    else
                    {
                        divisors.push_back(i);
                    }
                }
            }
            
            // Sorting the divisors in ascending order
            sort(divisors.begin(), divisors.end());
            
            // Removing 'n' itself from the divisor list
            divisors.pop_back();
            
            int xor_result = 0;
            
            // Computing XOR of all proper divisors
            for (auto divisor : divisors)
                xor_result ^= divisor;
            
            // Adding the final XOR result to the vector
            divisors.push_back(xor_result);
            
            return divisors;
        }
};

//{ Driver Code Starts.
int main(){
    int T;
    cin >> T;
    while(T--)
    {
    	int n; 
    	cin >> n;
    	Solution ob;
    	vector<int> ans = ob.xor_play(n);
    	for(int i = 0; i < ans.size() - 1; i++)
    		cout << ans[i] <<" ";
    	cout<<"\n";
    	cout<<ans[ans.size() - 1]<<"\n";
    
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends