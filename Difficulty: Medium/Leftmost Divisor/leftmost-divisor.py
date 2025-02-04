class Solution:
    def leftMostDiv(self, p, q):
        # Compute p raised to the power q (p^q)
        num = str(self.pow(p, q))
        i = 0
        
        # If the number is too large, truncate it to the first 10 digits
        if len(num) > 18:
            num = num[:10]
        
        # Iterate through each digit in the number
        for x in range(len(num)):
            # If the digit is not '0' and the number is divisible by that digit
            if num[x] != '0' and int(num) % int(num[x]) == 0:
                return num[x]
        
        # If no such digit is found, return -1
        return -1
        
    def pow(self, a, b):
        # Base case: any number raised to the power of 0 is 1
        if b == 0:
            return 1
        
        # Recursively compute a^b using divide and conquer approach
        half_power = self.pow(a, b // 2)
        if b % 2:
            # If b is odd, multiply an additional 'a'
            return half_power * half_power * a
        else:
            # If b is even, simply square the result
            return half_power * half_power


#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3
if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		p,q = input().split()
		p=int(p)
		q=int(q)
		ob = Solution();
		print(ob.leftMostDiv(p, q))

# } Driver Code Ends