#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

#User function Template for python3

# Function to create dictionary
# arr is list of tuple. Each tuple contains a name and marks.

def create_dict(arr):
    student_marks = {}
    
    # Loop through each tuple in the list
    for name, marks in arr:
        # Assign name as key and marks as value
        student_marks[name] = marks
    
    return student_marks


#{ 
 # Driver Code Starts.
# Driver Code
def main():
    
    # Testcase input
    testcases = int(input())
    
    # Looping through testcases
    while(testcases > 0):
        N = int(input())
        
        name = input().split()
        marks = input().split()
        arr = list()
        for i in range(0, N, 1):
            arr.append((name[i], marks[i]))
        
        dict = create_dict(arr)
        
        for key in sorted(dict.keys()):
            print (key, dict[key])
        
        testcases -= 1
        print("~")
 
if __name__ == '__main__':
    main()
# } Driver Code Ends