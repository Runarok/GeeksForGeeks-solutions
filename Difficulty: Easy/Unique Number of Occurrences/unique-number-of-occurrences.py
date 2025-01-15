from typing import List
class Solution:
    def isFrequencyUnique(self, n : int, arr : List[int]) -> bool:
  
        frequency = {}
        for num in arr:
            frequency[num] = frequency.get(num, 0) + 1
        return len(set(frequency.values())) == len(frequency.values())


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
        
        n = int(input())
        
        
        arr=IntArray().Input(n)
        
        obj = Solution()
        res = obj.isFrequencyUnique(n, arr)
        
        result_val = 1 if res else 0
        print(result_val)

        print("~")
# } Driver Code Ends
