from collections import OrderedDict

class LRUCache:
    
    # Constructor for initializing the cache capacity with the given value.
    def __init__(self, cap):
        self.cache = OrderedDict()  # Use an OrderedDict to maintain insertion order
        self.capacity = cap
    
    # Function to return value corresponding to the key.
    def get(self, key):
        if key in self.cache:
            # Move the accessed key to the end to mark it as recently used
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1
    
    # Function for storing key-value pair.
    def put(self, key, value):
        if key in self.cache:
            # Update the value if the key exists
            self.cache.move_to_end(key)
            self.cache[key] = value
        else:
            # If the cache exceeds capacity, remove the least recently used item (first item)
            if len(self.cache) >= self.capacity:
                self.cache.popitem(last=False)
            # Insert the new key-value pair
            self.cache[key] = value




#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):
        cap = int(input())  # capacity of the cache
        qry = int(input())  #number of queries
        a = list(map(str,
                     input().strip().split()))  # parent child info in list

        lru = LRUCache(cap)

        i = 0
        q = 1
        while q <= qry:
            qtyp = a[i]

            if qtyp == 'PUT':
                lru.put(int(a[i + 1]), int(a[i + 2]))
                i += 3
            elif qtyp == 'GET':
                print(lru.get(int(a[i + 1])), end=' ')
                i += 2
            q += 1
        print()
        print("~")

# } Driver Code Ends