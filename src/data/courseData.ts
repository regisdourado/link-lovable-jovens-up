
export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
  isNew?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: string;
  moduleId: string;
  order: number;
  completed?: boolean;
  locked?: boolean;
  hasBadge?: boolean;
  badgeTitle?: string;
  quiz?: Quiz;
  challenge?: Challenge;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Challenge {
  title: string;
  description: string;
  action: string;
  badgeTitle?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
}

export const moduleData: Module[] = [
  {
    id: "mod1",
    title: "Introdução ao LinkedIn e Marca Pessoal",
    description: "Aprenda o básico do LinkedIn e como construir sua marca pessoal para se destacar no mercado.",
    order: 1,
    lessons: [
      {
        id: "lesson1-1",
        title: "O que é o LinkedIn e por que ele é importante",
        description: "Entenda o poder do LinkedIn para jovens aprendizes e como ele pode impulsionar sua carreira.",
        content: `
          # O LinkedIn é Seu Aliado na Carreira!

          E aí, pronto(a) para dar um up na sua carreira? O LinkedIn é a maior rede social profissional do mundo, com mais de 900 milhões de usuários! É como se fosse o Instagram das oportunidades profissionais 🚀

          ## Por que o LinkedIn é importante pra você?

          - **Visibilidade profissional**: Recrutadores estão sempre de olho em novos talentos
          - **Networking**: Conecte-se com profissionais da sua área de interesse
          - **Oportunidades**: Acesse vagas exclusivas para jovens aprendizes e estágios
          - **Aprendizado**: Conteúdo gratuito sobre mercado de trabalho e habilidades

          > "73% dos jovens que conseguem seu primeiro emprego tiveram o LinkedIn como ferramenta de apoio na busca"

          ## Como o LinkedIn se compara a outras redes?

          | Rede Social | Foco | Benefício Principal |
          |---|---|---|
          | LinkedIn | Profissional | Oportunidades de carreira |
          | Instagram | Pessoal/Social | Entretenimento |
          | TikTok | Entretenimento | Diversão e tendências |
          | Twitter | Notícias/Opiniões | Informação rápida |

          O LinkedIn é onde você mostra sua versão profissional - suas habilidades, experiências e objetivos de carreira!
        `,
        duration: "3 min",
        moduleId: "mod1",
        order: 1,
        completed: false,
        locked: false,
        quiz: {
          question: "Qual é o principal diferencial do LinkedIn em relação a outras redes sociais?",
          options: [
            "Compartilhar fotos e vídeos pessoais",
            "Foco em oportunidades profissionais e networking",
            "Publicar conteúdo de entretenimento",
            "Seguir celebridades e influenciadores"
          ],
          correctAnswer: 1,
          explanation: "O LinkedIn é uma rede social profissional focada em conexões de trabalho, diferente de outras redes que são centradas em conteúdo pessoal ou entretenimento."
        }
      },
      {
        id: "lesson1-2",
        title: "Sua marca pessoal: o que é e por que importa",
        description: "Descubra como criar uma marca pessoal autêntica e atrair as oportunidades certas.",
        content: `
          # Sua Marca Pessoal é seu Superpoder!

          Sua marca pessoal é como as pessoas te veem profissionalmente - é sua reputação e o que te diferencia dos outros candidatos 💫

          ## Por que sua marca pessoal importa:

          - **Destaque**: Com tantos jovens buscando oportunidades, como você se destaca?
          - **Confiança**: Recrutadores contratam quem transmite credibilidade
          - **Oportunidades**: As portas se abrem para quem tem uma marca forte
          - **Autenticidade**: Mostre quem você realmente é (de forma profissional!)

          ## Elementos da sua marca pessoal:

          - **Valores**: O que é importante para você?
          - **Habilidades**: O que você faz bem?
          - **Paixões**: O que te motiva todos os dias?
          - **História**: Qual é sua jornada até aqui?

          ## Como o LinkedIn ajuda a construir sua marca:

          ![Marca Pessoal](https://media.licdn.com/dms/image/D4D12AQHSZa9DQ0yFhQ/article-cover_image-shrink_720_1280/0/1677067484466?e=2147483647&v=beta&t=dYOyTKIdpbPm6DPsASAZW6a9OiJfqvZ5-cAYABgkdFM)

          No LinkedIn, cada postagem, comentário e conexão fortalece sua marca pessoal. É como construir seu "nome" no mercado, mesmo antes de ter muita experiência!
        `,
        duration: "4 min",
        moduleId: "mod1",
        order: 2,
        completed: false,
        locked: false,
        hasBadge: true,
        badgeTitle: "Estrategista",
        challenge: {
          title: "Defina sua marca pessoal",
          description: "Escreva em uma folha ou bloco de notas três valores, três habilidades e um objetivo profissional que representam você.",
          action: "Completar desafio",
          badgeTitle: "Estrategista"
        }
      },
      {
        id: "lesson1-3",
        title: "Público-alvo: com quem você quer se conectar?",
        description: "Identifique seu público-alvo no LinkedIn para criar conexões estratégicas.",
        content: `
          # Conecte-se com as Pessoas Certas!

          No LinkedIn, não é sobre ter MUITAS conexões, é sobre ter as CONEXÕES CERTAS! 🎯

          ## Quem deve estar na sua rede:

          - **Profissionais da sua área de interesse**: Pessoas que já trabalham onde você sonha em trabalhar
          - **Recrutadores e RHs**: São eles que podem te chamar para entrevistas
          - **Outros jovens aprendizes**: Para trocar experiências e apoio
          - **Professores e mentores**: Para conselho e orientação

          ## Como identificar seu público-alvo:

          1. **Defina seus objetivos**: O que você quer conquistar?
          2. **Pesquise empresas**: Onde você gostaria de trabalhar?
          3. **Identifique funções**: Quais cargos te interessam?
          4. **Encontre pessoas**: Quem já está onde você quer chegar?

          ## Dica de ouro:

          > "É melhor ter 100 conexões relevantes que realmente podem ajudar sua carreira do que 1000 conexões aleatórias que não trazem valor."

          Lembre-se: seu tempo e energia são limitados. Conecte-se estrategicamente!
        `,
        duration: "3 min",
        moduleId: "mod1",
        order: 3,
        completed: false,
        locked: true,
        quiz: {
          question: "Qual estratégia é mais eficaz para construir sua rede no LinkedIn?",
          options: [
            "Conectar-se com o maior número possível de pessoas",
            "Conectar-se apenas com amigos e familiares",
            "Conectar-se estrategicamente com profissionais da sua área de interesse",
            "Evitar conexões até ter experiência profissional"
          ],
          correctAnswer: 2,
          explanation: "Conexões estratégicas com profissionais da sua área de interesse são mais valiosas que muitas conexões aleatórias ou apenas conexões pessoais."
        }
      }
    ]
  },
  {
    id: "mod2",
    title: "Criação e Otimização do Perfil",
    description: "Monte um perfil profissional atrativo que chame a atenção de recrutadores e empresas.",
    order: 2,
    lessons: [
      {
        id: "lesson2-1",
        title: "Foto e capa perfeitas: primeira impressão",
        description: "Aprenda a escolher fotos profissionais que causam boa impressão.",
        content: `
          # Sua Imagem Vale Mais que Mil Palavras!

          Perfis com foto profissional recebem até 21x mais visualizações e 36x mais mensagens! 📸

          ## Como escolher a foto perfeita:

          - **Rosto visível**: Close no rosto, sorrindo
          - **Fundo neutro**: Sem distrações
          - **Luz natural**: Evite fotos escuras ou com flash forte
          - **Roupa adequada**: Algo que você usaria em uma entrevista casual
          - **Atualizada**: Deve parecer com você atualmente

          ## O que EVITAR:

          - Fotos em festas ou com outras pessoas
          - Selfies com baixa qualidade
          - Fotos muito antigas
          - Imagens com filtros exagerados
          - Fotos sem você (como paisagens ou logos)

          ## Sua capa também importa!

          A capa é seu "outdoor" - use para mostrar:
          - Seu interesse profissional
          - Formação
          - Cidade onde mora/quer trabalhar
          - Uma frase motivacional que te representa

          ## Dica extra:
          Peça opinião sincera de amigos ou familiares antes de publicar!
        `,
        duration: "4 min",
        moduleId: "mod2",
        order: 1,
        completed: false,
        locked: false,
        challenge: {
          title: "Atualize sua foto de perfil",
          description: "Tire uma nova foto profissional seguindo as dicas da aula e atualize seu perfil do LinkedIn.",
          action: "Marcar como concluído"
        }
      },
      {
        id: "lesson2-2",
        title: "Título e resumo que chamam atenção",
        description: "Crie um título e resumo estratégicos que destacam seu potencial.",
        content: `
          # Seu Título: O Chamariz do Perfil!

          Seu título é uma das primeiras coisas que as pessoas veem - use-o estrategicamente! ✨

          ## Exemplos de bons títulos:

          - "Estudante de Administração | Jovem Aprendiz em Logística | Interessado em Gestão de Projetos"
          
          - "Estudante de TI | Conhecimentos em Python e HTML | Em busca de primeiro estágio em Desenvolvimento"
          
          - "Jovem Aprendiz em Atendimento ao Cliente | Comunicativo e Organizado | Futuro profissional de Marketing"

          ## Seu resumo deve contar sua história:

          1. **Quem você é**: Sua formação e momento atual
          2. **O que você sabe fazer**: Habilidades e conhecimentos
          3. **O que você busca**: Objetivos claros
          4. **Como te contactar**: Email profissional

          ## Exemplo de resumo:

          > "Estudante de Administração no 2º semestre, atualmente Jovem Aprendiz na empresa XYZ onde aprendo sobre processos administrativos e atendimento ao cliente.
          >
          > Possuo habilidades em organização, Excel básico e comunicação. Sou dedicado, aprendo rápido e busco crescimento profissional.
          >
          > Busco oportunidades em Administração ou áreas correlatas onde possa desenvolver minha carreira.
          >
          > Contato: seuemail@gmail.com"

          Lembre-se: Seja autêntico e direto! Ninguém gosta de ler textos enormes.
        `,
        duration: "5 min",
        moduleId: "mod2",
        order: 2,
        completed: false,
        locked: false,
        hasBadge: true,
        badgeTitle: "Perfil Campeão",
        quiz: {
          question: "O que seu título no LinkedIn deve conter?",
          options: [
            "Apenas seu cargo atual ou status de estudante",
            "Informações pessoais como idade e cidade",
            "Uma combinação de sua situação atual, habilidades e interesses profissionais",
            "Apenas o nome da sua escola ou faculdade"
          ],
          correctAnswer: 2,
          explanation: "Um bom título de LinkedIn combina sua situação atual (estudante/aprendiz), suas principais habilidades e seus interesses profissionais para criar um panorama completo."
        }
      },
      {
        id: "lesson2-3",
        title: "Experiências e formação: o que incluir",
        description: "Aprenda a destacar experiências relevantes, mesmo sem histórico profissional formal.",
        content: `
          # Sem experiência? Sem problema!

          Todo mundo começa de algum lugar. Como destacar o que você já fez (mesmo achando que não fez nada)! 🌱

          ## O que incluir mesmo sem experiência formal:

          - **Projetos escolares**: Trabalhos em grupo, apresentações
          - **Trabalho voluntário**: Mesmo que pontual
          - **Cursos e certificações**: Presenciais ou online
          - **Eventos e workshops**: Participação em palestras, hackathons
          - **Habilidades pessoais**: Organização, comunicação, pontualidade

          ## Como estruturar sua experiência:

          Para cada item, inclua:
          - Nome da atividade/projeto
          - Organização/escola
          - Período (mês/ano - mês/ano)
          - 2-3 realizações ou aprendizados principais
          - Competências desenvolvidas

          ## Exemplo:

          **Projeto Feira de Ciências**
          Escola Estadual XYZ
          mar/2023 - jun/2023

          - Liderei equipe de 4 pessoas no desenvolvimento de projeto sobre sustentabilidade
          - Realizei apresentação para mais de 100 pessoas incluindo professores e comunidade
          - Desenvolvido: trabalho em equipe, pesquisa, comunicação oral

          ## Dica de ouro:
          Seja honesto, mas não subestime suas experiências! O que para você parece simples pode demonstrar habilidades valiosas para empregadores.
        `,
        duration: "4 min",
        moduleId: "mod2",
        order: 3,
        completed: false,
        locked: true,
        challenge: {
          title: "Adicione uma experiência",
          description: "Adicione ao seu LinkedIn pelo menos uma experiência seguindo o formato apresentado na aula.",
          action: "Marcar como concluído",
          badgeTitle: "Perfil Campeão"
        }
      }
    ]
  },
  {
    id: "mod3",
    title: "Networking, Conteúdo e Oportunidades",
    description: "Aprenda a expandir sua rede, compartilhar conteúdo e encontrar oportunidades.",
    order: 3,
    lessons: [
      {
        id: "lesson3-1",
        title: "Conexões estratégicas: como e com quem se conectar",
        description: "Aprenda técnicas para fazer networking efetivo no LinkedIn.",
        content: `
          # Conexões que Abrem Portas!

          No LinkedIn, a qualidade das suas conexões é mais importante que a quantidade. Vamos aprender a conectar estrategicamente! 🤝

          ## Como encontrar as pessoas certas:

          - **Use a barra de pesquisa**: Busque por cargo + empresa + localização
          - **Explore sugestões**: LinkedIn recomenda conexões relevantes
          - **Veja "quem viu seu perfil"**: Pessoas já interessadas em você
          - **Explore conexões de 2º grau**: Amigos de amigos

          ## Mensagem personalizada: faz toda diferença!

          ❌ **NÃO FAÇA ISSO:**
          "Olá, gostaria de adicionar você à minha rede."

          ✅ **FAÇA ISSO:**
          "Olá [Nome], sou estudante de [Curso] e estou começando minha jornada profissional em [Área]. Admiro seu trabalho na [Empresa] e adoraria conectar para aprender mais sobre a área. Obrigado!"

          ## Sua meta semanal:
          
          - Adicione 5-10 novas conexões estratégicas por semana
          - Comente em 3 publicações de sua rede
          - Responda a todos que aceitarem sua conexão

          > "Networking não é sobre coletar contatos, é sobre plantar relacionamentos." - Susan RoAne
        `,
        duration: "4 min",
        moduleId: "mod3",
        order: 1,
        completed: false,
        locked: false,
        quiz: {
          question: "Qual é a melhor abordagem ao enviar uma solicitação de conexão no LinkedIn?",
          options: [
            "Enviar solicitações em massa sem mensagem personalizada",
            "Enviar uma mensagem personalizada explicando por que você quer se conectar",
            "Esperar que as pessoas te encontrem e enviem solicitações",
            "Conectar-se apenas com pessoas que você conhece pessoalmente"
          ],
          correctAnswer: 1,
          explanation: "Mensagens personalizadas demonstram interesse genuíno e aumentam significativamente suas chances de ter a solicitação aceita."
        }
      },
      {
        id: "lesson3-2",
        title: "Criando conteúdo para se destacar",
        description: "Saiba como criar posts que mostram seu valor e conhecimento.",
        content: `
          # Crie Conteúdo que Impressiona!

          Compartilhar conteúdo relevante é uma das melhores formas de ser notado! 📝

          ## Tipos de conteúdo para iniciantes:

          - **Compartilhe aprendizados**: Cursos, livros, eventos
          - **Celebre conquistas**: Certificações, projetos escolares
          - **Faça perguntas**: Mostre curiosidade sobre a área
          - **Comente notícias**: Sobre seu setor de interesse

          ## Formato de post de sucesso:

          1. **Gancho de abertura**: Frase que chama atenção
          2. **Conteúdo principal**: Sua ideia ou experiência
          3. **Formatação**: Parágrafos curtos, emojis, espaço em branco
          4. **Call to action**: Pergunta ou convite à interação
          5. **Hashtags**: 3-5 relevantes (#JovemAprendiz #PrimeiroEmprego)

          ## Exemplo de post:

          > "Hoje completei meu primeiro mês como jovem aprendiz! 🎉
          >
          > 3 coisas que aprendi até agora:
          > 
          > ✅ A importância da comunicação clara
          > ✅ Como organizar meu tempo entre estudos e trabalho
          > ✅ O valor de fazer perguntas quando tenho dúvidas
          >
          > Estou amando essa jornada de aprendizado na área administrativa!
          >
          > E você, qual foi o maior aprendizado no seu primeiro emprego?
          >
          > #JovemAprendiz #PrimeiroEmprego #Aprendizado"

          ## Frequência ideal:
          1-2 posts por semana já é suficiente para começar a ganhar visibilidade!
        `,
        duration: "5 min",
        moduleId: "mod3",
        order: 2,
        completed: false,
        locked: false,
        hasBadge: true,
        badgeTitle: "Criador de Conteúdo",
        challenge: {
          title: "Crie seu primeiro post",
          description: "Crie e publique seu primeiro post no LinkedIn seguindo as dicas desta lição.",
          action: "Marcar como concluído",
          badgeTitle: "Criador de Conteúdo"
        }
      },
      {
        id: "lesson3-3",
        title: "Encontrando e se candidatando a oportunidades",
        description: "Descubra como localizar e se candidatar a vagas para jovens aprendizes e estagiários.",
        content: `
          # Encontre Sua Oportunidade Ideal!

          O LinkedIn tem ferramentas poderosas para encontrar vagas, especialmente para quem está começando! 🔍

          ## Onde encontrar vagas:

          - **Aba "Vagas"**: Pesquise por "jovem aprendiz", "aprendiz", "estágio"
          - **Feed de notícias**: Recrutadores postam oportunidades
          - **Páginas de empresas**: Várias têm seção de carreiras
          - **Grupos**: Participe de grupos de jovens profissionais

          ## Filtros importantes:

          - Nível de experiência: "Estágio" ou "Assistente"
          - Local: Sua cidade ou "Remoto"
          - Data de publicação: Priorize vagas recentes (últimos 7 dias)

          ## Candidatura efetiva:

          1. **Leia atentamente**: Entenda os requisitos
          2. **Personalize**: Adapte seu perfil para cada vaga
          3. **Seja rápido**: Candidate-se nas primeiras 24h
          4. **Follow up**: Encontre e conecte com recrutadores

          ## Dica de alerta de vagas:

          Configure alertas no LinkedIn:
          1. Faça uma pesquisa com seus termos de interesse
          2. Clique em "Criar alerta de vaga"
          3. Escolha frequência (diária é o ideal)

          Assim você será notificado sobre novas oportunidades sem precisar checar todos os dias!
        `,
        duration: "4 min",
        moduleId: "mod3",
        order: 3,
        completed: false,
        locked: true,
        quiz: {
          question: "Qual estratégia aumenta suas chances ao se candidatar para vagas no LinkedIn?",
          options: [
            "Candidatar-se para o maior número possível de vagas sem ler os detalhes",
            "Esperar algumas semanas após a publicação para ter menos concorrência",
            "Candidatar-se rapidamente e personalizar seu perfil para cada vaga específica",
            "Enviar mensagens diretas para todos os funcionários da empresa"
          ],
          correctAnswer: 2,
          explanation: "Candidaturas rápidas (nas primeiras 24h) e personalizadas mostram seu interesse genuíno e aumentam significativamente suas chances de sucesso."
        }
      }
    ]
  },
  {
    id: "mod4",
    title: "Otimização Avançada e Preparação para o Mercado",
    description: "Domine técnicas avançadas e prepare-se para oportunidades reais.",
    order: 4,
    lessons: [
      {
        id: "lesson4-1",
        title: "Recomendações e validações de habilidades",
        description: "Aprenda a solicitar recomendações e validar suas habilidades para ganhar credibilidade.",
        content: `
          # Prove Seu Valor com Social Proof!

          Recomendações e validações são como "depoimentos" sobre suas habilidades e caráter! 👍

          ## Validações de habilidades:

          - Liste habilidades relevantes no seu perfil (máx. 50)
          - Priorize as mais importantes para sua área
          - Peça a colegas, professores e familiares para validar
          - Faça testes de habilidades do LinkedIn

          ## Top 10 habilidades para jovens aprendizes:

          1. Microsoft Office (Word, Excel, PowerPoint)
          2. Comunicação
          3. Trabalho em equipe
          4. Organização
          5. Atendimento ao cliente
          6. Adaptabilidade
          7. Proatividade
          8. Resolução de problemas
          9. Aprendizado rápido
          10. Pontualidade

          ## Como pedir recomendações:

          1. Identifique pessoas que conhecem seu trabalho (professores, supervisores)
          2. Envie mensagem personalizada explicando o motivo
          3. Sugira pontos específicos que poderiam mencionar

          ## Modelo de mensagem:

          > "Olá [Nome],
          >
          > Espero que esteja bem! Estou aprimorando meu perfil no LinkedIn e sua opinião seria muito valiosa para mim.
          >
          > Você poderia escrever uma breve recomendação sobre nossa experiência trabalhando juntos no [projeto/aula/atividade]? Se possível, gostaria que mencionasse minha capacidade de [habilidade específica] e [outra habilidade].
          >
          > Agradeço muito sua ajuda!
          >
          > [Seu nome]"

          Lembre-se: recomendações de qualidade são melhores que quantidade! Uma boa recomendação de um professor vale mais que várias genéricas.
        `,
        duration: "4 min",
        moduleId: "mod4",
        order: 1,
        completed: false,
        locked: false,
        challenge: {
          title: "Adicione suas habilidades",
          description: "Adicione pelo menos 5 habilidades relevantes ao seu perfil do LinkedIn e peça validações.",
          action: "Marcar como concluído"
        }
      },
      {
        id: "lesson4-2",
        title: "Interagindo com recrutadores",
        description: "Aprenda a comunicar-se profissionalmente com recrutadores e aproveitar oportunidades.",
        content: `
          # Impressione os Recrutadores!

          Recrutadores são seus aliados na busca por oportunidades! Saiba como interagir com eles. 🤝

          ## Quando um recrutador visualiza seu perfil:

          1. Confira o perfil dele(a)
          2. Veja em que empresa trabalha
          3. Envie uma mensagem cordial:

          > "Olá [Nome], 
          >
          > Vi que você visualizou meu perfil. Sou um jovem aprendiz com interesse na área de [sua área]. 
          >
          > Gostaria de saber se meu perfil seria adequado para alguma oportunidade em sua empresa, ou se teria alguma dica para melhorá-lo.
          >
          > Obrigado(a) pela atenção!"

          ## Quando um recrutador te contacta:

          - Responda em até 24h
          - Seja profissional e educado
          - Mostre entusiasmo, mas não desespero
          - Pesquise sobre a empresa antes de responder
          - Pergunte detalhes sobre a vaga

          ## Erros comuns a evitar:

          ❌ Respostas muito informais ("e aí, blz?")
          ❌ Perguntar sobre salário logo no primeiro contato
          ❌ Enviar a mesma mensagem genérica para vários recrutadores
          ❌ Não fazer follow-up após entrevistas ou testes

          ## Dica profissional:
          Mantenha um documento com todas as vagas que se candidatou, datas e status para organização e follow-up!
        `,
        duration: "3 min",
        moduleId: "mod4",
        order: 2,
        completed: false,
        locked: false,
        hasBadge: true,
        badgeTitle: "Comunicador Pro",
        quiz: {
          question: "Qual é a melhor abordagem ao responder a um recrutador?",
          options: [
            "Responder imediatamente, mesmo que de forma apressada",
            "Responder em até 24h, de forma profissional, mostrando entusiasmo e conhecimento sobre a empresa",
            "Negociar salário e benefícios na primeira mensagem",
            "Esperar alguns dias para mostrar que você não está desesperado"
          ],
          correctAnswer: 1,
          explanation: "Respostas dentro de 24h mostram profissionalismo e interesse, e pesquisar sobre a empresa antes demonstra comprometimento."
        }
      },
      {
        id: "lesson4-3",
        title: "Do LinkedIn para o mundo real: entrevistas",
        description: "Prepare-se para transformar conexões online em oportunidades reais.",
        content: `
          # Da Tela para a Vida Real!

          O LinkedIn é só o começo - aprenda a se preparar para o próximo passo: as entrevistas! 🚀

          ## Como o LinkedIn ajuda nas entrevistas:

          - Pesquise sobre a empresa e seus valores
          - Conheça os entrevistadores antes (veja seus perfis)
          - Analise as habilidades mais pedidas nas vagas
          - Identifique funcionários atuais (para insights)

          ## Perguntas comuns em entrevistas:

          1. **"Fale sobre você"**
          Estrutura: formação + interesse + objetivo
          
          2. **"Por que quer trabalhar conosco?"**
          Mencione algo específico sobre a empresa
          
          3. **"Qual é sua maior qualidade/desafio?"**
          Seja honesto, mas estratégico
          
          4. **"Onde se vê em 5 anos?"**
          Mostre ambição realista e alinhada à empresa

          ## O que pesquisar antes da entrevista:

          - História da empresa
          - Valores e cultura
          - Produtos/serviços principais
          - Notícias recentes
          - Perfil dos entrevistadores

          ## Após a entrevista:

          Envie uma mensagem de agradecimento:

          > "Olá [Nome],
          >
          > Muito obrigado(a) pela oportunidade de entrevista hoje! Adorei conhecer mais sobre [algo específico mencionado] e estou ainda mais entusiasmado(a) com a possibilidade de integrar a equipe.
          >
          > Fico à disposição caso precisem de informações adicionais.
          >
          > Atenciosamente,
          > [Seu nome]"

          Isso mostra profissionalismo e interesse contínuo na vaga!
        `,
        duration: "5 min",
        moduleId: "mod4",
        order: 3,
        completed: false,
        locked: true,
        challenge: {
          title: "Simule uma entrevista",
          description: "Peça a um familiar ou amigo para simular uma entrevista de emprego com você usando as perguntas desta lição.",
          action: "Marcar como concluído",
          badgeTitle: "Comunicador Pro"
        }
      }
    ]
  }
];

