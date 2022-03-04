export const objects = [
  {
    id: "1",
    element_type: "html",
    content:
      "<h2>Java Example</h2>\n" +
      '<p>Perceba que a instrução <code class="inline">System.out.println()</code> gera uma saída de texto, criando uma nova\n' +
      "    linha e posicionando o cursor na linha abaixo, o que é identificado pela terminação “ln”.\n" +
      "No exemplo abaixo,\n" +
      "    passamos a string que será impressa na saída do console quando executarmos nosso programa Java. Podemos ver que\n" +
      "    serão impressas duas linhas com esse trecho de código. Se você clicar no console verá que o cursor estará na linha\n" +
      "    abaixo da frase “Segunda Linha”.</p>\n"
  },
  {
    id: "2",
    element_type: "code",
    language: "java",
    content:
      "public class HelloWorld {\n" +
      "public static void main(String[] args) {\n" +
      'System.out.println("Primeira Linha");\n' +
      'System.out.println("Segunda Linha");\n' +
      "}\n" +
      "}"
  },
  {
    id: "3",
    element_type: "html",
    content:
      "\n" +
      '<p>Por outro lado, a instrução <code class="inline">System.out.print()</code>, se você observar, não possui o “ln”,\n' +
      "    por isso exibe uma String sem criar uma nova linha, deixando o seu cursor na mesma linha. Execute essa alteração no\n" +
      "    código e veja que as duas frases foram impressas na mesma linha.</p>\n"
  },
  {
    id: "4",
    element_type: "code",
    language: "java",
    content:
      "public class HelloWorld {\n" +
      "public static void main(String[] args) {\n" +
      "System.out.print(&quot;Primeira Linha&quot;);\n" +
      "System.out.print(&quot;Será impresso também na primeira linha&quot;);\n" +
      "}\n" +
      "}"
  },
  {
    id: "5",
    element_type: "html",
    content:
      "\n" +
      "<p>Esses dois métodos são muito úteis quando estamos escrevendo programas em Java porque podemos ir imprimindo valores e\n" +
      "    mensagens no console, de forma que podemos ver como o nosso programa está se comportando.</p>\n"
  },
  {
    id: "6",
    element_type: "video",
    provider: "vimeo",
    url: "https://player.vimeo.com/video/144836297?",
    video_id: "144836297"
  },
  {
    id: "7",
    element_type: "code",
    language: "css",
    content: `body { color: red }`
  },
  {
    id: "8",
    element_type: "code",
    language: "html",
    content: `<ul>
  <li>item 1</li>
  <li>item 2</li>
</ul>`
  },
  {
    id: "9",
    element_type: "code",
    language: "javascript",
    content: `function HelloWorld () {
  console.log('Hello World!!!')
}`
  },
  {
    id: "10",
    element_type: "code",
    language: "jsx",
    content: `import React from 'react

export default function App () {
  return <h1>My App</h1>
}`
  },
  {
    id: "11",
    element_type: "code",
    language: "jsx",
    content: `import React from 'react

type Props = {
  title: string
}    

export default function App (props)  {
  const { title } = props
  return <h1>{title}</h1>
}`
  },
  {
    id: "12",
    element_type: "code",
    language: "shell",
    content: `ls -la`
  },
  {
    id: "13",
    element_type: "code",
    language: "sql",
    content: `SELECT FROM *`
  },
  {
    id: "14",
    element_type: "code",
    language: "typescript",
    content: `function HelloWorld () {
  console.log('Hello World!!!')
}`
  },
  {
    id: "15",
    element_type: "code",
    language: "csharp",
    content: `Document document = new Document();

    Page page = new Page(PageSize.Letter, PageOrientation.Portrait, 54.0f);
    document.Pages.Add(page);
    
    string labelText = "Hello World...\nFrom DynamicPDF Generator for .NET\nDynamicPDF.com";
    Label label = new Label(labelText, 0, 0, 504, 100, Font.Helvetica, 18, TextAlign.Center);
    page.Elements.Add(label);
    
    document.Draw("Output.pdf");}`
  },
  {
    id: "16",
    element_type: "code",
    language: "kotlin",
    content: `fun printMessage(message: String): Unit {
      println(message)
  }
  
  fun printMessageWithPrefix(message: String, prefix: String = "Info") {
      println("[$prefix] $message")
  }
  
  fun sum(x: Int, y: Int): Int {
      return x + y
  }`
  },
  {
    id: "17",
    element_type: "code",
    language: "python",
    content: `
    a = 5
    b = 6
    c = 7
  
    s = (a + b + c) / 2

    area = (s*(s-a)*(s-b)*(s-c)) ** 0.5
    print('The area of the triangle is %0.2f' %area)`
  }
  ,
  {
    id: "18",
    element_type: "code",
    language: "sql",
    content: `SELECT Count(*) AS DistinctCountries
    FROM (SELECT DISTINCT Country FROM Customers);`
  }
  ,
  {
    id: "19",
    element_type: "code",
    language: "sass",
    content:
      `
    $bgcolor: lightblue;
    $textcolor: darkblue;
    $fontsize: 18px;
    
    body {
      background-color: $bgcolor;
      color: $textcolor;
      font-size: $fontsize;
    }`
  }
  ,
  {
    id: "20",
    element_type: "code",
    language: "markdown",
    content: `Italicized text is the *cat's meow*.`
  }
];
