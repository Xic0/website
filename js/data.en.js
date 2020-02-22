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

var c_cientifica = new Vue({
	el: "#idCientifica",
	data: {
		header: 'Comissão Científica',
		membros: [
			{ nome: 'Professor Doutor Fausto Amaro'},
			{ nome: 'Doutora Maria João Leote de Carvalho' },
			{ nome: 'Doutora Rosa Clemente' }
		]
	}
})

var programa = new Vue({
	"el":"#idPrograma1",
	"data":{
	  "header":"",
	  "horario":[
		{
		  "hora":"8h30",
		  "título":"Receção dos participantes",
		  "debate": false,
		  "tema": false
		},
		{
		  "hora":"9h00",
		  "título":"Sessão de Abertura",
		  "debate": false,
		  "tema": false
		},
		{
		  "hora":"9h30",
		  "título":"Direitos Humanos e Direitos Fundamentais da Criança – Desafios do Século XXI",
		  "debate": false,
		  "tema": true
		},
		{
		  "hora":"10h30",
		  "título":"Pausa para Café",
		  "debate": false,
		  "tema": false
		},
		{
		  "hora":"11h00",
		  "título":"Migrações, Integração e Direito à Proteção",
		  "debate": false,
		  "tema": true
		},
		{
		  "hora":"12h30",
		  "título":"Almoço Livre",
		  "debate": false,
		  "tema": false
		},
		{
		  "hora":"14h15",
		  "título":"Estatuto Pessoal e Proteção dos Direitos da Crianças Migrante – Políticas e Instrumentos Jurídicos Internacionais",
		  "debate": true,
		  "tema": true
		},
		{
		  "hora":"15h15",
		  "título":"Pausa para Café",
		  "debate": false,
		  "tema": false
		},
		{
		  "hora":"15h30",
		  "título":"Comunicação e Audição da Criança nas Decisões que Lhe Dizem Respeito",
		  "debate": true,
		  "tema": true
		},
		{
		  "hora":"17h00",
		  "título":"Encerramento dos Trabalhos",
		  "debate": false,
		  "tema": false
		}
	  ]
	}
  })

var programa2 = new Vue({
	"el":"#idPrograma2",
	"data":{
	  "header":"",
	  "horario":[
		{
		  "hora":"9h00",
		  "título":"Os Direitos Humanos da Criança – Que Práticas?",
		  "subtítulos":[
			"A Criança em Contexto de Violência Doméstica",
			"Criança, Família e Relações Laborais",
			"Criança Refugiada, Não Acompanhada e Separada da Família",
			"O Direito de Participação da Criança"
		  ],
		  "paralelas": true,
		  "debate":false,
		  "tema":true
		},
		{
		  "hora":"11h00",
		  "título":"Pausa para Café",
		  "paralelas": false,
		  "debate":false,
		  "tema":false
		},
		{
		  "hora":"11h30",
		  "título":"Continuação dos Trabalhos",
		  "paralelas": false,
		  "debate":false,
		  "tema":false
		},
		{
		  "hora":"12h30",
		  "título":"Almoço Livre",
		  "paralelas": false,
		  "debate":false,
		  "tema":false
		},
		{
		  "hora":"14h30",
		  "título":"Apresentação de Trabalhos realizados pelos alunos do Agrupamento de Escolas Padre António de Andrade – Oleiros e Agrupamento de Escolas da Bobadela sobre “Uma Justiça Amiga nas Escolas”",
		  "paralelas": false,
		  "debate":false,
		  "tema":false
		},
		{
		  "hora":"15h30",
		  "título":"Pausa para Café",
		  "paralelas": false,
		  "debate":false,
		  "tema":false
		},
		{
		  "hora":"15h45",
		  "título":"Momento Musical pela Orquestra Geração",
		  "paralelas": false,
		  "debate": false,
		  "tema": false
		},
		{
		  "hora":"16h15",
		  "título":"Apresentação das Conclusões das Sessões Paralelas",
		  "paralelas": false,
		  "debate": true,
		  "tema": false
		}
	  ]
	}
  })
	
  var Logos = new Vue({
	"el":"#idLogos",
	"data":{
		"images":[
			{
			   "alt":"Com o Alto Patrocínio de Sua Excelência o Presidente da Républica",
			   "style":"width:100%;padding:5px;",
			   "src":"img/PAT00.jpg"
			},
			{
			   "alt":"Logotipo Ministério Público",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO01.jpg"
			},
			{
			   "alt":"Logotipo Provedor de Justiça",
			   "style":"width:100%;padding:5px;",
			   "src":"img/PJUS.jpg"
			},
			{
			   "alt":"Logotipo Ordem dos Advogados",
			   "style":"height:100px; padding:5px;",
			   "src":"img/CCCO04.jpg"
			},
			{
			   "alt":"Logotipo CNPDPCJ",
			   "style":"height:100px; padding:5px;",
			   "src":"img/CCCO03.jpg"
			},
			{
			   "alt":"Logotipo DGRSP",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO02.jpg"
			},
			{
			   "alt":"Logotipo CEJ",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO08.png"
			},
			{
			   "alt":"Logotipo Segurança Social",
			   "style":"padding:5px;",
			   "src":"img/CCCO06.jpg"
			},
			{
			   "alt":"Logotipo SCML",
			   "style":"height:100px; padding:5px;",
			   "src":"img/16.png"
			},
			{
			   "alt":"Logotipo Casa Pia",
			   "style":"height:100px; padding:5px;",
			   "src":"img/CP.png"
			},
			{
			   "alt":"Logotipo CDFUC",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO07.jpg"
			},
			{
			   "alt":"Logotipo NOVA FCSH",
			   "style":"height:100px; padding:5px;",
			   "src":"img/FCSH.png"
			},
			{
			   "alt":"Logotipo FCT",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO14.png"
			},
			{
			   "alt":"Logotipo Universidade Atlântica",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO09.jpg"
			},
			{
			   "alt":"Logotipo Cáritas",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO10.jpg"
			},
			{
			   "alt":"Logotipo CrescerSer",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO12.jpg"
			},
			{
			   "alt":"Logotipo ComDignitatis",
			   "style":"height:80px; padding:5px;",
			   "src":"img/CCCO13.png"
			}
		 ]
	}
  })


var dispSessions = new Vue({
	"el":"#idOradores",
	"data":{
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
			"title": "Estatuto Pessoal e Proteção dos Direitos da Crianças Migrante – Políticas e Instrumentos Jurídicos Internacionais",
			"oradores": [
			  {
				"nome": "Lucília Gago",
				"cargo": "Procuradora-Geral da República",
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
			"id": "1_3",
			"title": "Migrações, Integração e Direito à Proteção",
			"oradores": [
			  {
				"nome": "Maria Lúcia Amaral",
				"cargo": "Provedora de Justiça, Serviço de Estrangeiros e Fronteiras",
				"nb": "",
				"presidente": true
			  },
			  {
				"nome": "",
				"cargo": "",
				"nb": "",
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
				"cargo": "Subcomissária da PSP",
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
				"cargo": "Pediatra",
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
				"nome": "Casa Pia de Lisboa*",
				"cargo": "Casa Pia de Lisboa*",
				"nb": "",
				"presidente": false
			  },
			  {
				"nome": "Provedoria de Justiça*",
				"cargo": "Provedoria de Justiça*",
				"nb": "",
				"presidente": false
			  },
			  {
				"nome": "Serviço de Estrangeiros e Fronteiras*",
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
				"cargo": "Santa Casa da Misericórdia de Lisboa**",
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




