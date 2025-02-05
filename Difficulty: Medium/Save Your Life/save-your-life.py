class Solution:
    def find_max_subarray(self, arr):
        # Initialize variables to keep track of the maximum subarray sum
        max_current = max_global = 0  # max_current tracks the current sum, max_global tracks the best sum so far
        subarray_start = subarray_end = temp_start = 0  # Indices to track the subarray's starting and ending positions

        # Iterate through the array
        for i, num in enumerate(arr):
            # If adding current element to max_current gives a higher sum, continue with the current subarray
            if num + max_current >= num:
                max_current += num
            else:
                # Otherwise, start a new subarray from the current element
                max_current = num
                temp_start = i  # New subarray start index
            
            # Update the global maximum sum if the current subarray sum is greater
            if max_current > max_global:
                max_global = max_current
                subarray_end = i
                subarray_start = temp_start
        
        # Return the maximum sum and the starting and ending indices of the subarray
        return max_global, subarray_start, subarray_end
    
    def maxSum(self, words, x, b, n):
        # Initialize an array to store the mapped values based on 'x' and 'b'
        transformed_array = []
        forward_mapping = {}
        reverse_mapping = {}

        # Create mappings from x to b and b to x
        for i in range(n):
            forward_mapping[x[i]] = b[i]
            reverse_mapping[b[i]] = x[i]
        
        # Build the transformed array for the input words based on the mappings
        for char in words:
            if char in forward_mapping:
                transformed_array.append(forward_mapping[char])  # Use the mapped value if available
            else:
                transformed_array.append(ord(char))  # Otherwise, use the ASCII value of the character
        
        # Find the maximum sum subarray from the transformed array
        max_subarray = self.find_max_subarray(transformed_array)

        # Extract the final substring corresponding to the best subarray
        final_result = words[max_subarray[1]:max_subarray[2]+1]

        # Return the resulting substring
        return final_result



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        w = input()
        n = int(input())
        x = input().split(' ')
        b = input().split(' ')
        for itr in range(n):
            b[itr] = int(b[itr])
       

        ob = Solution()
        print(ob.maxSum(w,x,b,n))
        print("~")
# } Driver Code Ends