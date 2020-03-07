var navbar = new Vue({
	el: '#Navbar',
	data: {
		shorttitle: 'III Congresso Europeu'
	}
})

var organization = new Vue({
	el: '#idOrganização',
	data: {
		header: 'Comissão Organizadora',
		members: [
			{ text: 'Procuradoria-Geral da República' },
			{ text: 'Provedoria de Justiça' },
			{ text: 'Ordem dos Advogados' },
			{ text: 'Comissão Nacional de Promoção dos Direitos e Proteção das Crianças e Jovens' },
			{ text: 'Direção-Geral de Reinserção e Serviços Prisionais' },
			{ text: 'Centro de Estudos Judiciários' },
			{ text: 'Instituto da Segurança Social, I.P.' },
			{ text: 'Santa Casa da Misericórdia de Lisboa' },
			{ text: 'Casa Pia de Lisboa' },
			{ text: 'Centro de Direito da Família da Universidade de Coimbra' },
			{ text: 'Centro Interdisciplinar de Ciências Sociais da Universidade Nova de Lisboa' },
			{ text: 'Universidade Atlântica' },
			{ text: 'Cáritas Portuguesa' },
			{ text: 'CrescerSer - Associação Portuguesa para o Direito dos Menores e da Família' },
			{ text: 'ComDignitatis' }
		]
	}
})


var mensagem = new Vue({
	"el": "#idMensagem",
	"data": {
		"header": "Mensagem de Apresentação",
		"paragrafos": [
			"Com a adoção da Declaração Universal dos Direitos Humanos, em 1948, as Nações Unidas estabeleceram um padrão comum de direitos humanos. Desde então todos os tratados subsequentes, que incidem sobre a generalidade ou a especificidade dos direitos humanos, têm como matriz o princípio fundamental de que todos os seres humanos, qualquer que seja a sua nacionalidade, local de residência, sexo, origem étnica, cor, religião, idioma ou qualquer outro status, devem ser tratados com igualdade e respeito pela sua dignidade enquanto pessoas.",
			"Nesta linha, também a CDC desenvolve e incorpora o conceito dos direitos das crianças a partir do movimento geral de direitos humanos e define uma estratégia estruturante assente em todas as categorias - onde se incluem direitos civis, políticos, económicos, sociais e culturais – precisando, por outro lado, cada direito especificamente por forma a que se torne uma realidade para todas as crianças.",
			"Não por acaso, é reconhecido o contributo que a Convenção vem assumindo, pelo seu impacto a nível mundial, na afirmação e garantia dos direitos humanos contribuindo decisivamente para os esforços desenvolvidos nesse sentido pelas instituições da ONU, particularmente pela UNICEF e pela Organização Internacional do trabalho (OIT). Tal como é uma evidência que o conhecimento sistemático do quadro internacional dos direitos do homem - envolvendo a sociedade civil, os profissionais, os pais e as próprias crianças - favorece um melhor conhecimento dos direitos da criança e ajuda a sensibilizar para as ações que garantam, a todas e a cada uma, a realização dos seus direitos sem discriminação de qualquer natureza.",
			"Ciente desta realidade a ComDignitatis - Associação Portuguesa para a Promoção da Dignidade Humana prosseguindo o trabalho que vem desenvolvendo a favor das crianças na defesa da sua dignidade como pessoa, vai promover, em parceria com um conjunto de instituições públicas e privadas, um amplo debate sobre este tema, no quadro do III Congresso Europeu sobre a Justiça Amiga das Crianças.",
			"Partindo dos princípios que enformam a Justiça Amiga das Crianças, concentrados em três questões-chave para a proteção dos direitos das crianças, designadamente, (i) a igualdade de oportunidades para todas em todos os níveis do seu desenvolvimento, (ii) a participação assegurando-lhes uma vida inclusiva e livre de violência e (iii) o acesso à justiça, é intenção da ComDignitatis promover o debate e a reflexão tendentes a estabelecer o diagnostico da situação, sinalizando indicadores de ganhos e de constrangimentos. E sendo bem conhecida a dificuldade que a materialização destes princípios e direitos tem evidenciado, sobretudo quando se está perante factores adversos que assolam as sociedades na atualidade, com forte impacto negativo no respeito pelos direitos humanos (com particular incidência no grupo das crianças migrantes- refugiadas não acompanhadas ou separadas da família - que enfrentam todos os dias situações de exclusão, de perigo e de enorme precariedade) pretende-se que o diagnóstico estabeleça uma atenção prioritária à situação da criança nestas condições. Dados recentes convocam-nos para a emergência desta prioridade.",
			"A Europol estima que “desaparecem” cerca de 10 000 crianças migrantes não acompanhadas após a chegada à Europa. Algumas desaparecem porque querem continuar a sua jornada e procurar parentes; outras podem cair nas mãos de traficantes e serem exploradas e vitimas de abusos; outras ainda, mesmo quando acompanhadas pelos pais, sofrem frequentemente violações persistentes dos seus direitos humanos (exemplos desta situação: o uso recorrente da detenção em vez de proteção social e as lacunas relativas ao direito de asilo).",
			"Estes dados vêm, aliás, suscitando preocupação crescente nas Instituições internacionais e nos decisores, tal como evidenciam a necessidade de políticas mais fortes e melhores recursos. E é por isso que o Conselho da Europa consagrou a proteção da criança migrante e refugiada como uma das ações prioritárias da “Estratégia Europeia sobre os Direitos da Criança (2016/2021) ”.",
			"Por tudo o que antecede, o III Congresso Europeu sobre a Justiça Amiga da Criança tem como tema central os “Direitos Humanos e a Criança”, com um foco especial nas questões relativas às crianças migrantes, refugiadas, não acompanhadas ou afastadas da família. O objetivo é o de contribuir para promover um amplo debate sobre as questões que se identificam como violadoras dos direitos humanos da criança, dando especial relevância e visibilidade aos problemas da criança migrante, tendente a contribuir para a definição das melhores politicas de acolhimento, integração e proteção da criança nestas circunstancias, tendo como suporte e referência a Declaração Universal dos Direitos Humanos, a Convenção dos Direitos da Criança e as Diretrizes da Justiça Amiga da Criança."
		]
	}
})


