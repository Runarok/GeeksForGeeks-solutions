#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to check if a pair with the given sum exists in the array
def pair_sum(num_dict, num_array, target_sum):
    # Iterate through the array to find pairs
    for index1 in range(len(num_array)):
        for index2 in range(index1 + 1, len(num_array)):
            # Check if the sum of the current pair equals the target sum
            if num_array[index1] + num_array[index2] == target_sum:
                return True  # Return True if a pair is found
    return False  # Return False if no pair is found



#{ 
 # Driver Code Starts.
# Driver code
def main():
    
    # testcase input
    testcase = int(input())
    
    # looping through testcases
    while(testcase > 0):
        dict = {}
        arr = [int(i) for i in (input().split())]
        sum = int(input())
        
        for i in arr:
            dict[i] = 0
                
        for i in arr:
            dict[i] +=1
    
        if pair_sum(dict, arr, sum) is True:
            print ("true")
        else:
            print ("false")
        print("~")
        testcase -= 1


if __name__ == '__main__':
    main()
# } Driver Code Ends