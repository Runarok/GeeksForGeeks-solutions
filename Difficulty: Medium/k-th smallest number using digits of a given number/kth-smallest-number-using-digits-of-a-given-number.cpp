//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
    // Function to find the smallest digit greater than 0 in the given number
    char getSmallDgtGreaterThanZero(string num, int n) {
        // 's_dgt' to store the smallest digit greater than 0
        char s_dgt = '9'; // Initialize with the largest possible digit

        // Iterate through each digit of the number
        for (int i = 0; i < n; i++)
            // Update the smallest digit if the current digit is smaller and not '0'
            if (num[i] < s_dgt && num[i] != '0')
                s_dgt = num[i];

        // Return the required smallest digit greater than 0
        return s_dgt;
    }

    // Function to find the kth smallest permutation of the number
    string kthSmallestNumber(string num, int k) {
        // Array to store the frequency of each digit from 0 to 9
        int freq[10];
        string final_num = ""; // String to store the smallest permutation number

        memset(freq, 0, sizeof(freq)); // Initialize frequency array to 0
        int n = num.size(); // Get the length of the number

        // Count the frequency of each digit in the given number
        for (int i = 0; i < n; i++)
            freq[num[i] - '0']++;

        // Get the smallest digit greater than 0
        char s_dgt = getSmallDgtGreaterThanZero(num, n);

        // Add the smallest non-zero digit to the final number
        final_num += s_dgt;

        // Decrease the frequency of the smallest digit by 1
        freq[s_dgt - '0']--;

        // Add the remaining digits according to their frequency to the final number
        for (int i = 0; i < 10; i++)
            for (int j = 1; j <= freq[i]; j++)
                final_num += (char)(i + 48); // Add each digit to the final number

        // Find the kth permutation of the smallest possible number
        for (int i = 1; i < k; i++)
            next_permutation(final_num.begin(), final_num.end()); // Generate next permutation

        // Return the kth smallest permutation
        return final_num;
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		string num;
		cin >> num;
		int k;
		cin >> k;
		Solution ob;
		string ans  = ob.kthSmallestNumber(num, k);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends