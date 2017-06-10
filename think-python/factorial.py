def factorial(n):
    if not isinstance(n, int):
        print('factorial is only defined for integer')
        return None
    elif n < 0:
        print('factorial is only defined for integer')
        return None
    if n == 0:
        return 1
    return n * factorial(n - 1)


print(factorial(5))
print(factorial(-1))
print(factorial('hello'))
print(factorial(1.5))
