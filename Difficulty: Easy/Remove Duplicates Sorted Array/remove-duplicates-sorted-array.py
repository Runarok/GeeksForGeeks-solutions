# User function template for Python

class Solution:
    def removeDuplicates(self, arr):
        n = len(arr)
        if n == 0 or n == 1:
            return n
        
        # Initialize index for the next unique element
        j = 0
        
        # Traverse the array
        for i in range(1, n):
            if arr[i] != arr[j]:
                j += 1
                arr[j] = arr[i]
        
        # j+1 is the number of unique elements
        return j + 1


#{ 
 # Driver Code Starts
#Initial template for Python

if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')

    t = int(data[0])
    line = 1

    solution = Solution()

    for _ in range(t):
        if line < len(data):
            arr = list(map(int, data[line].split()))
            line += 1
            ans = solution.removeDuplicates(arr)
            for i in range(ans):
                print(arr[i], end=" ")
            print()
        print("~")

# } Driver Code Ends
