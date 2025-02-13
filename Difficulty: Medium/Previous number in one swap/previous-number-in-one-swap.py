# User function template for Python3
class Solution:
    def previousNumber(self, S):
        n = len(S)
        arr = list(S)
        flag = False

        # Check if the number is already the smallest possible permutation
        for i in range(n - 1):
            if arr[i] > arr[i + 1]:
                flag = True
                break

        if not flag:
            return -1

        # Find the rightmost index where arr[i-1] > arr[i]
        idx = None
        for i in range(n - 1, 0, -1):
            if arr[i - 1] > arr[i]:
                idx = i - 1
                break

        if idx is None:
            return -1

        # Find the largest digit smaller than arr[idx] on the right side
        temp = '-999999'
        for j in range(n - 1, idx, -1):
            if arr[j] < arr[idx] and arr[j] >= temp:
                idx2 = j
                temp = arr[idx2]

        # Swap arr[idx] with arr[idx2]
        arr[idx], arr[idx2] = arr[idx2], arr[idx]

        # Convert list back to string
        ans = ''.join(arr)

        # If the result has a leading zero, it's invalid
        if ans[0] == '0':
            return -1

        return ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        
        S=str(input())

        ob = Solution()
        print(ob.previousNumber(S))
        print("~")
# } Driver Code Ends