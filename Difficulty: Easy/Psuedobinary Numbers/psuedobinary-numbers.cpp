//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution
{
public:
   vector<int> minimumPseudoBinary(int N)
    {
        vector <int> ans;  // Result vector to store pseudo-binary numbers
        while (N)  // Continue until N becomes 0
        {
            int tmp = N;  // Temporary variable to store the current N
            int sum = 0;  // To store the current pseudo-binary number
            int val = 1;  // Initial place value (1, 10, 100, etc.)
            
            // Extract each digit of N starting from the least significant digit
            while (tmp)
            {
                if (tmp % 10 != 0)  // If the digit is non-zero
                    sum += val;  // Add the place value to the sum
                
                val *= 10;  // Update the place value (1 -> 10 -> 100 ...)
                tmp /= 10;  // Move to the next digit
            }
            
            ans.push_back(sum);  // Add the current pseudo-binary number to the result vector
            N -= sum;  // Subtract the pseudo-binary number from N to reduce it
        }
        
        return ans;  // Return the sequence of pseudo-binary numbers
    }  
};



//{ Driver Code Starts.
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin>>N;
        Solution ob;
        vector<int> nums  = ob.minimumPseudoBinary(N);
        for(auto num : nums){
            cout << num << " ";
        }
        cout<<endl;
        
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends