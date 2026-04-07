function gerarPull(qtd) {


    const pool = [

        {
    nome: "Jiheisen Co. Fixer Laura",
    raridade: 1,
    descricao: "É um prazer conhecer você! Pode me chamar de Laura, vamos estar trabalhando juntas daqui em diante?~"
       },

                {
    nome: "Jiheisen Co. Fixer Jonas & Lucas",
    raridade: 1,
    descricao: "...Prazer. Pode me chamar de Jonas. Por favor, não se incomode comigo."
       },

                {
    nome: "Jiheisen Co. Fixer Shiki Tohno",
    raridade: 1,
    descricao: "Meu nome? Ah, é Tohno Shiki. Não vou te decepcionar."
       },

                {
    nome: "Jiheisen Co. Fixer Doujima Shun",
    raridade: 1,
    descricao: "Doujima Shun. Se refira a mim com este nome."
       },

                        {
    nome: "Jiheisen Co. Fixer Aramis, Athos & Porthos",
    raridade: 1,
    descricao: "Aramis, Athos, Porthos & D'artagnan! Fique tranquilo, você não irá esquecer dele."
       },

                             {
    nome: "Jiheisen Co. Fixer Loreto",
    raridade: 1,
    descricao: "O..Olá, por favor, m-me chame de Loreto...E-Eu tenho um nome um pouco mais longo, mas ele torna as coisas..desagradáveis, então me chame só de Loreto."
       }, 

                      {
    nome: "Jiheisen Co. Fixer Aegis",
    raridade: 1,
    descricao: "Aegis."
       },
        
{
    nome: "Kurokumo Wakashu Doujima Shun",
    raridade: 2,
    descricao: "Disciplina. Silêncio. Repetição. Ainda não é o bastante... mas chegará lá. Precisa chegar. Ah? Não. Eu estava falando sozinho. Não fale comigo."
},


{
    nome: "Blade Lineage Salsu Shiki Tohno",
    raridade: 3,
    descricao: "Uma lâmina não hesita. Uma lâmina não tem voz. Sim, eu sei. Não é somente a lâmina que precisa destas qualidades, Mestre."
},


{
    nome: "Seven Assoc. South Section Aramis, Athos & Porthos",
    raridade: 1,
    descricao: "Um sorriso, uma piada... e talvez algo mais. Depende do quanto você pagar, docinho. Só me dê os detalhes."
},


{
    nome: "Cinq Assoc. South Section Aramis, Athos & Porthos",
    raridade: 2,
    descricao: "O espetáculo vai continuar. Sempre continua. Mesmo quando ninguém está assistindo."
},


{
    nome: "Zwei Association South Section 6 Doujima Shun",
    raridade: 1,
    descricao: "Postura firme. Proteção básica. Ainda há muito a aprender- Oi, Aramis! Você está me escutando?!"
},


{
    nome: "Shi Association South Section 5 Aramis, Athos & Porthos",
    raridade: 1,
    descricao: "Contratos simples, riscos simples. Ou pelo menos deveriam ser, você pode parar de complicar tudo? Eu estou ocupado!"
},


{
    nome: "Lobotomy E.G.O Frost Splinter Jonas/Lucas",
    raridade: 1,
    descricao: "Haaah.. Mais um dia de trabalho. Minhas mãos estão doendo. Nada fora do comum-... O Lucas esqueceu meu caderno no Departamento de Segurança de novo???"
},


{
    nome: "Lobotomy E.G.O Cherry Blossoms Shiki",
    raridade: 2,
    descricao: "Monitoramento constante. Tudo parece... sob controle. Obrigado pelo seu serviço, como sempre."
},


{
    nome: "Kurokumo Clan Wakashu Laura",
    raridade: 2,
    descricao: "Cuidado... algumas flores só parecem bonitas à distância.~"
},


{
    nome: "R Corp 4th Pack Reindeer Aegis",
    raridade: 2,
    descricao: "Hippity Hop. Eficiência otimizada. Execução direta. Com pulinhos. Ou algo assim."
},


{
    nome: "Seven Association South Section 1 Loreto",
    raridade: 3,
    descricao: "A verdade está sempre lá, não está...? Basta saber onde olhar.. haah... Isso é algo que você diria."
},


{
    nome: "Tingtang Gang Member Jonas & Lucas",
    raridade: 1,
    descricao: "—Trabalho básico.\n—Nada complicado.\n—Por enquanto."
},


{
    nome: "Tingtang Gang Member Jonas & Lucas",
    raridade: 2,
    descricao: "—Você fala.\n—Eu resolvo.\n—Simples assim. Se você me atrapalhar de novo, você vai torcer para que eu não te encontre."
},

    ]

    const resultados = [];
    for (let i = 0; i < qtd; i++) { 
        let roll = Math.random(0;
        let selecionado;

        if (roll < 0.05) { 
            const raros = pool.filter(p => p.raridade === "000");
            selecionado = raros [Math.floor(Math.random() * raros.lenght)];

        }
        else if (roll <0.30)
            const incomuns = pool.filter(p => p.raridade === "00");
        selecionado = incomuns[Math.floor(Math.random() * incomuns.lenght)];

    } 
    else { 
        const comuns = pool.fiter(p => p.raridade === "0");
        selecionado = comuns[Math.floor(Math.random() * comuns.lenght)];
    } 

    if (selecionado) { 
        resultados.push(selecionado);
    }
} 

return resultados;


