//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
    
    // Function to check if a number is a palindrome
    bool ispalindrome(int n)
    {
        int num = n;
        int ans = 0;
        
        // Reverse the number to check if it's a palindrome
        while (num > 0)
        {
            ans = ans * 10 + num % 10;
            num = num / 10;
        }
        
        // Compare the original number with the reversed number
        return n == ans;
    }
    
    // Function to check if a number is prime
    bool isprime(int n)
    {
        if (n < 2) return false;
        
        // Check divisibility up to the square root of n
        for (int i = 2; i <= sqrt(n); i++)
        {
            if (n % i == 0) return false;
        }
        return true;
    }
    
    // Function to find the next prime palindrome number greater than or equal to N
    int PrimePalindrome(int N)
    {
        int c = N;
        
        // Loop to find the next prime palindrome
        while (c >= N)
        {
            if (ispalindrome(c) && isprime(c)) return c; // Return the number if it's prime and palindrome
            c++; // Increment to check the next number
        }    
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int N;
		cin >> N;
		Solution obj;
		int ans = obj.PrimePalindrome(N);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends