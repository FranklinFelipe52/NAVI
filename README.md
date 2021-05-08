# NAVI

### Como foi usado o Bootstrap
Primeiramente foi planejado de que forma iria ser usado o Bootstrap, existindo 3 opções: usar o link CDN, baixar os arquivos compilados do Bootstrap ou instalar o Bootstrap com os arquivos fontes SASS. Foi escolhida a ultima opção, pois com o link CDN poderia acontecer de o servidor do Bootstrap cair, ocasionando a quebra do site e com o código já compilado não poderíamos fazer as alterações necessárias, já que são mais de 5 mil linhas de código.

obs: Para instalação do Bootstrap e seus requisitos foi usado o node.js.

### Como foi feita as alterações dos arquivos SASS
Todas as alterações feitas nos arquivos SASS do Bootstrap foram feitos em variáveis de cor e comentados logo após.
Também foi criado um arquivo style.css na pasta Compiler dentro de Bootstrap, que foi compilado por arquivo SASS style.scss dentro da pasta scss também em Bootstrap.

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta: [Git](https://git-scm.com). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### executando localmente
```bash
# Clone este repositório
$ git clone <https://github.com/FranklinFelipe52/NAVI.git>

# abra a pasta do repositório em seu editor
```
