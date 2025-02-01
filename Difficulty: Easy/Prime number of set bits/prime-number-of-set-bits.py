#User function Template for python3
class Solution:
    def primeSetBits(self, L, R):
        # Initialize result counter
        res = 0
        
        # Set of prime numbers up to 31 (since we are counting set bits)
        prime_set = set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])
        
        # Loop through all numbers from L to R
        for i in range(L, R + 1):
            # Count the number of set bits (1's) in the binary representation of the number
            count = (bin(i)[2:]).count("1")
            
            # If the count of set bits is prime, increment the result counter
            if count in prime_set:
                res += 1
        
        # Return the total count of numbers with prime set bits
        return res

#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3
if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		L,R = input().split()
		L=int(L)
		R=int(R)
		ob = Solution();
		print(ob.primeSetBits(L,R))

# } Driver Code Ends