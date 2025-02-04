from typing import List

class Solution:
    def Rearrange(self, n: int, arr: List[int]) -> None:
        # Separate the negative and positive numbers
        negative_numbers = []
        positive_numbers = []

        # Classify numbers into negative and positive lists
        for num in arr:
            if num < 0:
                negative_numbers.append(num)
            else:
                positive_numbers.append(num)

        # Place the negative numbers first in the original array
        for i in range(len(negative_numbers)):
            arr[i] = negative_numbers[i]

        # Place the positive numbers after the negative numbers
        for i in range(len(positive_numbers)):
            arr[i + len(negative_numbers)] = positive_numbers[i]


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
        
        
        arr=IntArray().Input(2)
        
        obj = Solution()
        obj.Rearrange(n, arr)
        
        print(*arr, end=' ')
        print()

        print("~")
# } Driver Code Ends