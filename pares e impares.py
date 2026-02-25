# 1259 - Pares e Ímpares
N = int(input())

pares = []
impares = []

for i in range(N):
    valor = int(input())
    if valor % 2 == 0:
        pares.append(valor)
    else:
        impares.append(valor)
        
pares.sort()
impares.sort(reverse=True)

for j in pares:
    print(j)

for k in impares:
    print(k)

