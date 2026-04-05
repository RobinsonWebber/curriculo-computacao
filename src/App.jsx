import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Monitor, Globe, BrainCircuit } from "lucide-react";

export default function CurriculoComputacao() {
  const [selectedSerie, setSelectedSerie] = useState(null);

  const series = useMemo(
    () => [
      {
        ano: "1º Ano",
        foco: "Contato inicial com o mundo digital",
        resumo:
          "Reconhecimento dos dispositivos, cuidados básicos, uso do computador no cotidiano e introdução ao pensamento computacional de forma lúdica.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver nos estudantes competências relacionadas ao uso consciente da tecnologia, compreensão do funcionamento básico dos dispositivos digitais e desenvolvimento do pensamento computacional por meio de atividades lúdicas, interativas e contextualizadas.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Compreender o uso dos dispositivos digitais e reconhecer sua presença no cotidiano.",
              conteudos: [
                "O computador no dia a dia",
                "Ligando e desligando o computador",
                "Partes do computador",
                "Periféricos de entrada e saída",
                "Memória e armazenamento",
                "Hardware e software",
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Reconhecer o papel da tecnologia na comunicação, na aprendizagem e no cotidiano.",
              conteudos: [
                "A informática e sua importância",
                "Meios de comunicação",
                "Google e serviços digitais",
                "Profissões da tecnologia",
                "Segurança e cuidados básicos",
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Desenvolver noções iniciais de sequência, lógica e resolução de problemas de forma lúdica.",
              conteudos: [
                "Sequência e ordem",
                "Algoritmos simples",
                "Padrões",
                "Lógica e resolução de problemas",
                "Introdução à robótica",
              ],
            },
          ],
        },
      },
      {
        ano: "2º Ano",
        foco: "Lógica básica e usos da tecnologia",
        resumo:
          "Sequência, padrões, uso de ferramentas digitais simples, redes e comunicação de forma orientada.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver nos estudantes competências relacionadas ao uso consciente da tecnologia, compreensão do funcionamento dos dispositivos digitais e desenvolvimento do pensamento computacional por meio de atividades lúdicas, práticas e contextualizadas.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Compreender o funcionamento básico dos dispositivos digitais e reconhecer sua presença no cotidiano.",
              conteudos: [
                "Invenções e evolução do computador",
                "Hardware e software",
                "Partes internas do computador",
                "Experiência com periféricos",
                "Sistema operacional",
                "Smartphones e dispositivos móveis",
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Reconhecer o papel das tecnologias digitais na comunicação, aprendizagem e sociedade.",
              conteudos: [
                "Redes sociais educacionais",
                "Google Docs e ferramentas online",
                "Profissões da tecnologia",
                "Games educacionais",
                "Uso responsável da tecnologia",
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Desenvolver o pensamento computacional por meio de atividades envolvendo sequência, padrões, lógica e criação de instruções simples.",
              conteudos: [
                "Sequência de ações",
                "Padrões e repetições",
                "Lógica e resolução de problemas",
                "Instruções simples",
                "Introdução à robótica",
              ],
            },
          ],
        },
      },
      {
        ano: "3º Ano",
        foco: "Organização digital e produção de conteúdo",
        resumo:
          "Arquivos e pastas, editores de texto, planilhas, apresentações e lógica aplicada em atividades práticas.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver nos estudantes competências relacionadas ao uso consciente da tecnologia, compreensão do funcionamento dos sistemas computacionais e desenvolvimento do pensamento computacional por meio de atividades práticas, lúdicas e contextualizadas.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Compreender o funcionamento dos sistemas computacionais, seus componentes e a organização das informações digitais.",
              conteudos: [
                "Sociedade e tecnologia",
                "Entrada, processamento e saída",
                "Hardware e software",
                "Partes do computador",
                "Arquivos e pastas",
                "Sistema operacional",
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Compreender o uso das tecnologias digitais na comunicação, produção de conteúdo e na sociedade.",
              conteudos: [
                "Editores de texto",
                "Planilhas",
                "Apresentações",
                "Internet",
                "Redes sociais educacionais",
                "Inteligência Artificial",
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Desenvolver o pensamento computacional por meio de atividades envolvendo sequência, padrões, lógica e criação de instruções simples.",
              conteudos: [
                "Sequência e organização de tarefas",
                "Padrões e regularidades",
                "Lógica e resolução de problemas",
                "Algoritmos simples",
                "Introdução à robótica",
              ],
            },
          ],
        },
      },
      {
        ano: "4º Ano",
        foco: "Representação digital e algoritmos",
        resumo:
          "Organização da informação, segurança digital, representação por pixels e códigos, além de robótica introdutória.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver nos estudantes competências relacionadas ao uso consciente da tecnologia, compreensão do funcionamento dos sistemas computacionais e desenvolvimento do pensamento computacional por meio de atividades práticas, lúdicas e contextualizadas.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Compreender a evolução dos computadores, o funcionamento dos dispositivos digitais e a organização das informações em ambientes computacionais.",
              conteudos: [
                "História e evolução dos computadores",
                "Tipos de hardware e periféricos",
                "Impressoras e formas de impressão",
                "Software, dados e armazenamento",
                "Sistema operacional e organização de arquivos",
                "Smartphone como ferramenta de aprendizagem",
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Utilizar tecnologias digitais de forma crítica, segura e criativa na comunicação, pesquisa, produção de conteúdo e aprendizagem.",
              conteudos: [
                "Word e Google Documentos",
                "Excel e Google Planilhas",
                "PowerPoint e Google Apresentações",
                "Internet e pesquisa online",
                "Segurança digital",
                "Comunicação digital",
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Desenvolver o pensamento computacional por meio de atividades envolvendo sequência, padrões, lógica, algoritmos e representação da informação digital.",
              conteudos: [
                "Sequência lógica e organização de etapas",
                "Padrões e regularidades",
                "Lógica e resolução de problemas",
                "Algoritmos simples e comandos",
                "Representação digital",
                "Robótica educacional",
              ],
            },
          ],
        },
      },
      {
        ano: "5º Ano",
        foco: "Autonomia digital e aplicação prática",
        resumo:
          "Produção de documentos, pesquisa eficiente, cidadania digital, backup, segurança e pensamento computacional funcional.",
        eixos: ["Mundo Digital", "Cultura Digital", "Pensamento Computacional"],
        planejamento: {
          objetivo:
            "Desenvolver nos estudantes competências relacionadas ao uso consciente da tecnologia, compreensão dos sistemas digitais e aplicação do pensamento computacional em atividades práticas, contextualizadas e significativas.",
          eixos: [
            {
              titulo: "Mundo Digital",
              icone: "monitor",
              objetivo:
                "Compreender o funcionamento dos sistemas digitais, os diferentes dispositivos tecnológicos e sua aplicação no cotidiano.",
              conteudos: [
                "Importância da tecnologia na sociedade",
                "Novos computadores e dispositivos inteligentes",
                "Sistemas operacionais",
                "Organização e backup de dados",
                "Segurança digital",
              ],
            },
            {
              titulo: "Cultura Digital",
              icone: "globe",
              objetivo:
                "Utilizar tecnologias digitais para produção, comunicação e aprendizagem de forma crítica, ética e responsável.",
              conteudos: [
                "Word e Google Docs",
                "Excel e Google Planilhas",
                "PowerPoint e Google Apresentações",
                "Internet e pesquisa eficiente",
                "Redes sociais e uso responsável",
                "Profissões da era digital",
              ],
            },
            {
              titulo: "Pensamento Computacional",
              icone: "brain",
              objetivo:
                "Desenvolver o pensamento computacional por meio de atividades envolvendo sequência, lógica e resolução de problemas do cotidiano.",
              conteudos: [
                "Sequência e organização de tarefas",
                "Lógica e resolução de problemas",
                "Instruções e algoritmos simples",
                "Interpretação de comandos",
                "Robótica conceitual",
              ],
            },
          ],
        },
      },
    ],
    []
  );

  const iconMap = {
    monitor: <Monitor className="h-5 w-5" />,
    globe: <Globe className="h-5 w-5" />,
    brain: <BrainCircuit className="h-5 w-5" />,
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
            Uma proposta de currículo de Computação para o Ensino Fundamental I,
            organizada por séries, alinhada aos eixos da BNCC de Computação e
            pensada para a realidade da escola pública.
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
              Cada série apresenta objetivo geral e os conteúdos organizados pelos três eixos.
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
              "Habilidades BNCC por ano",
              "Conteúdos por trimestre",
              "Atividades práticas e imprimíveis",
              "Área para baixar documentos em Word e PDF",
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
                    <BookOpen className="h-4 w-4" />
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
                  <X className="h-5 w-5" />
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
                          {iconMap[eixo.icone]}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900">{eixo.titulo}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{eixo.objetivo}</p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {eixo.conteudos.map((conteudo) => (
                          <div
                            key={conteudo}
                            className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200"
                          >
                            {conteudo}
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
