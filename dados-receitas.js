const receitas = [
    {
        id: 'lasanha-a-bolonhesa',
        titulo: 'Lasanha à Bolonhesa',
        descricao: 'Camadas de massa, molho rico e queijo derretido. Um clássico italiano.',
        imagem: 'Imagens/lasanha-a-bolonhesa.png',
        ingredientes: ['500g de massa de lasanha', '500g de carne moída', '2 latas de molho de tomate', '400g de presunto fatiado', '400g de queijo muçarela fatiado', '100g de queijo parmesão ralado', '1 cebola picada', '2 dentes de alho picados', 'Azeite, sal e pimenta do reino a gosto'],
        preparo: ['Em uma panela, aqueça o azeite e refogue o alho e a cebola. Adicione a carne moída e cozinhe até dourar.', 'Junte o molho de tomate, sal, pimenta e cozinhe por cerca de 10 minutos.', 'Cozinhe a massa da lasanha em água fervente com sal conforme as instruções da embalagem.', 'Em um refratário, monte a lasanha: comece com uma camada de molho, depois massa, presunto, queijo e molho novamente. Repita até acabarem os ingredientes.', 'Finalize com uma camada de queijo muçarela e polvilhe o queijo parmesão.', 'Leve ao forno pré-aquecido a 180°C por cerca de 30 minutos, ou até o queijo gratinar.']
    },
    {
        id: 'frango-assado-com-ervas',
        titulo: 'Frango Assado com Ervas',
        descricao: 'Suculento e aromático, perfeito para o almoço de domingo em família.',
        imagem: 'Imagens/frango-assado-com-ervas.png',
        ingredientes: ['1 frango inteiro (cerca de 1.5kg)', '4 dentes de alho amassados', 'Suco de 1 limão', '2 colheres de sopa de azeite', '1 colher de sopa de alecrim fresco', '1 colher de sopa de tomilho fresco', 'Sal e pimenta do reino a gosto', 'Batatas para acompanhar'],
        preparo: ['Pré-aqueça o forno a 200°C.', 'Em uma tigela, misture o alho, suco de limão, azeite, alecrim, tomilho, sal e pimenta.', 'Passe essa mistura por todo o frango, por dentro e por fora.', 'Coloque o frango em uma assadeira e distribua as batatas ao redor.', 'Leve ao forno por aproximadamente 1 hora e 20 minutos, ou até o frango estar bem dourado e cozido por dentro.', 'Regue o frango com o caldo da assadeira na metade do tempo para mantê-lo suculento.', 'Sirva em seguida.']
    },
    {
        id: 'mousse-de-maracuja',
        titulo: 'Mousse de Maracujá',
        descricao: 'Uma sobremesa cremosa, rápida e com o equilíbrio perfeito do doce e azedo.',
        imagem: 'Imagens/mousse-de-maracuja.png',
        ingredientes: ['1 lata de leite condensado', '1 lata de creme de leite', 'A mesma medida (da lata) de suco de maracujá concentrado', 'Polpa de 1 maracujá para decorar'],
        preparo: ['No liquidificador, bata o leite condensado, o creme de leite e o suco de maracujá por cerca de 3 minutos.', 'Despeje o creme em uma travessa ou em taças individuais.', 'Leve à geladeira por pelo menos 4 horas, ou até firmar.', 'Na hora de servir, decore com a polpa de maracujá por cima.']
    },
    {
        id: 'salada-caesar',
        titulo: 'Salada Caesar',
        descricao: 'Alface fresca, croutons crocantes e um molho cremoso inconfundível.',
        imagem: 'Imagens/salada-caesar.png',
        ingredientes: ['1 alface romana', '1 xícara de croutons', '50g de queijo parmesão ralado', '1 peito de frango grelhado (opcional)', 'Molho Caesar a gosto'],
        preparo: ['Lave e seque bem as folhas de alface.', 'Rasgue as folhas em pedaços e coloque em uma saladeira.', 'Adicione o frango grelhado em tiras, se estiver usando.', 'Regue com o molho Caesar e misture delicadamente.', 'Adicione os croutons e o queijo parmesão por cima antes de servir.']
    },
    {
        id: 'risoto-de-cogumelos',
        titulo: 'Risoto de Cogumelos',
        descricao: 'Um prato sofisticado e cremoso, ideal para um jantar especial.',
        imagem: 'Imagens/risoto-de-cogumelos.png',
        ingredientes: ['1 xícara de arroz arbóreo', '200g de cogumelos frescos (paris, shimeji)', '1/2 cebola picada', '2 dentes de alho picados', '1/2 xícara de vinho branco seco', '1 litro de caldo de legumes quente', '50g de queijo parmesão ralado', '2 colheres de sopa de manteiga', 'Azeite, sal e pimenta'],
        preparo: ['Em uma panela, aqueça o azeite e refogue a cebola e o alho.', 'Adicione os cogumelos fatiados e cozinhe até dourar.', 'Acrescente o arroz e refogue por 2 minutos.', 'Despeje o vinho branco e mexa até evaporar.', 'Adicione o caldo de legumes aos poucos, uma concha por vez, mexendo sempre.', 'Quando o arroz estiver al dente, desligue o fogo. Incorpore a manteiga e o queijo parmesão.', 'Tempere com sal e pimenta e sirva imediatamente.']
    },
    {
        id: 'pao-de-queijo-mineiro',
        titulo: 'Pão de Queijo Mineiro',
        descricao: 'A autêntica receita para um pão de queijo macio por dentro e crocante por fora.',
        imagem: 'Imagens/pao-de-queijo-mineiro.png',
        ingredientes: ['500g de polvilho azedo', '1 xícara de leite', '1/2 xícara de óleo', '1 xícara de queijo minas curado ralado', '2 ovos', '1 colher de chá de sal'],
        preparo: ['Ferva o leite, o óleo e o sal.', 'Despeje a mistura sobre o polvilho em uma tigela e misture bem.', 'Deixe a massa esfriar um pouco.', 'Adicione os ovos um a um, misturando bem após cada adição.', 'Incorpore o queijo ralado e amasse até obter uma massa homogênea.', 'Faça bolinhas e coloque em uma assadeira untada.', 'Asse em forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.']
    },
    {
        id: 'feijoada-completa',
        titulo: 'Feijoada Completa',
        descricao: 'O prato mais famoso do Brasil, com todos os acompanhamentos.',
        imagem: 'Imagens/feijoada-completa.png',
        ingredientes: ['1kg de feijão preto', '200g de carne seca', '200g de costelinha de porco', '1 linguiça paio', '1 linguiça calabresa', 'Folhas de louro, alho, cebola', 'Laranja, couve e farofa para acompanhar'],
        preparo: ['Deixe as carnes salgadas de molho de um dia para o outro, trocando a água.', 'Cozinhe o feijão com as carnes e folhas de louro na pressão por cerca de 1 hora.', 'Após o cozimento, retire as carnes, corte em pedaços e retorne à panela.', 'Faça um refogado com alho e cebola e adicione ao feijão.', 'Deixe ferver em fogo baixo para engrossar o caldo.', 'Sirva com arroz branco, couve refogada, farofa e fatias de laranja.']
    },
    {
        id: 'torta-de-limao',
        titulo: 'Torta de Limão',
        descricao: 'Massa crocante com um recheio de limão cremoso e cobertura de merengue.',
        imagem: 'Imagens/torta-de-limao.png',
        ingredientes: ['1 pacote de biscoito maisena', '100g de manteiga derretida', '1 lata de leite condensado', '1/2 xícara de suco de limão', '3 claras de ovo', '6 colheres de sopa de açúcar'],
        preparo: ['Triture o biscoito e misture com a manteiga. Forre o fundo e as laterais de uma forma.', 'Asse a massa por 10 minutos a 180°C.', 'Misture o leite condensado com o suco de limão e despeje sobre a massa fria.', 'Bata as claras em neve, adicione o açúcar aos poucos até formar um merengue firme.', 'Cubra a torta com o merengue e leve ao forno novamente para dourar.']
    },
    {
        id: 'sopa-de-abobora',
        titulo: 'Sopa de Abóbora',
        descricao: 'Cremosa e reconfortante, perfeita para aquecer nos dias frios.',
        imagem: 'Imagens/sopa-de-abobora.png',
        ingredientes: ['1kg de abóbora cabotiá em cubos', '1 cebola picada', '2 dentes de alho picados', '1 litro de caldo de legumes', 'Gengibre ralado a gosto', 'Sal, pimenta e cheiro-verde'],
        preparo: ['Refogue a cebola e o alho em uma panela com azeite.', 'Adicione a abóbora e o gengibre e refogue por mais 5 minutos.', 'Cubra com o caldo de legumes e cozinhe até a abóbora ficar bem macia.', 'Bata tudo no liquidificador até obter um creme homogêneo.', 'Volte o creme para a panela, tempere com sal e pimenta e aqueça.', 'Sirva com cheiro-verde picado.']
    },
    {
        id: 'bife-a-parmegiana',
        titulo: 'Bife à Parmegiana',
        descricao: 'Carne macia, molho de tomate caseiro e muito queijo gratinado.',
        imagem: 'Imagens/bife-a-parmegiana.png',
        ingredientes: ['4 bifes de filé mignon', 'Farinha de trigo, ovos e farinha de rosca para empanar', 'Molho de tomate caseiro', '200g de queijo muçarela', 'Óleo para fritar', 'Sal e pimenta'],
        preparo: ['Tempere os bifes com sal e pimenta.', 'Passe os bifes na farinha de trigo, depois nos ovos batidos e por último na farinha de rosca.', 'Frite em óleo quente até dourar. Escorra em papel toalha.', 'Em um refratário, coloque os bifes, cubra com molho de tomate e queijo muçarela.', 'Leve ao forno a 200°C para gratinar.']
    },
    {
        id: 'guacamole',
        titulo: 'Guacamole',
        descricao: 'Pasta de abacate mexicana, ideal para servir com nachos e tacos.',
        imagem: 'Imagens/guacamole.png',
        ingredientes: ['2 abacates maduros', '1 tomate picado sem sementes', '1/2 cebola roxa picada', 'Suco de 1 limão', 'Coentro picado a gosto', 'Sal e pimenta'],
        preparo: ['Amasse a polpa dos abacates com um garfo.', 'Adicione o tomate, a cebola roxa, o coentro e o suco de limão.', 'Misture bem e tempere com sal e pimenta.', 'Sirva imediatamente com nachos ou tortilhas.']
    },
    {
        id: 'brownie-de-chocolate',
        titulo: 'Brownie de Chocolate',
        descricao: 'Casquinha crocante por fora e uma massa super úmida por dentro.',
        imagem: 'Imagens/brownie-de-chocolate.png',
        ingredientes: ['200g de chocolate meio amargo picado', '100g de manteiga', '1 xícara de açúcar', '3 ovos', '1 xícara de farinha de trigo', '1/2 xícara de nozes picadas (opcional)'],
        preparo: ['Derreta o chocolate com a manteiga em banho-maria.', 'Em outra tigela, bata os ovos com o açúcar.', 'Incorpore o chocolate derretido à mistura de ovos.', 'Adicione a farinha e as nozes, misturando delicadamente.', 'Despeje em uma forma untada e enfarinhada.', 'Asse em forno pré-aquecido a 180°C por cerca de 25-30 minutos.']
    },
    {
        id: 'salmao-grelhado',
        titulo: 'Salmão Grelhado',
        descricao: 'Uma opção leve, saudável e rápida para uma refeição nutritiva.',
        imagem: 'Imagens/salmao-grelhado.png',
        ingredientes: ['2 postas de salmão', 'Suco de 1/2 limão', 'Azeite', 'Sal, pimenta do reino e endro (dill) a gosto'],
        preparo: ['Tempere as postas de salmão com sal, pimenta, endro, suco de limão e um fio de azeite.', 'Aqueça bem uma frigideira ou grill.', 'Grelhe o salmão por cerca de 4-5 minutos de cada lado, começando com a pele para baixo.', 'Sirva com legumes ou salada.']
    },
    {
        id: 'panquecas-americanas',
        titulo: 'Panquecas Americanas',
        descricao: 'Fofinhas e deliciosas, sirva com mel, frutas ou calda de chocolate.',
        imagem: 'Imagens/panquecas-americanas.png',
        ingredientes: ['1 1/2 xícara de farinha de trigo', '2 colheres de sopa de açúcar', '1 colher de sopa de fermento em pó', '1/2 colher de chá de sal', '1 1/4 xícara de leite', '1 ovo', '3 colheres de sopa de manteiga derretida'],
        preparo: ['Em uma tigela, misture os ingredientes secos.', 'Em outra, misture o leite, o ovo e a manteiga derretida.', 'Junte as duas misturas, mexendo apenas o suficiente para incorporar (a massa deve ficar um pouco empelotada).', 'Aqueça uma frigideira antiaderente em fogo médio.', 'Despeje 1/4 de xícara de massa por panqueca.', 'Cozinhe até surgirem bolhas na superfície, vire e cozinhe até dourar.']
    },
    {
        id: 'ceviche-peruano',
        titulo: 'Ceviche Peruano',
        descricao: 'Peixe fresco marinado no suco de limão com coentro e pimenta.',
        imagem: 'Imagens/ceviche-peruano.png',
        ingredientes: ['500g de peixe branco fresco (tilápia, robalo) em cubos', 'Suco de 5 limões', '1 cebola roxa em fatias finas', '1 pimenta dedo-de-moça picada', 'Coentro picado a gosto', 'Sal e pimenta'],
        preparo: ['Em uma tigela de vidro, coloque os cubos de peixe e tempere com sal.', 'Adicione o suco de limão até quase cobrir o peixe e misture.', 'Deixe marinar na geladeira por cerca de 15 minutos (o peixe ficará opaco).', 'Adicione a cebola roxa, a pimenta e o coentro.', 'Misture bem e sirva imediatamente, acompanhado de batata doce cozida ou milho.']
    },
    {
        id: 'estrogonofe-de-carne',
        titulo: 'Estrogonofe de Carne',
        descricao: 'Tiras de carne em um molho cremoso. Sirva com arroz e batata palha.',
        imagem: 'Imagens/estrogonofe-de-carne.png',
        ingredientes: ['500g de filé mignon em tiras', '1 cebola picada', '1 caixa de creme de leite', '3 colheres de sopa de ketchup', '1 colher de sopa de mostarda', 'Sal, pimenta e champignon a gosto'],
        preparo: ['Tempere a carne com sal e pimenta.', 'Em uma panela, doure a carne em um fio de azeite e reserve.', 'Na mesma panela, refogue a cebola.', 'Volte a carne para a panela, adicione o ketchup, a mostarda e os champignons.', 'Misture bem e adicione o creme de leite. Mexa até aquecer, sem deixar ferver.', 'Sirva com arroz branco e batata palha.']
    },
    {
        id: 'batata-gratinada',
        titulo: 'Batata Gratinada',
        descricao: 'Fatias finas de batata com molho branco e queijo, assadas até dourar.',
        imagem: 'Imagens/batata-gratinada.png',
        ingredientes: ['5 batatas grandes', '1 caixa de creme de leite', '200g de queijo muçarela ralado', 'Sal, pimenta e noz-moscada a gosto'],
        preparo: ['Descasque as batatas e corte em fatias bem finas.', 'Em um refratário untado, faça camadas de batata, temperando cada camada com sal, pimenta e noz-moscada.', 'Despeje o creme de leite sobre as batatas.', 'Cubra com o queijo muçarela.', 'Leve ao forno pré-aquecido a 180°C por cerca de 50 minutos, ou até as batatas estarem macias e o topo dourado.']
    },
    {
        id: 'pudim-de-leite',
        titulo: 'Pudim de Leite',
        descricao: 'A sobremesa mais amada do Brasil, com uma calda de caramelo perfeita.',
        imagem: 'Imagens/pudim-de-leite.png',
        ingredientes: ['1 lata de leite condensado', 'A mesma medida de leite', '3 ovos', '1 xícara de açúcar para a calda'],
        preparo: ['Derreta o açúcar em uma panela até virar um caramelo. Despeje em uma forma de pudim.', 'No liquidificador, bata o leite condensado, o leite e os ovos.', 'Despeje a mistura na forma caramelizada.', 'Asse em banho-maria em forno pré-aquecido a 180°C por cerca de 1 hora.', 'Deixe esfriar completamente antes de desenformar.']
    },
    {
        id: 'macarrao-carbonara',
        titulo: 'Macarrão Carbonara',
        descricao: 'Uma receita romana clássica com ovos, queijo, pimenta e guanciale.',
        imagem: 'Imagens/macarrao-carbonara.png',
        ingredientes: ['200g de espaguete', '100g de guanciale ou bacon em cubos', '2 gemas de ovo', '50g de queijo pecorino ou parmesão ralado', 'Pimenta do reino moída na hora'],
        preparo: ['Cozinhe o macarrão conforme as instruções.', 'Enquanto isso, frite o guanciale em uma frigideira até ficar crocante. Desligue o fogo.', 'Em uma tigela, bata as gemas com o queijo e muita pimenta do reino.', 'Escorra o macarrão (reservando um pouco da água do cozimento) e jogue na frigideira com o guanciale.', 'Adicione a mistura de gemas e queijo, mexendo vigorosamente. Se necessário, adicione um pouco da água do cozimento para criar um molho cremoso.', 'Sirva imediatamente.']
    },
    {
        id: 'coxinha-de-frango',
        titulo: 'Coxinha de Frango',
        descricao: 'O salgado perfeito: massa macia e um recheio cremoso de frango.',
        imagem: 'Imagens/coxinha-de-frango.png',
        ingredientes: ['1 peito de frango cozido e desfiado', 'Caldo do cozimento do frango', '2 xícaras de farinha de trigo', 'Requeijão cremoso', 'Ovo e farinha de rosca para empanar'],
        preparo: ['Refogue o frango desfiado com temperos a gosto e misture com requeijão.', 'Em uma panela, aqueça 2 xícaras do caldo do cozimento. Adicione a farinha de uma vez e mexa até a massa desgrudar do fundo.', 'Sove a massa morna. Abra pequenas porções na mão, recheie e modele as coxinhas.', 'Passe no ovo batido, depois na farinha de rosca.', 'Frite em óleo quente até dourar.']
    },
    {
        id: 'smoothie-de-frutas',
        titulo: 'Smoothie de Frutas',
        descricao: 'Uma bebida refrescante e cheia de vitaminas para começar o dia.',
        imagem: 'Imagens/smoothie-de-frutas.png',
        ingredientes: ['1 banana congelada', '1 xícara de morangos congelados', '1/2 xícara de iogurte natural', '1/2 xícara de leite ou suco de laranja'],
        preparo: ['Coloque todos os ingredientes no liquidificador.', 'Bata em alta velocidade até obter uma mistura cremosa e homogênea.', 'Se necessário, adicione mais líquido para atingir a consistência desejada.', 'Sirva imediatamente.']
    },
    {
        id: 'moqueca-baiana',
        titulo: 'Moqueca Baiana',
        descricao: 'Peixe e frutos do mar cozidos lentamente no azeite de dendê e leite de coco.',
        imagem: 'Imagens/moqueca-baiana.png',
        ingredientes: ['500g de peixe branco em postas', '1 pimentão amarelo em rodelas', '1 pimentão vermelho em rodelas', '2 tomates em rodelas', '1 cebola em rodelas', '200ml de leite de coco', '2 colheres de sopa de azeite de dendê', 'Coentro e cebolinha a gosto'],
        preparo: ['Em uma panela de barro, faça camadas de cebola, pimentões, tomate e peixe.', 'Tempere com sal e pimenta.', 'Regue com o leite de coco e o azeite de dendê.', 'Cozinhe em fogo baixo, com a panela semi-tampada, por cerca de 20 minutos.', 'Finalize com coentro e cebolinha picados.', 'Sirva com arroz e pirão.']
    },
    {
        id: 'hamburguer-artesanal',
        titulo: 'Hambúrguer Artesanal',
        descricao: 'Aprenda a fazer um hambúrguer suculento e cheio de sabor em casa.',
        imagem: 'Imagens/hamburguer-artesanal.png',
        ingredientes: ['500g de carne moída (patinho, acém)', 'Sal e pimenta do reino', 'Pão de hambúrguer, queijo, alface, tomate'],
        preparo: ['Divida a carne em 3 ou 4 porções e molde os hambúrgueres.', 'Tempere com sal e pimenta apenas na hora de grelhar.', 'Aqueça uma frigideira de ferro em fogo alto.', 'Grelhe os hambúrgueres por 3-4 minutos de cada lado para um ponto médio.', 'No último minuto, coloque uma fatia de queijo sobre a carne para derreter.', 'Monte o lanche no pão com seus acompanhamentos preferidos.']
    },
    {
        id: 'cheesecake-de-morango',
        titulo: 'Cheesecake de Morango',
        descricao: 'Base crocante, recheio cremoso de queijo e uma cobertura de geleia.',
        imagem: 'Imagens/cheesecake-de-morango.png',
        ingredientes: ['200g de biscoito maisena triturado', '100g de manteiga derretida', '400g de cream cheese', '1 lata de leite condensado', 'Suco de 1 limão', 'Geleia de morango para cobertura'],
        preparo: ['Misture o biscoito triturado com a manteiga e forre o fundo de uma forma de fundo removível.', 'Asse por 10 minutos a 180°C.', 'Na batedeira, bata o cream cheese, o leite condensado e o suco de limão até ficar homogêneo.', 'Despeje sobre a base de biscoito e leve à geladeira por 4 horas.', 'Cubra com a geleia de morango antes de servir.']
    },
    {
        id: 'escondidinho-de-carne-seca',
        titulo: 'Escondidinho de Carne Seca',
        descricao: 'Carne seca desfiada coberta com um purê de mandioca cremoso e queijo.',
        imagem: 'Imagens/escondidinho-de-carne-seca.png',
        ingredientes: ['500g de carne seca dessalgada e desfiada', '1kg de mandioca cozida e amassada', '1/2 xícara de leite', '2 colheres de sopa de manteiga', 'Queijo coalho ralado para gratinar', 'Cebola e cheiro-verde'],
        preparo: ['Refogue a carne seca com cebola e cheiro-verde.', 'Prepare o purê misturando a mandioca amassada com o leite e a manteiga. Tempere com sal.', 'Em um refratário, coloque a carne seca refogada no fundo.', 'Cubra com o purê de mandioca.', 'Polvilhe queijo coalho por cima.', 'Leve ao forno para gratinar a 200°C.']
    },
    {
        id: 'tabule',
        titulo: 'Tabule',
        descricao: 'Salada libanesa refrescante feita com trigo, tomate, salsa e hortelã.',
        imagem: 'Imagens/tabule.png',
        ingredientes: ['1 xícara de trigo para quibe', '2 tomates picados sem sementes', '1 pepino picado', '1 maço de salsa picada', '1/2 maço de hortelã picada', 'Suco de 2 limões', 'Azeite, sal'],
        preparo: ['Hidrate o trigo em água morna por 1 hora. Escorra bem, espremendo para retirar o excesso de água.', 'Em uma tigela, misture o trigo com todos os outros ingredientes picados.', 'Tempere com suco de limão, azeite e sal.', 'Misture bem e sirva fria.']
    },
    {
        id: 'bolo-de-cenoura',
        titulo: 'Bolo de Cenoura',
        descricao: 'Um bolo fofinho com uma generosa cobertura de brigadeiro de chocolate.',
        imagem: 'Imagens/bolo-de-cenoura.png',
        ingredientes: ['3 cenouras médias raladas', '4 ovos', '1/2 xícara de óleo', '2 xícaras de açúcar', '2 1/2 xícaras de farinha de trigo', '1 colher de sopa de fermento em pó', 'Para a cobertura: 1 lata de leite condensado, 1 colher de sopa de manteiga, 3 colheres de sopa de chocolate em pó'],
        preparo: ['No liquidificador, bata as cenouras, os ovos e o óleo.', 'Despeje a mistura em uma tigela e adicione o açúcar e a farinha, misturando bem.', 'Por último, adicione o fermento.', 'Asse em forma untada em forno a 180°C por 40 minutos.', 'Para a cobertura, misture todos os ingredientes em uma panela e cozinhe em fogo baixo até o ponto de brigadeiro mole.', 'Despeje a cobertura sobre o bolo ainda quente.']
    },
    {
        id: 'yakisoba',
        titulo: 'Yakisoba',
        descricao: 'Macarrão frito com legumes e carne em um molho à base de shoyu.',
        imagem: 'Imagens/yakisoba.png',
        ingredientes: ['200g de macarrão para yakisoba', '150g de carne em tiras (frango ou boi)', 'Legumes variados (brócolis, cenoura, acelga)', '1/2 xícara de shoyu', '1 colher de sopa de amido de milho', 'Óleo de gergelim'],
        preparo: ['Cozinhe o macarrão e reserve.', 'Em uma panela wok, frite a carne em óleo quente. Adicione os legumes mais duros primeiro (cenoura), depois os mais macios.', 'Em uma tigela, misture o shoyu, o amido de milho e 1 xícara de água.', 'Despeje o molho na wok e mexa até engrossar.', 'Adicione o macarrão e um fio de óleo de gergelim.', 'Misture tudo e sirva.']
    },
    {
        id: 'pizza-caseira',
        titulo: 'Pizza Caseira',
        descricao: 'Prepare uma pizza deliciosa com ingredientes simples e frescos.',
        imagem: 'Imagens/pizza-caseira.png',
        ingredientes: ['Massa de pizza pronta ou caseira', 'Molho de tomate', 'Queijo muçarela ralado', 'Ingredientes a gosto (calabresa, frango, milho, orégano)'],
        preparo: ['Abra a massa de pizza em uma forma.', 'Espalhe uma camada de molho de tomate.', 'Cubra com queijo muçarela.', 'Distribua seus ingredientes preferidos por cima.', 'Polvilhe orégano.', 'Asse em forno bem quente (220°C) por cerca de 15-20 minutos.']
    },
    {
        id: 'bolo-de-fuba-com-goiabada',
        titulo: 'Bolo de Fubá com Goiabada',
        descricao: 'A combinação perfeita do bolo de fubá cremoso com pedaços de goiabada.',
        imagem: 'Imagens/bolo-de-fuba-com-goiabada.png',
        ingredientes: ['2 xícaras de fubá', '1 xícara de farinha de trigo', '2 xícaras de açúcar', '3 ovos', '1 xícara de óleo', '1 xícara de leite', '1 colher de sopa de fermento', '200g de goiabada em cubos'],
        preparo: ['Bata os ovos, o açúcar, o óleo e o leite no liquidificador.', 'Em uma tigela, misture o fubá e a farinha. Despeje a mistura líquida e mexa bem.', 'Adicione o fermento.', 'Passe os cubos de goiabada na farinha de trigo (para não afundarem) e misture na massa.', 'Despeje em uma forma untada e asse em forno a 180°C por cerca de 40 minutos.']
    }
];