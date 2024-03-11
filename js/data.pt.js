var navbar = new Vue({
	el: '#Navbar',
	data: {
		shorttitle: 'IV Congresso Europeu Sobre Uma Justiça Amiga das Crianças',
		url_form: 'https://forms.gle/Lx4bmxQhVJEDkPmh8'
	}
})

var navDemo = new Vue({
	el: '#navDemo',
	data: {
		url_form: 'https://forms.gle/Lx4bmxQhVJEDkPmh8'
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
			{ text: 'Santa Casa da Misericórdia de Lisboa' },
			{ text: 'Casa Pia de Lisboa' },
			{ text: 'Centro de Direito da Família da Universidade de Coimbra' },
			{ text: 'Centro Interdisciplinar de Ciências Sociais da Universidade Nova de Lisboa' },
			{ text: 'Universidade Atlântica' },
			{ text: 'CrescerSer ─ Associação Portuguesa para o Direito dos Menores e da Família' },
			{ text: 'ComDignitatis ─ Associação Portuguesa para a Promoção da Dignidade Humana' }
		]
	}
})

var science = new Vue({
	el: '#idCientifica',
	data: {
		header: 'Comissão Científica',
		members: [
			{ text: 'Professor Doutor Fausto Amaro' },
			{ text: 'Doutora Maria João Leote de Carvalho' },
			{ text: 'Doutora Rosa Clemente' },
		]
	}
})

var mensagem = new Vue({
	"el": "#idMensagem",
	"data": {
		"header": "Mensagem de Apresentação",
		"paragrafos": [
			"Ipsum nisi cupidatat ea consequat eu duis ex duis et ad. Minim dolor mollit ipsum occaecat pariatur eiusmod eu tempor anim. Sit commodo ad non ea minim nostrud pariatur id pariatur eu irure elit ad eu. Ex nulla est veniam duis in. Consequat nostrud nostrud ullamco quis dolor velit duis mollit enim sit in. Aliquip labore cupidatat ipsum ipsum eiusmod magna magna incididunt deserunt sit excepteur anim ipsum officia.",
			"Id sit et aliquip id irure dolor est. Ad consequat est amet consequat reprehenderit adipisicing culpa deserunt do incididunt proident Lorem ipsum. Eiusmod laborum labore ex et pariatur elit ipsum. Tempor dolore officia labore quis magna magna cillum ut.",
			"Duis officia enim velit occaecat adipisicing consectetur nostrud culpa aute laboris proident duis dolor cupidatat. Cillum minim et consequat ullamco velit sit aliqua sunt id voluptate excepteur elit ut irure. Sunt officia consequat culpa est minim anim consectetur minim duis irure. Ad non labore et exercitation deserunt officia. Qui dolore in cupidatat exercitation Lorem officia laboris aute aute nisi Lorem. Sunt culpa et veniam labore nostrud irure. Ut sint est nisi nulla.",
			"Minim eiusmod irure incididunt exercitation commodo eu elit ut adipisicing nulla sit laboris. Cillum laborum irure duis incididunt adipisicing. Laboris dolore officia ad commodo ad.",
			"Non Lorem et aute Lorem nostrud officia quis pariatur aute ad officia duis qui et. Dolore deserunt tempor nostrud duis nulla ipsum dolor ipsum non tempor. Nisi consequat veniam esse nisi qui. Commodo veniam excepteur duis sint consectetur tempor eu enim quis.",
		]
	}
})

var programa = new Vue({
	"el": "#idPrograma1",
	"data": {
		"horario": [
			{
				"hora": "9h00",
				"título": "Receção dos participantes",
				"debate": false,
				"tema": false
			},
			{
				"hora": "9h30",
				"título": "Sessão de Abertura",
				"debate": false,
				"tema": false
			},
			{
				"hora": "10h00",
				"título": "",
				"subtítulos": [
					"O Direito Humano das Crianças à Educação: Perspetivas da Pedagogia, do Ensino e da Avaliação",
					"Estratégia Global para a Família na Educação das Crianças"
				],
				"paralelas": false,
				"multiplas": true,
				"debate": false,
				"tema": false
			},
			{
				"hora": "11h30",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "12h00",
				"título": "Pressupostos e Conteúdo do Direito à Educação na Convenção Sobre os Direitos da Criança",
				"debate": false,
				"tema": true
			},
			{
				"hora": "12h45",
				"título": "Almoço livre",
				"debate": false,
				"tema": false
			},
			{
				"hora": "14h00",
				"título": "Momento Lúdico",
				"debate": false,
				"tema": false
			},
			{
				"hora": "14h30",
				"título": "Missão da Escola: Educação Formal e Não Formal – Complementaridade ou Confronto?",
				"debate": false,
				"tema": false
			}
			,
			{
				"hora": "15h15",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			}
			,
			{
				"hora": "15h30",
				"título": "O Direito à Educação na Era da Inteligência Artificial",
				"debate": false,
				"tema": false
			}
			,
			{
				"hora": "16h15",
				"título": "Outras Formas de Educar",
				"debate": true,
				"tema": false
			},
			{
				"hora": "17h00",
				"título": "Encerramento dos Trabalhos",
				"debate": false,
				"tema": false
			}
		]
	}
})

