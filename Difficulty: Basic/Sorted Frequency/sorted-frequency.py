class Solution:
    def freqSorted(self, arr):
        # Create a dictionary to store frequency of each element
        freq = {}
        
        # Loop through the array to count frequencies
        for num in arr:
            if num in freq:
                freq[num] += 1
            else:
                freq[num] = 1
        
        # Sort the keys (unique elements) of the frequency dictionary
        for num in sorted(freq.keys()):
            # Print the element and its frequency
            print(num, freq[num])

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        # 		n = int(input())
        arr = [int(x) for x in input().split()]

        ob = Solution()
        ob.freqSorted(arr)

# } Driver Code Ends