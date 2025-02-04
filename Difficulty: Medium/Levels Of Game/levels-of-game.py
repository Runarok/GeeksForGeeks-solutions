from typing import List
from functools import lru_cache

# Define the recursive function with memoization to calculate the maximum level
@lru_cache(None)
def dfs(prv, h, m):
    # Base case: if health (h) or mana (m) becomes non-positive, return -1 (invalid state)
    if h <= 0 or m <= 0:
        return -1
    
    # If the previous state was 0 (no action), try both actions (1 and 2) and pick the best one
    if prv == 0:
        return max(dfs(1, h - 5, m - 10), dfs(2, h + 3, m + 2)) + 1
    
    # If the previous action was 1, try both actions (0 and 2) and pick the best one
    if prv == 1:
        return max(dfs(0, h - 20, m + 5), dfs(2, h + 3, m + 2)) + 1
    
    # If the previous action was 2, try both actions (0 and 1) and pick the best one
    if prv == 2:
        return max(dfs(0, h - 20, m + 5), dfs(1, h - 5, m - 10)) + 1
    
    # If no previous state (starting point), try all actions (0, 1, 2) and pick the best one
    return max(dfs(0, h - 20, m + 5), dfs(1, h - 5, m - 10), dfs(2, h + 3, m + 2)) + 1

# Define the Solution class
class Solution:
    def maxLevel(self, h: int, m: int) -> int:
        # Start the recursive function from an invalid previous state (-1) with the given health and mana
        return dfs(-1, h, m)


#{ 
 # Driver Code Starts

class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        a=IntArray().Input(2)
        h,m = a[0],a[1]
        obj = Solution()
        res = obj.maxLevel(h,m)
        
        print(res)
        

        print("~")
# } Driver Code Ends