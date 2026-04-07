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
        raridade: 3,
        descricao: "Disciplina. Silêncio. Repetição. Ainda não é o bastante... mas chegará lá. Precisa chegar. Ah? No. Eu estava falando sozinho. Não fale comigo."

    },

    {

        nome: "Blade Lineage Salsu Shiki Tohno",
        raridade: 3,
        descricao: "Uma lâmina não hesita. Uma lâmina não tem voz. Sim, eu sei. Não é somente a lâmina que precisa destas qualidades, Mestre."

    },

    {

        nome: "Seven Assoc. South Section Aramis, Athos & Porthos",
        raridade: 2,
        descricao: "Um sorriso, uma piada... e talvez algo mais. Depende do quanto você pagar, docinho. Só me dê os detalhes."

    },

    {

        nome: "Shi Association South Section 5  Aramis, Athos & Porthos",
        raridade: 3,
        descricao: "Bom...! O espetáculo vai continuar. Sempre continua. Mesmo quando ninguém está me assistindo."

    },

    {

        nome: "Cinq Assoc. South Section Doujima Shun",
        raridade: 3,
        descricao: "Postura firme. Proteção básica. Ainda há muito a aprender- Oi, Aramis! Você está me escutando?!"

    },

    {

        nome: "Cinq Assoc. South Section Aramis, Athos & Porthos",
        raridade: 2,
        descricao: "Contratos simples, riscos simples. Ou pelo menos deveriam ser... você pode parar de falar tanto? Eu estou cantando!"

    },

    {

        nome: "Lobotomy E.G.O Frost Splinter Jonas/Lucas",
        raridade: 2,
        descricao: "Haaah.. Mais um dia de trabalho. Minhas mãos estão doendo, mas nada fora do comum-... O Lucas esqueceu meu caderno no Departamento de Segurança de novo???"

    },

    {

        nome: "Lobotomy E.G.O Cherry Blossoms Shiki",
        raridade: 2,
        descricao: "Monitoramento constante. Tudo parece... sob controle. Obrigado pelo seu serviço, como sempre."

    },

    {

        nome: "Lobotomy E.G.O Beak Aegis",
        raridade: 2,
        descricao: "Se limpar de todo pecado parece meio absurdo. Mas tudo certo. Desde que você se alimente- Ah, acho que se confundiu. Minha cabeça não é um galho."

    },

    {

        nome: "Kurokumo Clan Captain Laura",
        raridade: 3,
        descricao: "Oh? Uma conversa? Lhe deixarei falar, mas você não possui permissão para se aproximar nem mais um passo... Esqueceu que todas as belas rosas tem espinhos?~"

    },

    {

        nome: "R Corp 4th Pack Rabbit Aegis",
        raridade: 3,
        descricao: "Hippity hop. Eficiência otimizada. Execução direta. Com pulinhos. Hippity hop. Ou algo assim."

    },

    {

        nome: "Seven Association South Section 1 Loreto",
        raridade: 2,
        descricao: "A verdade está sempre lá, não está...? Basta saber onde olhar.. haah... Isso é algo que você diria."

    },

    {

        nome: "Tingtang Gang Member Aegis",
        raridade: 2,
        descricao: "Você deveria saber que não é bem vindo. Fique de costas. Não pretendo me sujar com o sangue do seu pescoço."

    },    {
        nome: "Tingtang Gang GangLeader Jonas & Lucas",
        raridade: 3,
        descricao: "—Você fala.\n—Eu resolvo~.\n—Simples assim. Se você me atrapalhar outra vez, vai torcer para que eu não te encontre."
    },
    { 
        nome: "The Echoes' Heir Loreto", 
        raridade: 3, 
        descricao: "O que há? Vamos, a música está doce e a noite é jovem. Deixe-se levar pela melodia e dance sob meu palco, o show está prestes a começar afinal de contas!"
    },
    { 
        nome: "Chief Butler Aegis", 
        raridade: 3, 
        descricao: "Os corredores estão limpos. A mesa está posta. As roupas estão passadas. Sobre a \"bagunça\" que fez, senhor Raskolnikov... Eu logo irei cuidar dela." 
    },
    { 
        nome: "District 25 Chief Detective Laura", 
        raridade: 3, 
        descricao: "Aah, bem-vindo ao meu escritório! Se você está aqui, deve ser porque algo horrível te aconteceu. Não se preocupe, eu vou cuidar de tudo, você só vai precisar descansar um pouquinho, respirar fundo e me contar os detalhes. Eu vou cuidar do resto, te prometo.~" 
    }
 
];

function gerarPull(qtd) {
    const resultados = [];
    const r3 = pool.filter(p => p.raridade === 3);
    const r2 = pool.filter(p => p.raridade === 2);
    const r1 = pool.filter(p => p.raridade === 1);

    for (let i = 0; i < qtd; i++) {
        let roll = Math.random();
        let selecionado;

        if (roll < 0.05 && r3.length > 0) {
            selecionado = r3[Math.floor(Math.random() * r3.length)];
        } else if (roll < 0.30 && r2.length > 0) {
            selecionado = r2[Math.floor(Math.random() * r2.length)];
        } else {
            selecionado = r1[Math.floor(Math.random() * r1.length)];
        }

        if (!selecionado) selecionado = pool[0];
        resultados.push(selecionado);
    }
    return resultados;
}
