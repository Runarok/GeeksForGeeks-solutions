class Solution:
    def reverseString(self, s: str) -> str:
        # Use Python's slicing method to reverse the string
        return s[::-1]



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while (t > 0):
        s = input()
        ob = Solution()
        print(ob.reverseString(s))
        t = t - 1

        print("~")

# } Driver Code Ends