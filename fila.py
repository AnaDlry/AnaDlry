# 1548 - Fila do Recreio
N = int(input())
A = []

for i in range(N):
    M = int(input())
    notas = list(map(int, input().split()))
    A = notas [:]
    A.sort(reverse=True)
    variavel = 0
    
    for j in range (M):
        if notas[j] == A[j]:
            variavel += 1
    print (variavel)