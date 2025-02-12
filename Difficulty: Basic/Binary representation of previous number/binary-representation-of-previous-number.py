# User function Template for Python3

class Solution:
    def binaryPreviousNumber(self, S):
        # Edge case: if the number is "0", return it as is
        if S == "0":
            return S
        
        # Convert string to list for mutability
        S = list(S)
        position = 0
        
        # Find the rightmost '1' and change it to '0'
        for i in range(len(S) - 1, -1, -1):
            if S[i] == "1":
                S[i] = "0"
                position = i
                break
    
        # Change all digits after the modified position to '1'
        for i in range(position + 1, len(S)):
            S[i] = "1"
        
        # Remove leading zeros and construct the final string
        result = "".join(S).lstrip("0")
        
        return result if result else "0"

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		S = input()
		ob = Solution()
		ans = ob.binaryPreviousNumber(S)
		print(ans)




# } Driver Code Ends