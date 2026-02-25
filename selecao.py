# 1174 - Seleçao em Vetor I
A = []
for i in range (100):
    n = float(input())
    A.append(n)
for j in range (100):
    if A[j] <= 10:
        print (f"A[{j}] = {A[j]:.1f}")