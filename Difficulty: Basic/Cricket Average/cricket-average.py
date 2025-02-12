# User function Template for Python3

import math

class Solution:
    def Average(self, run, status):
        # Calculate the total runs scored
        total_runs = sum(run)
        
        # Count the number of times the player got out
        total_outs = status.count("out")
        
        # If the player was never out, return -1
        if total_outs == 0:
            return -1
        
        # Calculate and return the average runs per out, rounded up
        return math.ceil(total_runs / total_outs)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		run = []
		status = []
		for _ in range(n):
			r, s = input().split()
			run.append(int(r))
			status.append(s)
		ob = Solution()
		ans = ob.Average(run, status)
		print(ans)
# } Driver Code Ends