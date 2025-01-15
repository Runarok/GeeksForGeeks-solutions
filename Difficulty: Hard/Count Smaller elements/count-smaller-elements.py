#User function Template for python3

class Solution:
    def merge(self, arr, l, m, r):
        # Create temporary arrays for left and right subarrays
        first = arr[l:m+1]
        second = arr[m+1:r+1]
        
        ln_first = m - l + 1
        ln_second = r - m
        f = s = 0
        point = l
        count = 0  # Count of smaller elements to the left
        
        # Merge the two sorted subarrays and count inversions
        while f < ln_first and s < ln_second:
            if first[f][0] <= second[s][0]:
                arr[point] = first[f]
                self.ans[first[f][1]] += count
                f += 1
            else:
                arr[point] = second[s]
                s += 1
                count += 1
            point += 1

        # Copy the remaining elements
        while f < ln_first:
            arr[point] = first[f]
            self.ans[first[f][1]] += count
            f += 1
            point += 1

        while s < ln_second:
            arr[point] = second[s]
            s += 1
            point += 1

    def mergeSort(self, arr, l, r):
        if l < r:
            m = (l + r) // 2
            self.mergeSort(arr, l, m)
            self.mergeSort(arr, m + 1, r)
            self.merge(arr, l, m, r)

    def constructLowerArray(self, arr):
        ln = len(arr)
        self.ans = [0] * ln  # Initialize the answer array
        
        # Create an array of tuples (value, index) for original positions
        itemarr = [(num, ind) for ind, num in enumerate(arr)]
        
        # Perform merge sort on the array of tuples
        self.mergeSort(itemarr, 0, ln - 1)
        
        return self.ans



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.constructLowerArray(arr)
        for x in ans:
            print(x, end=" ")
        print()
        tc -= 1

        print("~")

# } Driver Code Ends