var programa1 = new Vue({
	"el": "#idPrograma2",
	"data": {
		"horario": [
			{
				"hora": "9h30",
				"título": "O Direito à Educação",
				"subtítulos": [
					"A Escola e a Saúde Mental das Crianças",
					"A Escola Inclusiva e a Multiculturalidade",
					"A Escola, Famílias e Cidadania",
					"A Violência na Escola e o Direito da Criança a Ter uma Tutela Educativa"
				],
				"paralelas": true,
				"debate": false,
				"tema": true
			},
			{
				"hora": "11h00",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "11h30",
				"título": "Continuação dos Trabalhos",
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
				"hora": "14h30",
				"título": "Vozes",
				"debate": false,
				"tema": false
			},
			{
				"hora": "15h30",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "15h45",
				"título": "Apresentação das Conclusões das Sessões Paralelas",
				"debate": true,
				"tema": true
			},
			{
				"hora": "17h15",
				"título": "Comentário Final",
				"debate": false,
				"tema": false
			},
			{
				"hora": "17h30",
				"título": "Encerramento do IV Congresso Europeu Sobre Uma Justiça Amiga das Crianças",
				"debate": false,
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
				"id": "c_1",
				"title": "O Direito Humano das Crianças à Educação: Perspetivas da Pedagogia, do Ensino e da Avaliação",
				"oradores": [
					{
						"nome": "Rosário Farmhouse",
						"cargo": "Comissão Nacional de Promoção dos Direitos e Proteção das Crianças e Jovens",
						"nb": "",
						"presidente": true
					},
					{
						"nome": "Domingos Fernandes",
						"cargo": "Presidente do Conselho Nacional de Educação",
						"nb": "NB2024/NB2024_D6sF7s.pdf",
						"presidente": false
					}
				],
				"layout": 2
			},
			{
				"id": "c_2",
				"title": "Estratégia Global para a Família na Educação das Crianças",
				"oradores": [
					{
						"nome": "Juan Ambrósio",
						"cargo": "Universidade Católica Portuguesa",
						"nb": "NB2024/NB2024_J2nA6o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 1
			},
			{
				"id": "c_3",
				"title": "Pressupostos e Conteúdo do Direito à Educação na Convenção Sobre os Direitos da Criança",
				"oradores": [
					{
						"nome": "Armando Leandro",
						"cargo": "Juiz Conselheiro Jubilado",
						"nb": "",
						"presidente": true,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Laborinho Lúcio",
						"cargo": "Juiz Conselheiro Jubilado",
						"nb": "NB2024/NB2024_L7oL3o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 2
			},
			{
				"id": "c_4",
				"title": "Momento Lúdico",
				"oradores": [
					{
						"nome": "Jorge Serafim",
						"cargo": "Contador de Histórias",
						"nb": "",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 1
			},
			{
				"id": "c_5",
				"title": "Missão da Escola: Educação Formal e Não Formal – Complementaridade ou Confronto?",
				"oradores": [
					{
						"nome": "Paula Távora Vítor",
						"cargo": "Centro de Direito da Família da Faculdade de Direito da Universidade de Coimbra",
						"nb": "",
						"presidente": true,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Maria de Fátima Matos",
						"cargo": "Presidente do Conselho Diretivo da Casa Pia de Lisboa",
						"nb": "NB2024/NB2024_M3aF4aM3s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 2
			},
			{
				"id": "c_6",
				"title": "O Direito à Educação na Era da Inteligência Artificial",
				"oradores": [
					{
						"nome": "Isabel Malheiro de Almeida",
						"cargo": "Ordem dos Advogados",
						"nb": "",
						"presidente": true,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "João Couvaneiro",
						"cargo": "Professor",
						"nb": "NB2024/NB2024_J2oC8o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 2
			},
			{
				"id": "c_7",
				"title": "Outras Formas de Educar",
				"oradores": [
					{
						"nome": "Direção-Geral de Reinserção e Serviços Prisionais*",
						"cargo": "",
						"nb": "",
						"presidente": true,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Ana Passos e Sousa",
						"cargo": "Projeto Escola Lá Fora",
						"nb": "NB2024/NB2024_A1aP4sS3a.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Projeto Achieve+",
						"cargo": "Projeto Achieve+",
						"nb": "",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 3
			},
			{
				"id": "c_8",
				"title": "A Escola e a Saúde Mental das Crianças",
				"oradores": [
					{
						"nome": "António Santinha",
						"cargo": "Santa Casa da Misericórdia de Lisboa",
						"nb": "NB2024/NB2024_A5oS6a.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					},
					{
						"nome": "Filipe Silva",
						"cargo": "Psicólogo",
						"nb": "NB2024/NB2024_F4eS3a.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Ricardo Rodrigues",
						"cargo": "Enfermeiro",
						"nb": "NB2024/NB2024_R5oR7s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Rui Godinho",
						"cargo": "Santa Casa da Misericórdia de Lisboa",
						"nb": "NB2024/NB2024_R1iG5o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 4
			},
			{
				"id": "c_9",
				"title": "A Escola Inclusiva e a Multiculturalidade",
				"oradores": [
					{
						"nome": "Leonor Fechas",
						"cargo": "Casa Pia de Lisboa",
						"nb": "NB2024/NB2024_L4rF4s.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					},
					{
						"nome": "Antero Afonso",
						"cargo": "Arco Maior",
						"nb": "NB2024/NB2024_A4oA4o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "António Vale",
						"cargo": "Associação de Mães e Pais pela Liberdade de Orientação Sexual e Identidade de Género – AMPLOS",
						"nb": "NB2024/NB2024_A5oV2e.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Fátima Teles",
						"cargo": "Professora",
						"nb": "NB2024/NB2024_F4aT3s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Mafalda Nunes",
						"cargo": "Casa Pia de Lisboa",
						"nb": "NB2024/NB2024_M5aN3s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 5
			},
			{
				"id": "c_10",
				"title": "A Escola, Famílias e Cidadania",
				"oradores": [
					{
						"nome": "José Carlos Matias",
						"cargo": "Direção-Geral da Educação",
						"nb": "NB2024/NB2024_J2eC4sM4s.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					},
					{
						"nome": "Dulce Marques",
						"cargo": "Instituto Português do Desporto e Juventude, IP",
						"nb": "",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Helena Gil",
						"cargo": "Direção-Geral da Educação",
						"nb": "NB2024/NB2024_H4aG1l.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Teresa Lopes",
						"cargo": "Agrupamento de Escolas Ibn Mucana",
						"nb": "",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 4
			},
			{
				"id": "c_11",
				"title": "A Violência na Escola e o Direito da Criança a Ter uma Tutela Educativa",
				"oradores": [
					{
						"nome": "Rosa Clemente",
						"cargo": "Centro de Direito da Família da Faculdade de Direito da Universidade de Coimbra",
						"nb": "NB2024/NB2024_R2aC6e.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					},
					{
						"nome": "José Pedro Barros",
						"cargo": "Juiz de Direito",
						"nb": "",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Paula Soares",
						"cargo": "Procuradora-Geral Adjunta",
						"nb": "NB2024/NB2024_P3aS4s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Sofia Nunes da Silva",
						"cargo": "Psicóloga e Terapeuta Familiar",
						"nb": "NB2024/NB2024_S3aN3sS3a.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Tiago Castelo",
						"cargo": "Procurador da República",
						"nb": "NB2024/NB2024_T3oC5o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Alcina da Costa Ribeiro",
						"cargo": "Juíza Desembargadora do Tribunal da Relação de Coimbra e Presidente da Mesa da Assembleia Geral da ComDignitatis",
						"nb": "NB2024/NB2024_A4aC3aR5o.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Vozes"
					}
				],
				"layout": 5
			},
			{
				"id": "c_12",
				"title": "Apresentação das Conclusões das Sessões Paralelas",
				"oradores": [
					{
						"nome": "Idália Serrão",
						"cargo": "Associação Mutualista Montepio Geral",
						"nb": "NB2024/NB2024_I4aS4o.pdf",
						"presidente": true,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Paulo Guerra",
						"cargo": "Juiz Desembargador",
						"nb": "NB2024/NB2024_P3oG4a.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Relator"
					},
					{
						"nome": "Ana Castro",
						"cargo": "Procuradora da República e Docente do Centro de Estudos Judiciários",
						"nb": "NB2024/NB2024_A1aC4o.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Correlatores"
					},
					{
						"nome": "Chandra Gracias",
						"cargo": "Juíza de Direito",
						"nb": "NB2024/NB2024_C5aG5s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					},
					{
						"nome": "Maria Oliveira Mendes",
						"cargo": "Procuradora da República e Docente do Centro de Estudos Judiciários",
						"nb": "NB2024/NB2024_M3aO6aM4s.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 5
			},
			{
				"id": "c_13",
				"title": "Comentário Final",
				"oradores": [
					{
						"nome": "Maria João Leote de Carvalho",
						"cargo": "Centro Interdisciplinar de Ciências Sociais (CICS.NOVA.FCSH) da Universidade NOVA de Lisboa",
						"nb": "NB2024/NB2024_M3aJ2oL3eC6o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 1
			}
		]
	},
})