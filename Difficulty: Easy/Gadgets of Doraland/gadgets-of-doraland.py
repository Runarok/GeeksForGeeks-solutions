# User function Template for python3
import heapq

class Solution:
    # Function to find the top K most frequent elements in the array
    def TopK(self, array, k):
        
        # Create a list to store elements grouped by their frequency
        histo = []
        
        # Dictionary to store the frequency of each element
        dictionary = {}
        
        # Initialize histo with empty lists for each frequency
        for i in range(len(array) + 1):
            histo.append([])
        
        # Count the frequency of each item in the array
        for item in array:
            dictionary[item] = 1 + dictionary.get(item, 0)
        
        # Group items by their frequency in the histo list
        for key, value in dictionary.items():
            heapq.heappush(histo[value], -key)
        
        # Initialize variables to keep track of remaining elements to process
        n = len(array)
        result = []
        
        # Start processing the elements from highest frequency to lowest
        while n >= 0 and k > 0:
            while histo[n]:
                result.append(-heapq.heappop(histo[n]))  # Add the element to result
                k -= 1
                if k == 0:  # Stop when we've found the top K elements
                    break
            n -= 1
        
        return result



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n = int(input())
        array = [int(x) for x in input().strip().split()]
        k = int(input())
        obj = Solution()
        res = obj.TopK(array, k)
        for each in res:
            print(each, end=' ')
        print()

        print("~")
# } Driver Code Ends