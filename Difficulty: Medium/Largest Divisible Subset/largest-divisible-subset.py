#User function Template for python3

class Solution:
    def largestDivisibleSubset(self, arr):
        arr.sort(reverse=True)
        lth=len(arr)
        cur=[]
        ret=[]
        def backtrack(ix=lth-1):
            nonlocal arr,lth,cur,ret
            if ix<0:
                if len(cur)>=len(ret):
                    ret=cur[:]
                return
            if len(cur)==0 or arr[ix]%cur[-1]==0:
                cur.append(arr[ix])
                backtrack(ix-1)
                cur.pop()
            backtrack(ix-1)
        backtrack()
        return ret
        
#{ 
 # Driver Code Starts
# Initial Template for Python 3

# Driver code
t = int(input())  # number of test cases
for _ in range(t):
    arr = list(map(int, input().split()))  # input array
    s = Solution().largestDivisibleSubset(
        arr)  # find the largest divisible subset
    print(" ".join(map(str, s)))  # Print the result

# } Driver Code Ends