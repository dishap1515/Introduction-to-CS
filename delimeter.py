def concatenate(l, delimeter):
	d = ''
	my_string = ''
	for number in l:
		my_string += (d + str(number))
		d = delimeter
	return my_string

print(concatenate(list(range(10)), ", "))
print(concatenate(list(range(11, 23)), ". ")) 

    
    

