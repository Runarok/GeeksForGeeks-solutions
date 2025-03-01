class Solution:
    def find(self, A, B):
        # Initialize the answer variable
        ans = 0
        
        # Handle the case where the range is small
        if B - A < 10:
            for num in range(A, B + 1):
                num >>= 1  # Perform right shift (divide by 2)
                ans += num & 1  # Check if the least significant bit is 1
            return ans
        
        # Adjust A if it is not divisible by 4, based on modulo conditions
        if A % 4 == 1:
            ans += 2
            A += 3
        elif A % 4 == 2:
            ans += 2
            A += 2
        elif A % 4 == 3:
            ans += 1
            A += 1
        
        # Adjust B if it is not divisible by 4, based on modulo conditions
        if B % 4 == 1:
            B -= 1
        elif B % 4 == 2:
            ans += 1
            B -= 2
        elif B % 4 == 3:
            ans += 2
            B -= 3
        
        # If A is less than B, calculate the count of 2-step increments in the range
        if A < B:
            ans += (B - A) // 2
        
        return ans


#{ 
 # Driver Code Starts
#Initial Template for Python 3


if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        A,B = input().split()
        ob = Solution()
        print(ob.find(int(A),int(B)))
        print("~")
# } Driver Code Ends