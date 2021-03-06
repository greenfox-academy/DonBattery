# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    max = a
    if b > max:
        max = b
    if c > max:
        max = c
    return max

# Returns the median value of a list given as param
def median(pool):
    pool.sort()
    if len(pool) == 0:
        return 'empty'
    elif len(pool) == 1:
        return pool[0]
    elif len(pool) == 2:
        return (pool[0] + pool[1]) / 2
    elif len(pool) % 2 != 0:
        return pool[int((len(pool) - 1) / 2)]
    else:
        return (pool[int(len(pool) // 2) - 1] + pool[int(len(pool) // 2)]) / 2

# Returns true if the param is a vovel
def is_vovel(char):
    return char.lower() in 'aeiouúéáőűöüóí'

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = hungarian
    for char in teve:
        if is_vovel(char):
            teve = (char+'v'+char).join(teve.split(char))
    return teve