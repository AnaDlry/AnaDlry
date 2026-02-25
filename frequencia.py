# 1171 - Frequência de Números
N = int(input())
lista = []

for i in range(N):
    X = int(input())
    lista.append(X)

frequencia = [0] * 2001

for l in lista:
    frequencia[l] += 1
    
for i in range(2001):
    if frequencia[i] > 0:
        print(f"{i} aparece {frequencia[i]} vez(es)")