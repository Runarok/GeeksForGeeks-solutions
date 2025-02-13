//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    int NthDigit(int n)  // n = 220
    {
        // If n is a single digit, return it directly
        if(n < 10) return n;
        
        int count = 1;           // To track the number of digits
        int ninemul = 9;         // To track the number of numbers with the current digit length (1-digit, 2-digit, etc.)
        
        // Determine which digit length (count) the nth digit lies in
        while(n > count * ninemul)
        {
            n = n - count * ninemul;   // Decrease n by the number of digits in the current range
            ninemul *= 10;              // Increase range (10, 100, 1000, ...)
            count++;                    // Move to the next digit length
        }
        
        // Calculate the exact number where the nth digit is located
        int before = pow(10, count - 1) - 1;   // This gives the last number of the previous range (e.g., 99 for 2-digit numbers)
        
        int present = n / count;   // The actual number containing the nth digit
        int rem = n % count;       // The position of the nth digit within the number
        
        int after = 0;
        
        // If there's no remainder, the nth digit is the last digit of the 'present' number
        if(rem == 0)
        {
            after = before + present;
            return after % 10;    // Return the last digit of the number
        }
        else
        {
            // Otherwise, move to the next number and find the required digit
            after = before + present + 1;    // Increment the number to get the correct one
            int x = count - rem;
            
            // Remove the unnecessary digits from the right until we reach the target digit
            while(x--)
            {
                after = after / 10;   // Shift right
            }
            return after % 10;    // Return the nth digit
        }
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		Solution ob;
		int ans = ob.NthDigit(n);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends