# Exercícios

### Parte 1 - Criação de arquivos e diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.

```bash
mkdir trybe
cd trybe
mkdir unix_tests
```

2. Crie um arquivo de texto com o nome `trybe.txt`.

```bash
cd unix_tests
touch trybe.txt
```

3. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt`.

```bash
cp trybe.txt trybe_backup.txt
```

4. Renomeie o arquivo `trybe.txt`.

```bash
mv trybe.txt trybe1.txt
```

5. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.

```bash
mkdir backup
```

6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.

```bash
cd ..
mv trybe_backup.txt ./backup
```

7. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.

```bash
cd ..
mkdir backup2
```

8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.

```bash
mv ../trybe_backup.txt ./backup
```

9. Apague a pasta `backup`.

```bash
rm -rf backup
```

10. Renomeie a pasta `backup2` para `backup`.

```bash
mv backup2 backup
```

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

```bash
pwd
ls -a
```

12. Apague o diretório `backup`.

```bash
cd ..
rm -rf backup
```

13. Limpe o terminal.

```bash
clear
```

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt`:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.

```bash
mkdir skills.txt
head -5 skills.txt
```

15. Mostre na tela as 4 últimas skills do arquivo `skills.txt`.

```bash
tail -4 skills.txt
```

16. Apague todos os arquivos que terminem em `.txt`.

```bash
rm *.txt
```

### Parte 2 - Manipulação & Busca

1. Na pasta `unix_tests`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando [curl:](https://linux.die.net/man/1/curl)

`curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`

2. Mostre todo o conteúdo do arquivo `countries.txt` na tela.

```bash
cat countries.txt
```

3. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a `Zambia`.

```bash
cat countries.txt
```

4. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.

```bash
grep 'Zambia' countries.txt
```

5. Busque por `Brazil` no `countries.txt`.

```bash
grep 'Brazil' countries.txt
```

6. Busque novamente por `brazil`, mas agora utilizando o *lower case*.

```bash
grep -i 'Brazil' countries.txt
```

**Para os próximos exercícios, crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**

```bash
touch phrases.txt
```

7. Busque pelas frases que não contenham a palavra `fox`.

```bash
grep 'fox' phrases.txt
```

8. Conte o número de palavras do arquivo `phrases.txt`.

```bash
wc -w phrases.txt
```

9. Conte o número de linhas do arquivo `phrases.txt`.

```bash
wc -l phrases.txt
```

10. Crie os arquivos `empty.tbt` e `empty.pdf`.

```bash
touch empty.tbt empty.pdf
```

11. Liste todos os arquivos do diretório `unix_tests`.

```bash
ls -a
```

12. Liste todos os arquivos que terminem com `txt`.

```bash
ls *.txt
```

13. Liste todos os arquivos que terminem com `tbt` ou `txt`.

```bash
ls *.tbt *.txt
```

14. Acesse o manual do comando `ls`.

```bash
man ls
```