export const badges: Badge[] = [
  {
    id: "badge1",
    title: "Perfil Campeão",
    description: "Conquistado ao criar um perfil completo e otimizado no LinkedIn.",
    icon: "🏆",
    unlocked: false,
    progress: 30
  },
  {
    id: "badge2",
    title: "Estrategista",
    description: "Conquistado ao definir sua marca pessoal e público-alvo.",
    icon: "🎯",
    unlocked: false,
    progress: 0
  },
  {
    id: "badge3",
    title: "Criador de Conteúdo",
    description: "Conquistado ao criar e publicar seu primeiro post no LinkedIn.",
    icon: "✍️",
    unlocked: false,
    progress: 0
  },
  {
    id: "badge4",
    title: "Comunicador Pro",
    description: "Conquistado ao dominar as técnicas de comunicação com recrutadores.",
    icon: "💬",
    unlocked: false,
    progress: 0
  },
  {
    id: "badge5",
    title: "Mestre das Conexões",
    description: "Conquistado ao fazer 50 conexões estratégicas no LinkedIn.",
    icon: "🔗",
    unlocked: false,
    progress: 10
  },
  {
    id: "badge6",
    title: "Especialista em LinkedIn",
    description: "Conquistado ao completar todos os módulos do curso.",
    icon: "🎓",
    unlocked: false,
    progress: 0
  }
];

// Helper functions
export function getModuleProgress(moduleId: string): {
  completedLessons: number;
  totalLessons: number;
} {
  const module = moduleData.find((m) => m.id === moduleId);
  
  if (!module) {
    return { completedLessons: 0, totalLessons: 0 };
  }
  
  const totalLessons = module.lessons.length;
  const completedLessons = module.lessons.filter((lesson) => lesson.completed).length;
  
  return { completedLessons, totalLessons };
}

export function getTotalProgress(): {
  completedLessons: number;
  totalLessons: number;
  earnedBadges: number;
  totalBadges: number;
} {
  const totalLessons = moduleData.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = moduleData.reduce(
    (total, module) => total + module.lessons.filter((lesson) => lesson.completed).length,
    0
  );
  
  const earnedBadges = badges.filter((badge) => badge.unlocked).length;
  const totalBadges = badges.length;
  
  return { completedLessons, totalLessons, earnedBadges, totalBadges };
}
