import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function CurriculoComputacao() {
  const [selectedSerie, setSelectedSerie] = useState(null);

  const series = useMemo(
    () => [
      {
        ano: "1º Ano",
        foco: "Informação, segurança e primeiros algoritmos",
        resumo:
          "Compreensão inicial da informação, codificação, uso seguro de artefatos computacionais e noções de sequência e algoritmo.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver nos estudantes competências relacionadas à compreensão da informação, representação por diferentes linguagens, uso seguro de artefatos computacionais e criação de sequências simples de passos em atividades lúdicas e contextualizadas.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Reconhecer o que é informação e compreender que ela pode ser armazenada, transmitida e representada por diferentes codificações.",
              conteudos: [
                {
                  nome: "O que é informação",
                  codigo: "EF01CO04",
                  habilidade:
                    "Reconhecer o que é a informação, que ela pode ser armazenada, transmitida como mensagem por diversos meios e descrita em várias linguagens.",
                },
                {
                  nome: "Formas de representar informação: desenho, som, fala, símbolos e imagens",
                  codigo: "EF01CO04",
                  habilidade:
                    "Reconhecer o que é a informação, que ela pode ser armazenada, transmitida como mensagem por diversos meios e descrita em várias linguagens.",
                },
                {
                  nome: "Codificação simples: cores, símbolos, códigos e pixel art inicial",
                  codigo: "EF01CO05",
                  habilidade: "Representar informação usando diferentes codificações.",
                },
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Reconhecer artefatos computacionais no cotidiano e conhecer possibilidades de uso seguro das tecnologias.",
              conteudos: [
                {
                  nome: "O computador e outros artefatos computacionais no dia a dia",
                  codigo: "EF01CO06",
                  habilidade:
                    "Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.",
                },
                {
                  nome: "Uso do computador, tablet, celular e outros dispositivos em situações de aprendizagem",
                  codigo: "EF01CO06",
                  habilidade:
                    "Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.",
                },
                {
                  nome: "Segurança e cuidados básicos no uso das tecnologias",
                  codigo: "EF01CO07",
                  habilidade:
                    "Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.",
                },
                {
                  nome: "Dados pessoais: nome, endereço, escola, fotos e informações da família",
                  codigo: "EF01CO07",
                  habilidade:
                    "Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.",
                },
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Desenvolver noções iniciais de organização, padrões, sequência de passos e algoritmos.",
              conteudos: [
                {
                  nome: "Organização e classificação de objetos físicos ou digitais",
                  codigo: "EF01CO01",
                  habilidade:
                    "Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.",
                },
                {
                  nome: "Padrões, semelhanças e diferenças",
                  codigo: "EF01CO01",
                  habilidade:
                    "Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.",
                },
                {
                  nome: "Sequência de passos em situações do cotidiano",
                  codigo: "EF01CO02",
                  habilidade:
                    "Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.",
                },
                {
                  nome: "Algoritmos simples com imagens, comandos orais ou cartões",
                  codigo: "EF01CO03",
                  habilidade:
                    "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra ‘Algoritmos’.",
                },
              ],
            },
          ],
        },
      },
      {
        ano: "2º Ano",
        foco: "Modelos, repetições, instruções de máquina e segurança",
        resumo:
          "Criação de modelos, algoritmos com repetições simples, diferenças entre hardware e software e cuidados no uso de dispositivos.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver a compreensão inicial de modelos, repetições, instruções de máquina, hardware, software e uso seguro das tecnologias em situações do cotidiano.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Compreender que máquinas executam instruções e diferenciar componentes físicos de programas.",
              conteudos: [
                {
                  nome: "Máquinas, comandos e conjuntos de instruções",
                  codigo: "EF02CO03",
                  habilidade:
                    "Identificar que máquinas diferentes executam conjuntos próprios de instruções e que podem ser usadas para definir algoritmos.",
                },
                {
                  nome: "Hardware e software",
                  codigo: "EF02CO04",
                  habilidade:
                    "Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware.",
                },
                {
                  nome: "Partes físicas do computador e programas usados em aula",
                  codigo: "EF02CO04",
                  habilidade:
                    "Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware.",
                },
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Reconhecer características, usos e cuidados relacionados às tecnologias computacionais dentro e fora da escola.",
              conteudos: [
                {
                  nome: "Tecnologias computacionais no cotidiano escolar e familiar",
                  codigo: "EF02CO05",
                  habilidade:
                    "Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.",
                },
                {
                  nome: "Ferramentas digitais simples para aprendizagem",
                  codigo: "EF02CO05",
                  habilidade:
                    "Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.",
                },
                {
                  nome: "Cuidados com dispositivos computacionais",
                  codigo: "EF02CO06",
                  habilidade:
                    "Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.",
                },
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Criar representações de objetos e simular algoritmos com sequências e repetições simples.",
              conteudos: [
                {
                  nome: "Modelagem de objetos: características e atributos essenciais",
                  codigo: "EF02CO01",
                  habilidade:
                    "Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.",
                },
                {
                  nome: "Padrões em objetos e representações",
                  codigo: "EF02CO01",
                  habilidade:
                    "Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.",
                },
                {
                  nome: "Algoritmos com repetições simples",
                  codigo: "EF02CO02",
                  habilidade:
                    "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo.",
                },
              ],
            },
          ],
        },
      },
      {
        ano: "3º Ano",
        foco: "Dados, informação, interfaces e decomposição",
        resumo:
          "Relação entre dado e informação, formatos de dados, entrada e saída, pesquisa, produção digital, lógica e decomposição.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver a compreensão sobre dados, informação, interfaces físicas, pesquisa, produção digital, lógica, algoritmos condicionais e decomposição.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Relacionar dado e informação, compreender formatos específicos de dados e reconhecer interfaces físicas de entrada e saída.",
              conteudos: [
                {
                  nome: "Dado e informação",
                  codigo: "EF03CO04",
                  habilidade: "Relacionar o conceito de informação com o de dado.",
                },
                {
                  nome: "Formatos de dados: texto, imagem, número, áudio e data",
                  codigo: "EF03CO05",
                  habilidade:
                    "Compreender que dados são estruturados em formatos específicos dependendo da informação armazenada.",
                },
                {
                  nome: "Dispositivos de entrada e saída: teclado, mouse, monitor, microfone, caixa de som e impressora",
                  codigo: "EF03CO06",
                  habilidade:
                    "Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas (dispositivos de entrada e saída).",
                },
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Utilizar ferramentas de busca, produzir em diferentes formatos digitais e reconhecer impactos do compartilhamento de informações pessoais.",
              conteudos: [
                {
                  nome: "Navegadores e ferramentas de busca",
                  codigo: "EF03CO07",
                  habilidade:
                    "Utilizar diferentes navegadores e ferramentas de busca para pesquisar e acessar informações.",
                },
                {
                  nome: "Produção digital com editor de texto, desenho, apresentação ou ferramenta educacional",
                  codigo: "EF03CO08",
                  habilidade:
                    "Usar ferramentas computacionais em situações didáticas para se expressar em diferentes formatos digitais.",
                },
                {
                  nome: "Compartilhamento de informações pessoais em meio digital",
                  codigo: "EF03CO09",
                  habilidade:
                    "Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.",
                },
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Trabalhar lógica, algoritmos com repetições condicionais simples e decomposição de problemas.",
              conteudos: [
                {
                  nome: "Sentenças lógicas: verdadeiro, falso e negação",
                  codigo: "EF03CO01",
                  habilidade:
                    "Associar os valores 'verdadeiro' e 'falso' a sentenças lógicas que dizem respeito a situações do dia a dia, fazendo uso de termos que indicam negação.",
                },
                {
                  nome: "Algoritmos com sequências e repetições condicionais simples",
                  codigo: "EF03CO02",
                  habilidade:
                    "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração.",
                },
                {
                  nome: "Decomposição de problemas em partes menores",
                  codigo: "EF03CO03",
                  habilidade:
                    "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.",
                },
              ],
            },
          ],
        },
      },
      {
        ano: "4º Ano",
        foco: "Matrizes, registros, codificação digital e ética",
        resumo:
          "Representação por matrizes e registros, algoritmos com repetições, codificação digital, produção de conteúdo, ética e confiabilidade das fontes.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver a compreensão de estruturas de representação, algoritmos com repetições, codificação digital, produção de conteúdo e uso ético de dados e fontes.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Entender a necessidade de codificar dados para armazenamento, manipulação e transmissão em formato digital.",
              conteudos: [
                {
                  nome: "Codificação digital: por que o computador precisa de códigos",
                  codigo: "EF04CO04",
                  habilidade:
                    "Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital).",
                },
                {
                  nome: "Binário, ASCII e atributos de pixel como RGB",
                  codigo: "EF04CO05",
                  habilidade:
                    "Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.).",
                },
                {
                  nome: "Representação digital de textos, imagens e cores",
                  codigo: "EF04CO05",
                  habilidade:
                    "Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.).",
                },
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Usar ferramentas computacionais para criação de conteúdo, demonstrando postura ética e verificando a confiabilidade das fontes.",
              conteudos: [
                {
                  nome: "Criação de conteúdo: textos, apresentações, imagens e vídeos",
                  codigo: "EF04CO06",
                  habilidade:
                    "Usar diferentes ferramentas computacionais para criação de conteúdo (textos, apresentações, vídeos etc.).",
                },
                {
                  nome: "Ética na coleta, guarda, transferência e uso de dados",
                  codigo: "EF04CO07",
                  habilidade:
                    "Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.",
                },
                {
                  nome: "Confiabilidade das fontes e pesquisa online",
                  codigo: "EF04CO08",
                  habilidade:
                    "Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.",
                },
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Reconhecer representações por matrizes e registros e criar algoritmos com repetições simples e aninhadas.",
              conteudos: [
                {
                  nome: "Matrizes: tabelas, grades, coordenadas, mapas e pixel art",
                  codigo: "EF04CO01",
                  habilidade:
                    "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações.",
                },
                {
                  nome: "Registros: fichas, cadastros, carteiras, boletins e formulários",
                  codigo: "EF04CO02",
                  habilidade:
                    "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de registros que estabelecem uma organização na qual cada componente é identificado por um nome, fazendo manipulações sobre estas representações.",
                },
                {
                  nome: "Algoritmos com repetições simples e aninhadas",
                  codigo: "EF04CO03",
                  habilidade:
                    "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples e aninhadas (iterações definidas e indefinidas), para resolver problemas de forma independente e em colaboração.",
                },
              ],
            },
          ],
        },
      },
      {
        ano: "5º Ano",
        foco: "Listas, grafos, arquitetura, sistema operacional e cidadania digital",
        resumo:
          "Listas, grafos, lógica, algoritmos com seleção, componentes do computador, armazenamento, sistema operacional, direitos autorais e análise crítica.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver autonomia na compreensão dos sistemas digitais, organização de informações, análise crítica de conteúdos e criação de soluções computacionais simples.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Identificar componentes principais de um computador, formas de armazenamento e papel do sistema operacional.",
              conteudos: [
                {
                  nome: "Componentes principais do computador: entrada, saída, processador e armazenamento",
                  codigo: "EF05CO05",
                  habilidade:
                    "Identificar os componentes principais de um computador (dispositivos de entrada/saída, processadores e armazenamento).",
                },
                {
                  nome: "Armazenamento local, removível e remoto/nuvem",
                  codigo: "EF05CO06",
                  habilidade:
                    "Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.",
                },
                {
                  nome: "Sistema operacional e gerenciamento do hardware e dos programas",
                  codigo: "EF05CO07",
                  habilidade:
                    "Reconhecer a necessidade de um sistema operacional para a execução de programas e gerenciamento do hardware.",
                },
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Acessar informações de forma crítica, respeitar direitos autorais, refletir sobre tecnologia e escolher ferramentas adequadas.",
              conteudos: [
                {
                  nome: "Informações confiáveis e não confiáveis na Internet",
                  codigo: "EF05CO08",
                  habilidade:
                    "Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.",
                },
                {
                  nome: "Direitos autorais no uso de textos, imagens, vídeos e músicas",
                  codigo: "EF05CO09",
                  habilidade:
                    "Usar informações considerando aplicações e limites dos direitos autorais em diferentes mídias digitais.",
                },
                {
                  nome: "Tecnologia, sociedade e mundo do trabalho",
                  codigo: "EF05CO10",
                  habilidade:
                    "Expressar-se crítica e criativamente na compreensão das mudanças tecnológicas no mundo do trabalho e sobre a evolução da sociedade.",
                },
                {
                  nome: "Escolha da tecnologia adequada para resolver problemas",
                  codigo: "EF05CO11",
                  habilidade:
                    "Identificar a adequação de diferentes tecnologias computacionais na resolução de problemas.",
                },
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Representar informações com listas e grafos, realizar operações lógicas e criar algoritmos com seleção condicional.",
              conteudos: [
                {
                  nome: "Listas: filas, listas de tarefas, pilhas e sequências organizadas",
                  codigo: "EF05CO01",
                  habilidade:
                    "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de listas que estabelecem uma organização na qual há um número variável de itens dispostos em sequência, fazendo manipulações simples sobre estas representações.",
                },
                {
                  nome: "Grafos: mapas, caminhos, redes, relações e conexões",
                  codigo: "EF05CO02",
                  habilidade:
                    "Reconhecer objetos do mundo real e digital que podem ser representados através de grafos que estabelecem uma organização com uma quantidade variável de vértices conectados por arestas, fazendo manipulações simples sobre estas representações.",
                },
                {
                  nome: "Lógica computacional: negação, conjunção e disjunção",
                  codigo: "EF05CO03",
                  habilidade:
                    "Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores 'verdadeiro' e 'falso'.",
                },
                {
                  nome: "Algoritmos com sequências, repetições e seleções condicionais",
                  codigo: "EF05CO04",
                  habilidade:
                    "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração.",
                },
              ],
            },
          ],
        },
      },
    ],
    []
  );

  const iconMap = {
    monitor: "💻",
    globe: "🌐",
    brain: "🧠",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
            Currículo Computação
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Fundamental I
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Proposta de currículo de Computação para o Ensino Fundamental I,
            organizada por séries, eixos, conteúdos e habilidades oficiais da BNCC de Computação.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">1º ao 5º ano</span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">BNCC Computação</span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">Mundo Digital</span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">Cultura Digital</span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">Pensamento Computacional</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Proposta</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Organizar o currículo de Computação por progressão anual, respeitando
              a faixa etária, a infraestrutura disponível e a realidade pedagógica da escola.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Objetivo</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Garantir que os estudantes desenvolvam cultura digital, autonomia no uso
              de tecnologias e base de pensamento computacional desde os anos iniciais.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Estrutura</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Cada série apresenta objetivo geral, eixos, conteúdos, códigos e habilidades.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <h2 className="text-2xl font-bold">Séries do Fundamental I</h2>
            <p className="mt-2 text-slate-600">
              Clique em “Ver planejamento” para abrir os detalhes organizados por eixos.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {series.map((serie) => (
              <motion.article
                key={serie.ano}
                layout
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{serie.ano}</h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    BNCC
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-cyan-700">{serie.foco}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{serie.resumo}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serie.eixos.map((eixo) => (
                    <span
                      key={eixo}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                    >
                      {eixo}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedSerie(serie)}
                  className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Ver planejamento
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">Expansões possíveis para o site</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Conteúdos por trimestre",
              "Atividades práticas e imprimíveis",
              "Área para baixar documentos em Word e PDF",
              "Filtro por código BNCC",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedSerie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    <span aria-hidden="true">📘</span>
                    Planejamento completo
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">{selectedSerie.ano}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    {selectedSerie.planejamento.objetivo}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSerie(null)}
                  className="rounded-2xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                  aria-label="Fechar modal"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <div className="max-h-[72vh] overflow-y-auto px-6 py-6">
                <div className="grid gap-6">
                  {selectedSerie.planejamento.eixos.map((eixo) => (
                    <section
                      key={eixo.titulo}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white p-3 text-cyan-700 shadow-sm ring-1 ring-slate-200">
                          <span className="text-xl" aria-hidden="true">{iconMap[eixo.icone]}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900">{eixo.titulo}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{eixo.objetivo}</p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {eixo.conteudos.map((conteudo) => (
                          <div
                            key={`${conteudo.codigo}-${conteudo.nome}`}
                            className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                {conteudo.codigo}
                              </span>
                              <span className="font-semibold text-slate-900">{conteudo.nome}</span>
                            </div>
                            <p className="mt-3 text-xs leading-5 text-slate-600">
                              {conteudo.habilidade}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
