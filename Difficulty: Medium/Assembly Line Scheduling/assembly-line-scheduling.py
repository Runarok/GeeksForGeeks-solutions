from typing import List

class Solution:
    def carAssembly(self, n: int, a: List[List[int]], T: List[List[int]], e: List[int], x: List[int]) -> int:
        # dp[line][station] will store the minimum cost to reach the given station on the given assembly line
        # at that point in the process, -1 means that the value hasn't been computed yet
        dp = [[-1]*n for _ in range(2)]
        
        # Helper function to calculate the minimum cost to complete the assembly line from the given station
        def calculate_cost(line: int, station: int) -> int:
            # Base case: If we reach the last station, return the cost of that station + exit cost
            if station == n - 1:
                return a[line][station] + x[line]
                
            # If the cost has already been computed, return the stored value
            if dp[line][station] != -1:
                return dp[line][station]
                
            # Option 1: Continue on the same assembly line
            continue_on_same_line = a[line][station] + calculate_cost(line, station + 1)
            
            # Option 2: Switch to the other assembly line (considering transfer time T)
            switch_to_other_line = a[line][station] + T[line][station + 1] + calculate_cost((line + 1) % 2, station + 1)
            
            # Store the minimum cost in dp table
            dp[line][station] = min(continue_on_same_line, switch_to_other_line)
            
            return dp[line][station]
        
        # Calculate the minimum cost starting from either assembly line 0 or assembly line 1,
        # including the entry costs e[0] and e[1] respectively.
        return min(e[0] + calculate_cost(0, 0), e[1] + calculate_cost(1, 0))


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
        
        n = int(input())
        
        
        a=IntMatrix().Input(2, 2)
        
        
        T=IntMatrix().Input(2, 2)
        
        
        e=IntArray().Input(2)
        
        
        x=IntArray().Input(2)
        
        obj = Solution()
        res = obj.carAssembly(n, a, T, e, x)
        
        print(res)
        

# } Driver Code Ends