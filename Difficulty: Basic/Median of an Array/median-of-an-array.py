class Solution:
    def findMedian(self, arr):
        arr.sort()  # Sort the array
        
        n = len(arr)
        
        if n % 2 == 1:
            return arr[n // 2]  # Return the middle element if the number of elements is odd
        else:
            mid1 = arr[(n // 2) - 1]
            mid2 = arr[n // 2]
            return (mid1 + mid2) / 2  # Return the average of the two middle elements if the number is even

#{ 
 # Driver Code Starts
def main():
    t = int(input().strip())  # Reading the number of test cases
    for _ in range(t):
        arr = list(map(int,
                       input().strip().split())
                   )  # Reading and converting input to a list of integers
        solution = Solution()
        ans = solution.findMedian(
            arr)  # Calling the function and printing the result
        if int(ans) == ans:
            print(int(ans))
        else:
            print(ans)


if __name__ == "__main__":
    main()

# } Driver Code Ends