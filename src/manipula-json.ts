// importar apenas as funções que precisamos utilizar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync, mkdir,  } from "fs"
import { stringify } from "querystring";

// 1. Definição do Tipo do Dado (Model)
    type Livro = {
        titulo: string;
        autor: string;
        ano: number;
        lido: boolean;
};

// 2. Lista Inicial de Dados (Mock Data)
    const livros: Livro[] = [
        { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, lido: true},
        {titulo: "1984", autor: "George Orwell", ano: 1949, lido: false},
    ];

// 3. Verificação e Criação do Diretório "dados"
    const pasta = "./dados";
    if (!existsSync(pasta)) { // Verifica a existencia do caminho
        mkdirSync(pasta); // Caso não exista ele cria uma pasta com o nome "data"
    }

// 4. Dalvando os dados convertidos na pasta de JSON
    const caminho = `${pasta}/livros,json`;
    writeFileSync(caminho, JSON.stringify(livros, null, 2));
    console.log("Dados salvos com sucesso! ✅");

// 5. Lendo os dados de volta e convertendo em objetos
    const textoLido = readFileSync(caminho, "utf-8");
    const livrosRecuperados: Livro[] = JSON.parse(textoLido);

// 6. Exibição Formatada do Conteúdo Recuperado
    console.log("\n ==== 📚 LIVROS RECUPERADOS 📚 ====")
    livrosRecuperados.forEach((livro, index) => {
        const status = livro.lido ? "✅ Lido" : "❌ Não lido";
        console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - ${status}`);
});