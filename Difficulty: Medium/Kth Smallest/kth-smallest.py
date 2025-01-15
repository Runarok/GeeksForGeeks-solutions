#User function Template for python3


class Solution:
    def kthSmallest(self, arr, k):
        # Step 1: Find the range of numbers in the array
        max_element = max(arr)
        
        # Step 2: Initialize the count array with zeros
        count = [0] * (max_element + 1)
        
        # Step 3: Count the occurrences of each element in the array
        for num in arr:
            count[num] += 1
        
        # Step 4: Traverse the count array and find the kth smallest element
        count_sum = 0
        for i in range(len(count)):
            count_sum += count[i]
            if count_sum >= k:
                return i
        return -1  # In case k is invalid (though it shouldn't be based on constraints)



#{ 
 # Driver Code Starts
#Initial Template for Python 3

#contributed by RavinderSinghPB
if __name__ == '__main__':
    import random
    t = int(input())
    for tcs in range(t):
        # n = int(input())
        arr = list(map(int, input().strip().split()))
        k = int(input())
        ob = Solution()
        print(ob.kthSmallest(arr, k))
        print("~")
# } Driver Code Ends
