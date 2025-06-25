var navbar = new Vue({
	el: '#Navbar',
	data: {
		shorttitle: 'Conclusões do IV Congresso Europeu Sobre Uma Justiça Amiga das Crianças',
		url_form: 'https://forms.gle/AZnGWjJ8DthPMXp7A'
	}
})

var navDemo = new Vue({
	el: '#navDemo',
	data: {
		url_form: 'https://forms.gle/AZnGWjJ8DthPMXp7A'
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
				"hora": "9h30",
				"título": "Receção dos participantes",
				"debate": false,
				"tema": false
			},
			{
				"hora": "10h00",
				"título": "Sessão de Abertura",
				"debate": false,
				"tema": false
			},
			{
				"hora": "10h30",
				"título": "Leitura das Conclusões do IV Congresso Europeu Sobre Uma Justiça Amiga das Crianças",
				"subtítulos": [],
				"paralelas": false,
				"multiplas": false,
				"debate": false,
				"tema": true
			},
			{
				"hora": "11h30",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "11h45",
				"título": "O Direito à Educação: Mythos e Logos na Edificação do Humano",
				"debate": false,
				"tema": true
			},
			{
				"hora": "12h30",
				"título": "Almoço livre",
				"debate": false,
				"tema": false
			},
			{
				"hora": "14h00",
				"título": "Grupos de Reflexão e Debate sobre as Conclusões",
				"subtítulos": [
					"A Escola e a Saúde Mental das Crianças",
					"A Escola Inclusiva e a Multiculturalidade",
					"A Escola, Famílias e Cidadania",
					"A Violência na Escola e o Direito da Criança a Ter uma Tutela Educativa"
				],
				"paralelas": true,
				"debate": false,
				"tema": true,
				"multiplas": false
			},
			{
				"hora": "16h00",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			}
			,
			{
				"hora": "16h15",
				"título": "Síntese dos Trabalhos dos Grupos de Reflexão e Debate sobre as Conclusões",
				"debate": false,
				"tema": false
			}
			,
			{
				"hora": "17h15",
				"título": "Comentário Final",
				"debate": false,
				"tema": false
			},
			{
				"hora": "17h30",
				"título": "Encerramento: Momento Musical",
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
				"title": "Leitura das Conclusões do IV Congresso Europeu Sobre Uma Justiça Amiga das Crianças",
				"oradores": [
					{
						"nome": "Ana Marinho de Castro",
						"cargo": "Centro de Estudos Judiciários",
						"nb": "NB2025/NB2025_A1aC4o.pdf",
						"presidente": false,
						"extra": false,
						"texto": "Correlatores"
					},
					{
						"nome": "Paulo Guerra",
						"cargo": "Juiz Desembargador do Tribunal da Relação de Coimbra",
						"nb": "NB2025/NB2025_P3oG4a.pdf",
						"presidente": false,
						"extra": false,
						"texto": "Relator"
					}
				],
				"layout": 2
			},
			{
				"id": "c_2",
				"title": "O Direito à Educação: Mythos e Logos na Edificação do Humano",
				"oradores": [
					// {
					// 	"nome": "Norberto Martins",
					// 	"cargo": "Procurador-Geral Regional do Porto",
					// 	"nb": "NB2025/NB2025_N6oM5s.pdf",
					// 	"presidente": true,
					// 	"extra": false,
					// 	"texto": ""
					// },
					{
						"nome": "Juan Ambrósio",
						"cargo": "Universidade Católica Portuguesa",
						"nb": "NB2025/NB2025_J2nA6o.pdf",
						"presidente": false,
						"extra": false,
						"texto": ""
					}
				],
				"layout": 2
			},
			{
				"id": "c_3",
				"title": "A Escola e a Saúde Mental das Crianças",
				"oradores": [
					{
						"nome": "António Santinha",
						"cargo": "Santa Casa da Misericórdia de Lisboa",
						"nb": "NB2025/NB2025_A5oS6a.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					}
				],
				"layout": 1
			},
			{
				"id": "c_4",
				"title": "A Escola Inclusiva e a Multiculturalidade",
				"oradores": [
					{
						"nome": "Leonor Fechas",
						"cargo": "Casa Pia de Lisboa",
						"nb": "NB2025/NB2025_L4rF4s.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					}
				],
				"layout": 1
			},
			{
				"id": "c_5",
				"title": "A Escola, Famílias e Cidadania",
				"oradores": [
					{
						"nome": "José Carlos Sousa",
						"cargo": "Centro de Direito da Família da Faculdade de Direito da Universidade de Coimbra",
						"nb": "NB2025/NB2025_J2eC4sS3a.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					}
				],
				"layout": 1
			},
			{
				"id": "c_6",
				"title": "A Violência na Escola e o Direito da Criança a Ter uma Tutela Educativa",
				"oradores": [
					{
						"nome": "Rosa Clemente",
						"cargo": "Centro de Direito da Família da Faculdade de Direito da Universidade de Coimbra",
						"nb": "NB2025/NB2025_R2aC6e.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Facilitador"
					}
				],
				"layout": 1
			},
			{
				"id": "c_7",
				"title": "Comentário Final",
				"oradores": [
					{
						"nome": "Alcina da Costa Ribeiro",
						"cargo": "Juíza Desembargadora do Tribunal da Relação de Coimbra e Presidente da Mesa da Assembleia Geral da ComDignitatis",
						"nb": "NB2025/NB2025_A4aC3aR5o.pdf",
						"presidente": true,
						"extra": false,
						"texto": "Facilitador"
					},
					{
						"nome": "Maria João Fernandes",
						"cargo": "Vice-Presidente da Comissão Nacional de Promoção dos Direitos e Proteção das Crianças e Jovens",
						"nb": "NB2025/NB2025_M35J2oF7s.pdf",
						"presidente": false,
						"extra": false,
						"texto": "Facilitador"
					}
				],
				"layout": 2
			}
		]
	},
})