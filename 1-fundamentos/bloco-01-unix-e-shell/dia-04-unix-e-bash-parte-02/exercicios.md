# Exercícios

### Parte 1 - Comandos de input e Output

1. Navegue até a pasta `unix_tests.`

```bash
cd unix_tests
```

2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, um em cada linha.

```bash
touch skills2.txt
cat > skills2.txt
	Internet
	Unix
	Bash
ctrl+D
```

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

```bash
cat >> skills2.txt
	git
	github
	html
	css
	js
sort < skills2.txt
```

4. Conte quantas linhas tem o arquivo `skills2.txt`.

```bash
wc -l skills2.txt
```

5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.

```bash
sort < skills2.txt | head -3 > top_skills.txt
```

6. Crie um novo arquivo chamado `phrases2.txt` e adicione algumas frases de sua escolha.

```bash
touch phrases2.txt
cat > phrases2.txt
	frases
```

7. Conte o número de linhas que contêm as letras `br`.

```bash
grep 'br' phrases2.txt | wc -l
```

8. Conte o número de linhas que **não** contêm as letras `br`.

```bash
grep -v 'br' phrases2.txt | wc -l
```

9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.

```bash
cat >> phrases2.txt
	Brasil
	Mexico
```

10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`

```bash
cp phrases2.txt bunch_of_things.txt
cat countries.txt >> bunch_oh_things.txt
```

11. Ordene o arquivo `bunch_of_things.txt`.

```bash
sort bunch_of_things.txt
```

### Parte 2 - Permissões

1. Navegue até a pasta `unix_tests.`

```bash
cd unix_tests
```

2. Rode o comando [ls](https://linux.die.net/man/1/ls) `-l` e veja quais as permissões dos arquivos.

```bash
ls -l
-rw-rw-r-- 1 igor igor 2781 jul  8 13:28 bunch_of_things.txt
```

3. Mude a permissão do arquivo `bunch_of_things.txt`para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`

> Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
> 

```bash
chmod a+rw
ls -l
-rw-rw-rw- 1 igor igor 2781 jul  8 13:28 bunch_of_things.txt
```

4. Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando `ls -l`

> Resultado esperado: `-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
> 

```bash
chmod a-w
ls 
-r--r--r-- 1 igor igor 2781 jul  8 13:28 bunch_of_things.txt
```

5. Volte à permissão do arquivo `bunch_of_things.txt`para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt`

> Resultado esperado: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
> 

```bash
chmod 644 bunch_of_things.txt
ls -l
-rw-r--r-- 1 igor igor 2781 jul  8 13:28 bunch_of_things.txt
```

### Parte 3 - Processos & Jobs

1. Liste todos os processos;

```bash
ps
```

2. Agora use o comando [sleep](https://linux.die.net/man/3/sleep) `30` [&](https://linuxhandbook.com/run-process-background/) ;

```bash
sleep 30&
	[1] 10027
```

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução ~~(mate o processo)~~;

```bash
kill 10027
	[1]  + terminated  sleep 30
```

4. Execute novamente o comando `sleep 30`, mas agora sem o `&`. Depois, faça com que ele continue executando em background;

```bash
sleep 30
ctrl + z
bg
```

5. Crie um processo em background que rode o comando `sleep` por 300 segundos.

```bash
sleep 300&
```

6. Crie mais dois processos que rodem o comando `sleep` por 200 e 100 segundos, respectivamente.

> Você deve criá-los em *foreground*(sem usar o `&`) e suspendê-los (apertando `ctrl+z`) após cada um começar a executar.
> 

```bash
sleep 200
ctrl + z
bg
sleep 100
ctrl + z
bg
```

7. Verifique que apenas o processo `sleep 300` está em execução com o comando `jobs`. Suspenda a execução desse processo.

> Você vai precisar trazer o processo para *foreground* (`fg`) e suspendê-lo (`ctrl+z`), ou enviar um sinal.
> 

```bash
jobs
fg
ctrl+c
```

8. Retome a execução do processo `sleep 100` em background com o comando `bg`.

```bash
bg %2
```

9. Termine a execução de todos os processos `sleep` ~~(mate os processos)~~.

```bash
killal sleep
```
