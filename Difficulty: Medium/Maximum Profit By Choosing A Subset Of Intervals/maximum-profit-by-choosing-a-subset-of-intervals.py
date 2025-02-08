from typing import List

class Solution:
    def maximum_profit(self, n: int, intervals: List[List[int]]) -> int:
        """
        Function to find the maximum profit from non-overlapping intervals.
        
        :param n: Number of intervals
        :param intervals: List of intervals where each interval is [start, end, profit]
        :return: Maximum possible profit
        """

        # Sort intervals by end time, and by start time in case of tie
        intervals.sort(key=lambda x: (x[1], x[0]))

        # Find the maximum ending time among all intervals
        maxEndTime = intervals[-1][1]

        # DP array to store the maximum profit at each time point
        dp = [0] * (maxEndTime + 1)

        for i in range(n):
            start, end, profit = intervals[i]

            # If taking the current interval gives more profit, update dp[end]
            if profit + dp[start] > dp[end]:
                dp[end] = profit + dp[start]

            # If not the last interval, propagate the maximum profit forward
            if i < n - 1:
                _, nextEnd, _ = intervals[i + 1]

                # Carry forward the profit to the next interval range
                for time in range(end + 1, nextEnd + 1):
                    dp[time] = dp[end]

        return dp[maxEndTime]

#{ 
 # Driver Code Starts
class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        intervals=IntMatrix().Input(n, 3)
        
        obj = Solution()
        res = obj.maximum_profit(n, intervals)
        
        print(res)
        

        print("~")
# } Driver Code Ends