var c_cientifica = new Vue({
	el: "#idCientifica",
	data: {
		header: 'Comissão Científica',
		membros: [
			{ nome: 'Professor Doutor Fausto Amaro' },
			{ nome: 'Doutora Maria João Leote de Carvalho' },
			{ nome: 'Doutora Rosa Clemente' }
		]
	}
})

var programa = new Vue({
	"el": "#idPrograma1",
	"data": {
		"horario": [
			{
				"hora": "8h30",
				"título": "Receção dos participantes",
				"debate": false,
				"tema": false
			},
			{
				"hora": "9h00",
				"título": "Sessão de Abertura",
				"debate": false,
				"tema": false
			},
			{
				"hora": "9h30",
				"título": "Direitos Humanos e Direitos Fundamentais da Criança – Desafios do Século XXI",
				"debate": false,
				"tema": true
			},
			{
				"hora": "10h30",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "11h00",
				"título": "Migrações, Integração e Direito à Proteção",
				"debate": false,
				"tema": true
			},
			{
				"hora": "12h30",
				"título": "Almoço Livre",
				"debate": false,
				"tema": false
			},
			{
				"hora": "14h15",
				"título": "Estatuto Pessoal e Proteção dos Direitos da Crianças Migrante – Políticas e Instrumentos Jurídicos Internacionais",
				"debate": true,
				"tema": true
			},
			{
				"hora": "15h15",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "15h30",
				"título": "Políticas e Práticas de Sustentabilidade da Coesão Familiar – o Papel do Empresariado",
				"debate": true,
				"tema": true
			},
			{
				"hora": "17h00",
				"título": "Momento Musical pela Orquestra Geração",
				"debate": false,
				"tema": false
			}
		]
	}
})

var programa2 = new Vue({
	"el": "#idPrograma2",
	"data": {
		"horario": [
			{
				"hora": "9h00",
				"título": "Os Direitos Humanos da Criança – Que Práticas?",
				"subtítulos": [
					"A Criança em Contexto de Violência Doméstica",
					"Criança, Família e Relações Laborais",
					"Criança Refugiada, Não Acompanhada e Separada da Família",
					"O Direito de Participação da Criança"
				],
				"paralelas": true,
				"debate": false,
				"tema": true
			},
			{
				"hora": "11h00",
				"título": "Pausa para Café",
				"paralelas": false,
				"debate": false,
				"tema": false
			},
			{
				"hora": "11h30",
				"título": "Continuação dos Trabalhos",
				"paralelas": false,
				"debate": false,
				"tema": false
			},
			{
				"hora": "12h30",
				"título": "Almoço Livre",
				"paralelas": false,
				"debate": false,
				"tema": false
			},
			{
				"hora": "14h30",
				"título": "Apresentação de Trabalhos realizados pelos alunos do Agrupamento de Escolas Padre António de Andrade – Oleiros e Agrupamento de Escolas da Bobadela sobre “Uma Justiça Amiga nas Escolas”",
				"paralelas": false,
				"debate": false,
				"tema": false
			},
			{
				"hora": "15h30",
				"título": "Pausa para Café",
				"paralelas": false,
				"debate": false,
				"tema": false
			},
			{
				"hora": "15h45",
				"título": "Apresentação das Conclusões das Sessões Paralelas",
				"paralelas": false,
				"debate": true,
				"tema": false
			}
		]
	}
})

