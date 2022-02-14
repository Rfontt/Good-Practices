# DRY, KISS, YAGNI

- Dry(Don't repeat yourself): Jamais tenha código duplicado, crie uma função que represente esses códigos e reutilize-a;

- Kiss(Keep it simple stupid): Crie um código o mais simples possível, para que as pessoas possam dar manutenção sem quebrar a cabeça;

- Yagni(You aren't gonna need it): "Você não vai precisar disso agora", não desenvolva features que você não utilizar agora, para não atrasar as necessárias.

# S.O.L.I.D

- Single Responsibility Principle: Um módulo deve ter uma e apenas uma razão para mudar.

- Open/Closed Principle: O sistema deve ser abertos para extensão e fechados para modificação.

- Liskov Substitution Principle: A class filha pode herdar um comportamento da class base e sobrescrever um método se necessário.

- Interface Segreation Principle: Arquivos não devem depender de uma class que eles não usam.

- Dependency Inversion Principle: As dependências das nossas classes devem depender de abstrações e não de implementações.

# Abstract Factory Pattern

É bastante usado para criar interfaces dinâmicas.
Ele é um padrão criacional que nos permite criar famílias de objetos relacionados.