class Solution:

    def kSmallestElements(self, arr, k):
        n = len(arr)
        ans = []

        # Return an empty list if k is out of bounds
        if k <= 0 or k > n:
            return ans

        # Create a copy of the original array
        brr = arr.copy()

        # Sort the original array
        arr.sort()

        # Create a dictionary to store the frequency of elements
        freq = {}

        # Count the frequency of the first k elements in the sorted array
        for i in range(k):
            freq[arr[i]] = freq.get(arr[i], 0) + 1

        # Iterate through the copied array
        # and add elements to the answer list based on their frequency
        for num in brr:
            if freq.get(num, 0) > 0:
                ans.append(num)
                freq[num] -= 1

        return ans


#{ 
 # Driver Code Starts
if __name__ == '__main__':
    tc = int(input().strip())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        k = int(input().strip())
        ob = Solution()
        result = ob.kSmallestElements(arr, k)
        print(" ".join(map(str, result)))
        tc -= 1
        print("~")

# } Driver Code Ends