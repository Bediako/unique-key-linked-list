Unique Key Linked List
======================
insert - inserts a key value in a given spot in the link list relative to another previously identified link list.
alias i

append - adds a node to the list.  If the key is already in the list an error is thrown.
alias a

prepend - adds a node to the beginning of the list.  If the key is already in the list an error is thrown.
alias p

print - prints the nodes in the list from head to tail

some - iterates through the list until a node meeting satisfies the iterator function criteria. Return an expression that evaluates truthy to halt iteration
       will return the whether or not it halted prematurely.
alias s

each - iterates through the list applying the iterator function to each element.
alias e

map - iterates through the list applying the iterator function to each element, while storing the results of each iteration in a result array.
alias m

list - a short cut for a map that returns all the nodes in an array.
alias m

keys - a short cut for a map that returns all the keys in an array.
alias k