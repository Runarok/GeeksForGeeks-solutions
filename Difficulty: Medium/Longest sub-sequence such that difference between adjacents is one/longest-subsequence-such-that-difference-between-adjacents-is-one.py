from collections import defaultdict 

class Solution:
    def longLenSub(self, arr):
        max_length = 0
        subseq_dict = defaultdict(int)

        # Iterate through the array
        for num in arr:
            # Update the length of subsequence ending at 'num'
            subseq_dict[num] = 1 + max(subseq_dict[num - 1], subseq_dict[num + 1])
            
            # Update the maximum length found so far
            max_length = max(max_length, subseq_dict[num])

        return max_length


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.longLenSub(arr)
        print(res)
        t -= 1
        print("~")
# } Driver Code Ends