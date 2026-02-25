# 1172 - Substituição em Vetor I
V = []

for i in range(10):
    N = int(input())
    if N <= 0:
        N = 1
    V.append (N)
    
for i in range (10):
    print (f"X[{i}] = {V[i]}")