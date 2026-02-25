# 1244 - Ordenação por Tamanho
N = int(input())
for i in range(N):
    frase = input().split()
    frase.sort(key = len, reverse = True)

    resultado = ' '.join(frase)    
    print (resultado)