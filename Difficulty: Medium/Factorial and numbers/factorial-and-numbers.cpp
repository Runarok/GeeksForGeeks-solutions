//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
public:
    using ull = long long int;

    // Calculate the prime factors of a given number
    map<ull, int> primeFactors(ull num) {
        map<ull, int> ans;
        
        // Iterate through potential factors from 2 to sqrt(num)
        for (ull i = 2; i * i <= num; i++) {
            while (num % i == 0) {
                num /= i;
                ans[i]++; // Increment count for each prime factor
            }
        }
        
        // If the remaining number is greater than 1, it is also a prime factor
        if (num > 1)
            ans[num]++;
        
        return ans;
    }

    // Calculate the occurrence of a prime factor in the factorial of num
    ull legendre(ull factor, ull num) {
        ull count = 0, fac2 = factor;
        
        // While the current factorial number is greater than or equal to the factor
        while (num >= factor) {
            count += num / factor;  // Add the number of multiples of factor in num
            factor *= fac2;  // Increase the power of the factor
        }
        
        return count;
    }

    // Check if the prime factors' occurrences in num's factorial are enough
    bool possible(map<ull, int> &factors, ull num) {
        // Iterate through all prime factors and check if num's factorial has enough of each factor
        for (auto &it : factors) {
            if (legendre(it.first, num) < it.second)
                return false;
        }
        return true;
    }

    // Perform binary search to find the smallest number whose factorial satisfies the condition
    ull search(ull start, ull end, map<ull, int> &factors) {
        ull mid = (start + end) / 2;

        // If prime factors are not in the factorial, adjust the search range
        if (!possible(factors, mid))
            return search(mid + 1, end, factors);

        // If we reached the smallest occurrence
        if (start == mid)
            return mid;

        // Otherwise, check if a smaller factorial satisfying the condition exists
        return search(start, mid, factors);
    }

    // Calculate the prime factors and search for the smallest number whose factorial satisfies the condition
    long long int findFact(long long num) {
        map<ull, int> factors = primeFactors(num);
        return search(1, num, factors);
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		long long int num;
		cin >> num;
		Solution obj;
		long long int ans = obj.findFact(num);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends