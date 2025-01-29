from typing import List
from itertools import islice

class Solution:
    def minDifference(self, n: int, a: List[int]) -> List[List[int]]:
        
        # Define a recursive helper function to calculate the optimal split
        def f(i, j, x, y):
            # Base case: if j equals i, just add the sum of elements before i to x
            if j == i:
                x += sum(a[:i])
            # Recursive case: If j is non-zero, consider both options:
            # - Including the current element in the sum
            # - Excluding it
            elif j:
                return f(i - 1, j - 1, x + a[i - 1], f(i - 1, j, x, y))    
            # Return the smaller of the two sums by comparing their absolute values
            return (x, y)[abs(x) > abs(y)]
        
        # Calculate the total sum of the list 'a'
        s = sum(a)
        
        # Use the helper function to find the optimal split point for the smallest difference
        s1 = f(len(a), (len(a) + 1) // 2, (1 - s) // 2, sum(map(abs, a))) + s // 2
        
        # Determine the two split sums: one being the smaller and the other the larger
        ss = (s1, s - s1)
        
        # Return the results as a list containing the minimum and maximum split sums
        return [min(ss)], [max(ss)]
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
        
        
        arr=IntArray().Input(n)
        
        obj = Solution()
        res = obj.minDifference(n, arr)
        
        IntMatrix().Print(res)
        

# } Driver Code Ends