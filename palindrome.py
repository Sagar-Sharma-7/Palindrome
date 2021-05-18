text = input("Type any string or number: ")
lowertext = text.lower()
reverseText = "".join(reversed(lowertext))
print(lowertext)
print(reverseText)
if reverseText == lowertext:
     print("True, its a palindrome.")
else:
    print("False, its not a palindrome")