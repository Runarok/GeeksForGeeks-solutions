#{ 
 # Driver Code Starts

# } Driver Code Ends

class Solution:
    # Helper function to print the array (for debugging or checking steps)
    def printArr(self, arr):
        print(" ".join(map(str, arr)))
        
    # Function to sort the array containing 0s, 1s, and 2s
    def sort012(self, arr):
        n = len(arr)
        
        # Initialize pointers
        low, mid, high = 0, 0, n - 1
        
        # Traverse the array using the Dutch National Flag Algorithm
        while mid <= high:
            if arr[mid] == 0:
                arr[low], arr[mid] = arr[mid], arr[low]  # Swap 0 to the low region
                low += 1
                mid += 1
            elif arr[mid] == 1:
                mid += 1  # 1 is already in the correct region, just move mid forward
            else:  # arr[mid] == 2
                arr[mid], arr[high] = arr[high], arr[mid]  # Swap 2 to the high region
                high -= 1



#{ 
 # Driver Code Starts.
def main():
    t = int(input().strip())  # Read the number of test cases
    ob = Solution()

    while t > 0:
        t -= 1
        arr = list(map(int,
                       input().strip().split())
                   )  # Read the array as space-separated integers
        ob.sort012(arr)  # Sort the array

        print(' '.join(map(str, arr)))  # Print the sorted array
        print("~")
        
if __name__ == "__main__":
    main()

# } Driver Code Ends
