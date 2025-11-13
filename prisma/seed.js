import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('🚀 Iniciando seed do banco de dados...')

    try {
        // Verificar conexão primeiro
        await prisma.$connect()
        console.log('✅ Conectado ao banco de dados')

        // LIMPAR DADOS EXISTENTES
        console.log('🧹 Limpando dados existentes...')
        await prisma.pets.deleteMany()
        await prisma.tipos.deleteMany()
        console.log('✅ Dados antigos removidos')

        // ----- LISTAS DE RAÇAS -----
        // 50 raças de cachorro
        const racasCachorro = [
            'Golden Retriever', 'Labrador Retriever', 'Bulldog Francês', 'Poodle',
            'Shih Tzu', 'Pug', 'Dachshund', 'Beagle', 'Schnauzer', 'Yorkshire Terrier',
            'Rottweiler', 'Pastor Alemão', 'Boxer', 'Husky Siberiano', 'Dálmata',
            'Chihuahua', 'Lhasa Apso', 'Cocker Spaniel', 'Border Collie', 'Pitbull',
            'Maltês', 'Buldogue Inglês', 'São Bernardo', 'Akita', 'Doberman',
            'Weimaraner', 'Shar Pei', 'Basset Hound', 'Mastiff', 'Bloodhound',
            'Setter Irlandês', 'Pointer', 'Whippet', 'Saluki', 'Samoeida',
            'Chow Chow', 'Terrier Escocês', 'Westie', 'Jack Russell', 'Boston Terrier',
            'Pomeranian', 'Shiba Inu', 'Corgi', 'Malamute', 'Pastor Australiano',
            'Pastor Belga', 'Cane Corso', 'Fila Brasileiro', 'Dogo Argentino', 'Bull Terrier',
            'Papillon'
        ]

        // 30 raças de gato
        const racasGato = [
            'Siamês', 'Persa', 'Maine Coon', 'Angorá', 'Sphynx',
            'Ragdoll', 'Bengal', 'British Shorthair', 'Scottish Fold', 'Russian Blue',
            'Birmanês', 'Abissínio', 'Somali', 'Burmês', 'Tonquinês',
            'Oriental', 'Devon Rex', 'Cornish Rex', 'Chartreux', 'Bombay',
            'Himalaio', 'Exótico', 'Selkirk Rex', 'LaPerm', 'Singapura',
            'Peterbald', 'Korat', 'Burmilla', 'Snowshoe', 'Toyger'
        ]

        // 10 raças de coelho
        const racasCoelho = [
            'Coelho Holandês', 'Coelho Angorá', 'Coelho Rex', 'Coelho Cabeça de Leão',
            'Coelho Mini Lop', 'Coelho Flemish Giant', 'Coelho Hotot', 'Coelho Californiano',
            'Coelho Himalaio', 'Coelho Nova Zelândia'
        ]

        // 5 pássaros
        const racasPassaro = [
            'Calopsita', 'Periquito Australiano', 'Agapornis', 'Cacatua', 'Canário'
        ]

        // 5 hamsters
        const racasHamster = [
            'Hamster Sírio', 'Hamster Anão Russo', 'Hamster Roborovski', 'Hamster Chinês', 'Hamster Campbell'
        ]

        // ARRAY DE TIPOS COM IMAGENS
        const tipos = [

            { nome_tipo: 'Golden Retriever', especie: 'cachorro', imageUrl: 'https://ibb.co/Q7yMncFB' },
            { nome_tipo: 'Labrador Retriever', especie: 'cachorro', imageUrl: 'https://ibb.co/v6bDnkh8' },
            { nome_tipo: 'Bulldog Francês', especie: 'cachorro', imageUrl: 'https://ibb.co/k6QkyQ7Y' },
            { nome_tipo: 'Poodle', especie: 'cachorro', imageUrl: 'https://ibb.co/r8YssYd' },
            { nome_tipo: 'Shih Tzu', especie: 'cachorro', imageUrl: 'https://ibb.co/cXNQKHb6' },
            { nome_tipo: 'Pug', especie: 'cachorro', imageUrl: 'https://ibb.co/5W5H4zMn' },
            { nome_tipo: 'Dachshund', especie: 'cachorro', imageUrl: 'https://ibb.co/WvS4qkNf' },
            { nome_tipo: 'Beagle', especie: 'cachorro', imageUrl: 'https://ibb.co/fYRmDpGP' },
            { nome_tipo: 'Schnauzer', especie: 'cachorro', imageUrl: 'https://ibb.co/HpThGFk4' },
            { nome_tipo: 'Yorkshire Terrier', especie: 'cachorro', imageUrl: 'https://ibb.co/j9jsWwGx' },
            { nome_tipo: 'Rottweiler', especie: 'cachorro', imageUrl: 'https://ibb.co/r242CDrs' },
            { nome_tipo: 'Pastor Alemão', especie: 'cachorro', imageUrl: 'https://ibb.co/8DdnThg6' },
            { nome_tipo: 'Boxer', especie: 'cachorro', imageUrl: 'https://ibb.co/yBbjL5R3' },
            { nome_tipo: 'Husky Siberiano', especie: 'cachorro', imageUrl: 'https://ibb.co/chL6Q6yp' },
            { nome_tipo: 'Dálmata', especie: 'cachorro', imageUrl: 'https://ibb.co/6c1cJd6M' },
            { nome_tipo: 'Chihuahua', especie: 'cachorro', imageUrl: 'https://ibb.co/0jzT7ZbM' },
            { nome_tipo: 'Lhasa Apso', especie: 'cachorro', imageUrl: 'https://ibb.co/fVD3qmBk' },
            { nome_tipo: 'Cocker Spaniel', especie: 'cachorro', imageUrl: 'https://ibb.co/3m2SkCRv' },
            { nome_tipo: 'Border Collie', especie: 'cachorro', imageUrl: 'https://ibb.co/9HCBYGGX' },
            { nome_tipo: 'Pitbull', especie: 'cachorro', imageUrl: 'https://ibb.co/p6xJ5F39' },
            { nome_tipo: 'Maltês', especie: 'cachorro', imageUrl: 'https://ibb.co/W4G97wry' },
            { nome_tipo: 'Buldogue Inglês', especie: 'cachorro', imageUrl: 'https://ibb.co/Z6GWmGdD' },
            { nome_tipo: 'São Bernardo', especie: 'cachorro', imageUrl: 'https://ibb.co/6JZ0djFV' },
            { nome_tipo: 'Akita', especie: 'cachorro', imageUrl: 'https://ibb.co/Y41xCHdR' },
            { nome_tipo: 'Doberman', especie: 'cachorro', imageUrl: 'https://ibb.co/RT9Wvd0Z' },
            { nome_tipo: 'Weimaraner', especie: 'cachorro', imageUrl: 'https://ibb.co/zV3tcZwJ' },
            { nome_tipo: 'Shar Pei', especie: 'cachorro', imageUrl: 'https://ibb.co/9HFmFkK5' },
            { nome_tipo: 'Basset Hound', especie: 'cachorro', imageUrl: 'https://ibb.co/LzktfSsc' },
            { nome_tipo: 'Mastiff', especie: 'cachorro', imageUrl: 'https://ibb.co/CLhZkCq' },
            { nome_tipo: 'Bloodhound', especie: 'cachorro', imageUrl: 'https://ibb.co/F4Hg5PQF' },
            { nome_tipo: 'Setter Irlandês', especie: 'cachorro', imageUrl: 'https://ibb.co/JRW6yHL0' },
            { nome_tipo: 'Pointer', especie: 'cachorro', imageUrl: 'https://ibb.co/LX24xykg' },
            { nome_tipo: 'Whippet', especie: 'cachorro', imageUrl: 'https://ibb.co/8nZvSdMc' },
            { nome_tipo: 'Saluki', especie: 'cachorro', imageUrl: 'https://ibb.co/4RNjjpmg' },
            { nome_tipo: 'Samoeida', especie: 'cachorro', imageUrl: 'https://ibb.co/fV0Nd26y' },
            { nome_tipo: 'Chow Chow', especie: 'cachorro', imageUrl: 'https://ibb.co/DDL22pJq' },
            { nome_tipo: 'Terrier Escocês', especie: 'cachorro', imageUrl: 'https://ibb.co/fdfjY1kY' },
            { nome_tipo: 'Westie', especie: 'cachorro', imageUrl: 'https://ibb.co/TDL4YfYx' },
            { nome_tipo: 'Jack Russell', especie: 'cachorro', imageUrl: 'https://ibb.co/zT6mf63c' },
            { nome_tipo: 'Boston Terrier', especie: 'cachorro', imageUrl: 'https://ibb.co/5gVF6DT9' },
            { nome_tipo: 'Papillon', especie: 'cachorro', imageUrl: 'https://ibb.co/qM7stwJz' },
            { nome_tipo: 'Shiba Inu', especie: 'cachorro', imageUrl: 'https://ibb.co/hJVjJRS1' },
            { nome_tipo: 'Corgi', especie: 'cachorro', imageUrl: 'https://ibb.co/NdfRxDnk' },
            { nome_tipo: 'Malamute', especie: 'cachorro', imageUrl: 'https://ibb.co/vNVzDY0' },
            { nome_tipo: 'Pastor Australiano', especie: 'cachorro', imageUrl: 'https://ibb.co/wNbRDQ6B' },
            { nome_tipo: 'Pastor Belga', especie: 'cachorro', imageUrl: 'https://ibb.co/DD1RbLhz' },
            { nome_tipo: 'Cane Corso', especie: 'cachorro', imageUrl: 'https://ibb.co/YFJjLGpG' },
            { nome_tipo: 'Fila Brasileiro', especie: 'cachorro', imageUrl: 'https://ibb.co/KcTpG1pz' },
            { nome_tipo: 'Dogo Argentino', especie: 'cachorro', imageUrl: 'https://ibb.co/gYBNV2g' },
            { nome_tipo: 'Bull Terrier', especie: 'cachorro', imageUrl: 'https://ibb.co/5gZJN7bY' },
            { nome_tipo: 'Siamês', especie: 'gato', imageUrl: 'https://ibb.co/Zn26M9r' },
            { nome_tipo: 'Persa', especie: 'gato', imageUrl: 'https://ibb.co/Y4ysccPp' },
            { nome_tipo: 'Maine Coon', especie: 'gato', imageUrl: 'https://ibb.co/QjrG7Q4s' },
            { nome_tipo: 'Angorá', especie: 'gato', imageUrl: 'https://ibb.co/VW0j5k84' },
            { nome_tipo: 'Sphynx', especie: 'gato', imageUrl: 'https://ibb.co/N6cwWxkV' },
            { nome_tipo: 'Ragdoll', especie: 'gato', imageUrl: 'https://ibb.co/b5rNzM7Z' },
            { nome_tipo: 'Bengal', especie: 'gato', imageUrl: 'https://ibb.co/q3v7DJwb' },
            { nome_tipo: 'British Shorthair', especie: 'gato', imageUrl: 'https://ibb.co/Dgtzw7hm' },
            { nome_tipo: 'Scottish Fold', especie: 'gato', imageUrl: 'https://ibb.co/v6Ns5xzJ' },
            { nome_tipo: 'Russian Blue', especie: 'gato', imageUrl: 'https://ibb.co/Qvr0YXdg' },
            { nome_tipo: 'Birmanês', especie: 'gato', imageUrl: 'https://ibb.co/RGZR7Vfj' },
            { nome_tipo: 'Abissínio', especie: 'gato', imageUrl: 'https://ibb.co/cVTPBS8' },
            { nome_tipo: 'Somali', especie: 'gato', imageUrl: 'https://ibb.co/3y5Mh3WG' },
            { nome_tipo: 'Burmês', especie: 'gato', imageUrl: 'https://ibb.co/FbxcPKJY' },
            { nome_tipo: 'Tonquinês', especie: 'gato', imageUrl: 'https://ibb.co/xKPRDKyR' },
            { nome_tipo: 'Oriental', especie: 'gato', imageUrl: 'https://ibb.co/m5dMsdPz' },
            { nome_tipo: 'Devon Rex', especie: 'gato', imageUrl: 'https://ibb.co/GfDkJf49' },
            { nome_tipo: 'Cornish Rex', especie: 'gato', imageUrl: 'https://ibb.co/Y78gJvZV' },
            { nome_tipo: 'Chartreux', especie: 'gato', imageUrl: 'https://ibb.co/zVBGkL30' },
            { nome_tipo: 'Bombay', especie: 'gato', imageUrl: 'https://ibb.co/gMV6n7rM' },
            { nome_tipo: 'Himalaio', especie: 'gato', imageUrl: 'https://ibb.co/XrNC16Ft' },
            { nome_tipo: 'Exótico', especie: 'gato', imageUrl: 'https://ibb.co/TDFZ78hz' },
            { nome_tipo: 'Selkirk Rex', especie: 'gato', imageUrl: 'https://ibb.co/Nn7JRfdt' },
            { nome_tipo: 'LaPerm', especie: 'gato', imageUrl: 'https://ibb.co/zh4rsFYV' },
            { nome_tipo: 'Singapura', especie: 'gato', imageUrl: 'https://ibb.co/wrPZknct' },
            { nome_tipo: 'Peterbald', especie: 'gato', imageUrl: 'https://ibb.co/xtgz4rhy' },
            { nome_tipo: 'Korat', especie: 'gato', imageUrl: 'https://ibb.co/38JpY0X' },
            { nome_tipo: 'Burmilla', especie: 'gato', imageUrl: 'https://ibb.co/pvqmL0cj' },
            { nome_tipo: 'Snowshoe', especie: 'gato', imageUrl: 'https://ibb.co/2348MyrW' },
            { nome_tipo: 'Toyger', especie: 'gato', imageUrl: 'https://ibb.co/4R4r9jVV' },
            { nome_tipo: 'Coelho Holandês', especie: 'coelho', imageUrl: 'https://ibb.co/8nNjZ3sL' },
            { nome_tipo: 'Coelho Angorá', especie: 'coelho', imageUrl: 'https://ibb.co/4ncRcqP4' },
            { nome_tipo: 'Coelho Rex', especie: 'coelho', imageUrl: 'https://ibb.co/gFP69QVK' },
            { nome_tipo: 'Coelho Cabeça de Leão', especie: 'coelho', imageUrl: 'https://ibb.co/V0N68Jdy' },
            { nome_tipo: 'Coelho Mini Lop', especie: 'coelho', imageUrl: 'https://ibb.co/Df2ZC6fQ' },
            { nome_tipo: 'Coelho Flemish Giant', especie: 'coelho', imageUrl: 'https://ibb.co/vCrRTK0z' },
            { nome_tipo: 'Coelho Hotot', especie: 'coelho', imageUrl: 'https://ibb.co/zYBxx90' },
            { nome_tipo: 'Coelho Californiano', especie: 'coelho', imageUrl: 'https://ibb.co/yFpMGRvP' },
            { nome_tipo: 'Coelho Himalaio', especie: 'coelho', imageUrl: 'https://ibb.co/MD12jnsC' },
            { nome_tipo: 'Coelho Nova Zelândia', especie: 'coelho', imageUrl: 'https://ibb.co/qLjpHxDQ' },
            { nome_tipo: 'Calopsita', especie: 'pássaro', imageUrl: 'https://ibb.co/0jyLxhsR' },
            { nome_tipo: 'Periquito Australiano', especie: 'pássaro', imageUrl: 'https://ibb.co/FqN52sLD' },
            { nome_tipo: 'Agapornis', especie: 'pássaro', imageUrl: 'https://ibb.co/kVr1kC9Q' },
            { nome_tipo: 'Cacatua', especie: 'pássaro', imageUrl: 'https://ibb.co/CpHMdpCC' },
            { nome_tipo: 'Canário', especie: 'pássaro', imageUrl: 'https://ibb.co/QjQvcvfn' },
            { nome_tipo: 'Hamster Sírio', especie: 'hamster', imageUrl: 'https://ibb.co/npqCYyx' },
            { nome_tipo: 'Hamster Anão Russo', especie: 'hamster', imageUrl: 'https://ibb.co/QFqQK86F' },
            { nome_tipo: 'Hamster Roborovski', especie: 'hamster', imageUrl: 'https://ibb.co/5xhC2cXz' },
            { nome_tipo: 'Hamster Chinês', especie: 'hamster', imageUrl: 'https://ibb.co/TMGKQG58' },
            { nome_tipo: 'Hamster Campbell', especie: 'hamster', imageUrl: 'https://ibb.co/20x3jVMX' },
        ]

        // CRIAR TIPOS
        console.log('📝 Criando tipos...')
        const tiposCriados = await prisma.tipos.createMany({
            data: tipos
        })
        console.log(`✅ ${tiposCriados.count} tipos criados`)

        // BUSCAR TIPOS DO BANCO
        const tiposDoBanco = await prisma.tipos.findMany()
        console.log(`📊 ${tiposDoBanco.length} tipos carregados do banco`)

        // ----- DADOS PARA PETS -----
        const nomesMachos = [
            'max', 'thor', 'rex', 'toby', 'bob', 'luke', 'zeus', 'oscar', 'simba', 'rocky',
            'leo', 'jack', 'billy', 'marley', 'lucky', 'duke', 'bear', 'milo', 'apollo', 'buddy',
            'charlie', 'cooper', 'teddy', 'winston', 'oliver', 'mike', 'bento', 'fred', 'hugo',
            'igor', 'jade', 'kiko', 'luan', 'niko', 'otto', 'pipo', 'raul', 'sandro', 'tito',
            'urso', 'vini', 'xodo', 'yoda', 'zack', 'tom', 'rick', 'noah', 'bruce', 'casper', 'sam'
        ]

        const nomesFemeas = [
            'luna', 'lola', 'bella', 'molly', 'sophie', 'chloe', 'daisy', 'maggie', 'stella', 'lily',
            'penny', 'zoey', 'ruby', 'sadie', 'ginger', 'princess', 'coco', 'rosie', 'niki', 'mia',
            'mel', 'flora', 'grace', 'helen', 'iris', 'july', 'kiara', 'laila', 'maya', 'nina',
            'olga', 'paola', 'queen', 'ruth', 'sarah', 'tina', 'violet', 'wanda', 'yara', 'zara',
            'bela', 'cindy', 'duda', 'elza', 'frida', 'gabi', 'hanna', 'ines', 'juju', 'kelly', 'lara'
        ]

        const locais = [
            'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR', 'Porto Alegre, RS',
            'Florianópolis, SC', 'Salvador, BA', 'Fortaleza, CE', 'Recife, PE', 'Brasília, DF',
            'Goiânia, GO', 'Manaus, AM', 'Belém, PA', 'São Luís, MA', 'Maceió, AL',
            'Natal, RN', 'João Pessoa, PB', 'Teresina, PI', 'Campo Grande, MS', 'Cuiabá, MT',
            'Aracaju, SE', 'Palmas, TO', 'Porto Velho, RO', 'Rio Branco, AC', 'Macapá, AP',
            'Boa Vista, RR', 'Vitória, ES', 'São José dos Campos, SP', 'Ribeirão Preto, SP', 'Campinas, SP',
            'Sorocaba, SP', 'Santos, SP', 'São Bernardo do Campo, SP', 'Osasco, SP', 'Guarulhos, SP',
            'Niterói, RJ', 'Duque de Caxias, RJ', 'São Gonçalo, RJ', 'Petrópolis, RJ', 'Volta Redonda, RJ',
            'Uberlândia, MG', 'Contagem, MG', 'Juiz de Fora, MG', 'Betim, MG', 'Montes Claros, MG',
            'Londrina, PR', 'Maringá, PR', 'Cascavel, PR', 'Foz do Iguaçu, PR', 'Ponta Grossa, PR'
        ]

        const descricoesBase = [
            'Muito carinhoso e brincalhão, adora crianças e outros animais.',
            'Tranquilo e educado, perfeito para apartamento e ambientes calmos.',
            'Cheio de energia, ideal para famílias ativas que gostam de passeios.',
            'Dócil e companheiro, sempre pronto para receber carinho e atenção.',
            'Inteligente e obediente, aprende comandos rapidamente e é muito esperto.',
            'Independente mas afetuoso, gosta de seu espaço mas não dispensa um colo.',
            'Sociável e alegre, faz amigos facilmente com humanos e outros pets.',
            'Calmo e protetor, ótimo para idosos e ambientes tranquilos.',
            'Curioso e aventureiro, adora explorar novos ambientes e brincar ao ar livre.',
            'Fiel e dedicado, forma laços fortes com a família e é muito leal.',
            'Brincalhão e divertido, sempre animado e pronto para novas aventuras.',
            'Gosta de rotina, se adapta bem a horários e é muito comportado.',
            'Amoroso e apegado, segue os tutores por toda a casa pedindo atenção.',
            'Tímido no início, mas depois de ganhar confiança se torna muito carinhoso.',
            'Adora brinquedos, especialmente os que fazem barulho e bolinhas.',
            'Perfeito para primeiro pet, muito paciente e de fácil cuidado.',
            'Gosta de colo, é o companheiro ideal para Netflix no sofá.',
            'Ótimo com crianças, muito paciente e gentil com os pequenos.',
            'Adestrado, sabe fazer as necessidades no lugar certo e atende a chamado.',
            'Sapeca e levado, sempre inventando novas travessuras para se divertir.',
            'Gosta de outros animais, pode conviver bem com outros pets da casa.',
            'Protetor da casa, alerta sobre visitas mas não é agressivo.',
            'Silencioso e discreto, ideal para quem mora em apartamento.',
            'Adora passeios, fica super animado na hora do caminho ou coleira.',
            'Guloseimeiro, faz de tudo por um petisco e é fácil de agradar.',
            'Carente e amoroso, precisa de bastante atenção e carinho diário.',
            'Independente, perfeito para quem trabalha fora o dia todo.',
            'Aventureiro, adora explorar quintais e áreas externas.',
            'Calmo e sossegado, passa a maior parte do tempo descansando.',
            'Observador, gosta de ficar vendo a movimentação da casa da janela.',
            'Brincalhão com água, adora se molhar e brincar com mangueira.',
            'Companheiro para idosos, muito tranquilo e obediente.',
            'Energético, precisa de exercícios diários para gastar energia.',
            'Carinhoso com visitas, recebe todos muito bem e faz amizade fácil.',
            'Guarda instintos, protege a família sem ser agressivo.',
            'Adora carinho na barriga, se derrete todo por um cafuné.',
            'Inteligente e esperto, aprende truques novos com facilidade.',
            'Dorminhoco, passa boa parte do dia cochilando em lugares confortáveis.',
            'Curioso com sons, fica intrigado com barulhos diferentes.',
            'Ama cobertas, adora se aninhar em mantas e travesseiros fofos.',
            'Comedouro seletivo, tem suas preferências alimentares bem definidas.',
            'Brinca sozinho, se entretém com brinquedos quando está sozinho.',
            'Vocalizador, se comunica bastante através de sons e miados.',
            'Apaixonado por sol, adora tomar banhos de sol pela manhã.',
            'Limpo e organizado, mantém seu espaço sempre arrumado.',
            'Acompanhante perfeito, segue o tutor pela casa o dia todo.',
            'Brincalhão com bolinhas, não cansa de correr atrás delas.',
            'Gosta de rotina, se adapta bem a horários fixos de alimentação.',
            'Amoroso com todos, não faz distinção entre pessoas da família.',
            'Temperamento equilibrado, nem muito agitado nem muito parado.'
        ]

        const descricoesMachos = descricoesBase.slice()

        const descricoesFemeas = descricoesBase.map(text => {
            let s = text
                .replace(/\bcarinhoso\b/gi, 'carinhosa')
                .replace(/\bbrincalhão\b/gi, 'brincalhona')
                .replace(/\bprotetor\b/gi, 'protetora')
                .replace(/\bapaixonado\b/gi, 'apaixonada')
                .replace(/\bcompanheiro\b/gi, 'companheira')
                .replace(/\bdorminhoco\b/gi, 'dorminhoca')
                .replace(/\bobservador\b/gi, 'observadora')
                .replace(/\bcurioso\b/gi, 'curiosa')
                .replace(/\bagressivo\b/gi, 'agressiva')
                .replace(/\bcalmo\b/gi, 'calma')
                .replace(/\blevado\b/gi, 'levada')
            return s
        })

        const idades = ['filhote', 'adulto', 'idoso']
        const tamanhos = ['pequeno', 'médio', 'grande']

        // HELPER FUNCTIONS
        function rnd(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        function chance(prob) {
            return Math.random() < prob
        }

        // CRIAR PETS
        console.log('🐕 Criando pets...')
        let petsCriados = 0

        for (const tipo of tiposDoBanco) {
            for (let j = 0; j < 4; j++) {
                const genero = chance(0.5) ? 'macho' : 'fêmea'
                const nome = genero === 'macho' ? rnd(nomesMachos) : rnd(nomesFemeas)
                const idade = rnd(idades)
                const tamanho = rnd(tamanhos)
                const local = rnd(locais)
                const adotado = chance(0.15)
                const vacinado = chance(0.8)
                const castrado = chance(0.6)
                const descricao = genero === 'macho' ? rnd(descricoesMachos) : rnd(descricoesFemeas)

                await prisma.pets.create({
                    data: {
                        nome,
                        tipoId: tipo.id,
                        idade,
                        tamanho,
                        genero,
                        local,
                        adotado,
                        vacinado,
                        castrado,
                        descricao
                    }
                })
                petsCriados++

                if (petsCriados % 50 === 0) {
                    console.log(`   ✅ ${petsCriados} pets criados...`)
                }
            }
        }

        // VERIFICAÇÃO FINAL
        const totalTipos = await prisma.tipos.count()
        const totalPets = await prisma.pets.count()

        console.log('🎉 SEED CONCLUÍDA:')
        console.log(`   📊 ${totalTipos} tipos criados`)
        console.log(`   🐾 ${totalPets} pets criados`)
        console.log('   ✅ Banco populado com sucesso!')

    } catch (error) {
        console.error('❌ ERRO NO SEED:')
        console.error('   Mensagem:', error.message)
        console.error('   Stack:', error.stack)
        throw error
    } finally {
        await prisma.$disconnect()
        console.log('🔌 Conexão com banco fechada')
    }
}

// Executar o seed
main()
    .then(() => {
        console.log('✅ Seed executado com sucesso!')
        process.exit(0)
    })
    .catch((e) => {
        console.error('❌ Seed falhou!')
        process.exit(1)
    })