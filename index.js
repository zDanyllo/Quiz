const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Modelo de Objeto de Documento",
        "Documento de Objeto Manipulador",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Um tipo de erro",
        "Uma função que 'lembra' do ambiente em que foi criada",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores, sem verificar o tipo",
        "Atribuição de valores",
        "Comparação de valores, verificando o tipo",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adicionar estilos ao HTML",
        "Adicionar um ouvinte de eventos a um elemento",
        "Adicionar um novo elemento ao documento",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de intercâmbio de dados",
        "Um método de manipulação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de hoisting em JavaScript?",
      respostas: [
        "Elevar um elemento da página",
        "Elevar uma variável ou função para o topo do seu contexto de execução",
        "Agrupar código em módulos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "'null' é atribuído explicitamente a uma variável, enquanto 'undefined' é o valor padrão",
        "'null' é usado para representar ausência de valor, enquanto 'undefined' indica que uma variável não foi inicializada",
        "'null' e 'undefined' são equivalentes e podem ser usados indistintamente",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade da função 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número decimal",
        "Converter uma string em um número inteiro",
        "Converter um número em uma string",
      ],
      correta: 1
    },
  ];
  
  const quiz= document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
  
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
        quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
  }
  