var dispSessions = new Vue({
	"el": "#idOradores",
	"data": {
		"sessions": [
			{
				"id": "1_1",
				"title": "Direitos Humanos e Direitos Fundamentais da Criança– Desafios do Século XXI",
				"oradores": [
					{
						"nome": "Lucília Gago",
						"cargo": "Procuradora-Geral da República",
						"nb": "",
						"presidente": true
					},
					{
						"nome": "Marta Santos Pais",
						"cargo": "Comissão de Acompanhamento das Crianças Sírias Refugiadas",
						"nb": "",
						"presidente": false
					}
				],
				"layout": 2
			},
			{
				"id": "1_2",
				"title": "Migrações, Integração e Direito à Proteção",
				"oradores": [
					{
						"nome": "por confirmar",
						"cargo": "",
						"nb": "",
						"presidente": true
					},
					{
						"nome": "por confirmar",
						"cargo": "",
						"nb": "",
						"presidente": false
					}
				],
				"layout": 2
			},
			{
				"id": "1_3",
				"title": "Estatuto Pessoal e Proteção dos Direitos da Crianças Migrante – Políticas e Instrumentos Jurídicos Internacionais",
				"oradores": [
					{
						"nome": "Maria Lúcia Amaral",
						"cargo": "Provedora de Justiça",
						"nb": "",
						"presidente": true
					},
					{
						"nome": "George Moschos",
						"cargo": "Rede Europeia de Ombudsman",
						"nb": "NB2020/NB2020_GM.pdf",
						"presidente": false
					}
				],
				"layout": 2
			},
			{
				"id": "1_4",
				"title": "Comunicação e Audição da Criança nas Decisões que Lhe Dizem Respeito",
				"oradores": [
					{
						"nome": "Maria Lúcia Amaral",
						"cargo": "Provedora de Justiça, Serviço de Estrangeiros e Fronteiras",
						"nb": "",
						"presidente": true
					},
					{
						"nome": "Catarina Tomás",
						"cargo": "Escola Superior de Educação de Lisboa e Centro Interdisciplinar de Ciências Sociais da Universidade Nova de Lisboa",
						"nb": "NB2020/NB2020_CT.pdf",
						"presidente": false
					}
				],
				"layout": 2
			},
			{
				"id": "1_5",
				"title": "Políticas e Práticas de Sustentabilidade da Coesão Familiar – o Papel do Empresariado",
				"oradores": [
					{
						"nome": "Paula Guimarães",
						"cargo": "Objetivos do Milénio/Nações Unidas",
						"nb": "NB2020/NB2020_PG.pdf",
						"presidente": false
					}
				],
				"layout": 1
			},
			{
				"id": "2_1",
				"title": "A Criança em Contexto de Violência Doméstica",
				"oradores": [
					{
						"nome": "António Castanho",
						"cargo": "Ministério da Administração Interna",
						"nb": "NB2020/NB2020_AC.pdf",
						"presidente": false
					},
					{
						"nome": "Aurora Dantier",
						"cargo": "Comissário da PSP",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Dália Costa",
						"cargo": "Centro de Administração e Políticas Públicas, ISCSP, Universidade de Lisboa",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Helena Almeida",
						"cargo": "Pediatra, Núcleo Hospitalar de Apoio às Crianças e Jovens em Risco do Hospital Fernando Fonseca",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Helena Gonçalves",
						"cargo": "Procuradora da República",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Rosa Clemente",
						"cargo": "Centro de Direito da Família da Faculdade de Direito de Coimbra",
						"nb": "NB2020/NB2020_RC.pdf",
						"presidente": false
					}
				],
				"layout": 6
			},
			{
				"id": "2_2",
				"title": "Criança, Família e Relações Laborais",
				"oradores": [
					{
						"nome": "Ana Lúcia Vieira",
						"cargo": "Associação Pais em Rede",
						"nb": "NB2020/NB2020_ALV.pdf",
						"presidente": false
					},
					{
						"nome": "Fátima Matos",
						"cargo": "Instituto da Segurança Social, IP",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Fausto Leite",
						"cargo": "Advogado",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "João Rato",
						"cargo": "Procurador-Geral Adjunto",
						"nb": "NB2020/NB2020_JR.pdf",
						"presidente": false
					},
					{
						"nome": "Maria João Cunha",
						"cargo": "Delta",
						"nb": "NB2020/NB2020_MJC.pdf",
						"presidente": false
					},
					{
						"nome": "Paula Pinto",
						"cargo": "Centro de Administração e Políticas Públicas, ISCSP, Universidade de Lisboa",
						"nb": "",
						"presidente": false
					}
				],
				"layout": 6
			},
			{
				"id": "2_3",
				"title": "Criança Refugiada, Não Acompanhada e Separada da Família",
				"oradores": [
					{
						"nome": "Célia Chamiça",
						"cargo": "Comissão Nacional de Promoção dos Direitos e Proteção das Crianças e Jovens",
						"nb": "NB2020/NB2020_CC.pdf",
						"presidente": false
					},
					{
						"nome": "Maria João Leote de Carvalho",
						"cargo": "Centro Interdisciplinar de Ciências Sociais da Universidade Nova de Lisboa",
						"nb": "NB2020/NB2020_MJLC.pdf",
						"presidente": false
					},
					{
						"nome": "Martino Gliozzi",
						"cargo": "Centro de Saúde do Martim Moniz**",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Leonor Fechas",
						"cargo": "Casa Pia de Lisboa",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Ricardo Carvalho",
						"cargo": "Provedoria de Justiça",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "por confirmar",
						"cargo": "Serviço de Estrangeiros e Fronteiras*",
						"nb": "",
						"presidente": false
					}
				],
				"layout": 6
			},
			{
				"id": "2_4",
				"title": "O Direito de Participação da Criança",
				"oradores": [
					{
						"nome": "Alcina da Costa Ribeiro",
						"cargo": "Juíza Desembargadora",
						"nb": "NB2020/NB2020_ACR.pdf",
						"presidente": false
					},
					{
						"nome": "António Santinha",
						"cargo": "Santa Casa da Misericórdia de Lisboa",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Joana Garcia da Fonseca",
						"cargo": "Comissão Nacional de Promoção dos Direitos e Proteção das Crianças e Jovens",
						"nb": "NB2020/NB2020_JF.pdf",
						"presidente": false
					},
					{
						"nome": "Julieta Monginho",
						"cargo": "Procuradora-Geral Adjunta",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Paulo Pinto",
						"cargo": "PSP do Porto",
						"nb": "",
						"presidente": false
					},
					{
						"nome": "Sandra Veiga",
						"cargo": "Casa Pia de Lisboa",
						"nb": "NB2020/NB2020_SV.pdf",
						"presidente": false
					},
					{
						"nome": "Sara Pereira",
						"cargo": "Universidade do Minho",
						"nb": "NB2020/NB2020_SP.pdf",
						"presidente": false
					}
				],
				"layout": 7
			},
			{
				"id": "2_5",
				"title": "Apresentação das Conclusões das Sessões Paralelas",
				"oradores": [
					{
						"nome": "Armando Leandro",
						"cargo": "Juiz Conselheiro Jubilado",
						"nb": "",
						"extra": true,
						"texto": "Presidente da Mesa"
					},
					{
						"nome": "Paulo Guerra",
						"cargo": "Juiz Desembargador",
						"nb": "NB2020/NB2020_PGU.pdf",
						"extra": true,
						"texto": "Relator"
					},
					{
						"nome": "Ana Teresa Leal",
						"cargo": "Procuradora da República e Docente do Centro de Estudos Judiciários",
						"nb": "NB2020/NB2020_ATL.pdf",
						"extra": true,
						"texto": "Correlatores"
					},
					{
						"nome": "Fátima Serrano",
						"cargo": "Secretária-Geral da CrescerSer",
						"nb": "NB2020/NB2020_FS.pdf",
						"extra": false
					},
					{
						"nome": "Maria Perquilhas",
						"cargo": "Juíza Desembargadora",
						"nb": "",
						"extra": false
					},
					{
						"nome": "Pedro Raposo de Figueiredo",
						"cargo": "Juiz de Direito e Docente do Centro de Estudos Judiciários",
						"nb": "",
						"extra": false
					}
				],
				"layout": 10
			}
		]
	}
})
