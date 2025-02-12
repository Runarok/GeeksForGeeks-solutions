from collections import Counter

class Solution:
    def maxDistinctNum(self, arr, k):
        """
        Function to find the maximum number of distinct integers 
        that can remain after performing at most k deletions.
        
        :param arr: List of integers
        :param k: Maximum number of deletions allowed
        :return: Maximum distinct integers count after deletions
        """
        freq = Counter(arr)  # Count frequency of each element
        freq_values = sorted(freq.items(), key=lambda x: x[1], reverse=True)  # Sort by frequency (descending)
        
        deletions = 0  # Track the number of elements deleted
        
        # Reduce counts of elements with duplicates
        for value, count in freq_values:
            if count > 1:
                to_remove = min(k - deletions, count - 1)  # Determine how many occurrences to remove
                deletions += to_remove
                freq[value] -= to_remove
            if deletions == k:  # Stop if we reach max deletions
                break

        # Remove elements entirely if we still have remaining deletions
        if deletions < k:
            for key in list(freq.keys()):
                if deletions == k:
                    break
                deletions += 1
                del freq[key]  # Remove the element entirely

        return len(freq)  # Return count of distinct numbers left

#{ 
 # Driver Code Starts
if __name__ == '__main__':
    import heapq

    tc = int(input().strip())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        k = int(input().strip())
        ob = Solution()
        print(ob.maxDistinctNum(arr, k))
        tc -= 1
        print("~")

# } Driver Code Ends