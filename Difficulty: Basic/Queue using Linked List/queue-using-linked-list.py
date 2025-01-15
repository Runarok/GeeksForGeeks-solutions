# A linked list (LL) node 
# to store a queue entry 
'''class Node: 
      
    def __init__(self, data): 
        self.data = data 
        self.next = None'''
        
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class MyQueue:
    
    def __init__(self):
        self.front = None
        self.rear = None
    
    # Function to push an element into the queue.
    def push(self, item):
        new_node = Node(item)
        if self.rear is None:
            self.front = self.rear = new_node
            return
        self.rear.next = new_node
        self.rear = new_node
    
    # Function to pop front element from the queue.
    def pop(self):
        if self.front is None:
            return -1
        popped_item = self.front.data
        self.front = self.front.next
        if self.front is None:  # If the queue is empty, update rear to None.
            self.rear = None
        return popped_item



#{ 
 # Driver Code Starts

if __name__=='__main__':
    t=int(input())
    for i in range(t):
        s=MyQueue()
        q=int(input())
        q1=list(map(int,input().split()))
        i=0
        while(i<len(q1)):
            if(q1[i]==1):
                s.push(q1[i+1])
                i=i+2
            elif(q1[i]==2):
                print(s.pop(),end=" ")
                i=i+1
            elif(s.isEmpty()):
                print(-1)
                i=i+1
        print()   
        print("~")
# } Driver Code Ends