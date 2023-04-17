var navbar = new Vue({
	el: '#Navbar',
	data: {
		shorttitle: 'Conclusões do III Congresso Europeu',
		url_form: 'https://forms.gle/C4JsBub6C6PhcU4D9'
	}
})

var navDemo = new Vue({
	el: '#navDemo',
	data: {
		url_form: 'https://forms.gle/C4JsBub6C6PhcU4D9'
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
			"No âmbito da sua missão como promotora da Dignidade Humana e da defesa dos Direito do Homem, em particular dos Direitos da Criança, a ComDignitatis tem vindo a divulgar as Diretrizes Europeias para uma Justiça Amiga das Crianças, promovendo um amplo debate, a nível nacional, que visa a sensibilização dos Governantes e dos profissionais para o papel crucial das Diretrizes e para a emergência da sua implementação.",
			"Em Maio de 2016 e 2018, realizámos, na Fundação Calouste Gulbenkian, o I e II Congresso Europeu Sobre Uma Justiça Amiga das Crianças, em parceria com diversas entidades Públicas e da Sociedade Civil.",
			"O I Congresso permitiu dar a conhecer, publicamente, as Diretrizes e promoveu um debate e reflexão sobre os Direitos da criança e as suas necessidades, quando envolvida em processos judiciais e extrajudiciais, tendo o II Congresso incidido especialmente na justiça para os jovens autores de delitos e nas formas de prevenção da delinquência juvenil.",
			"Já em Maio de 2022, realizámos o III Congresso Europeu Sobre Uma Justiça Amiga das Crianças que partiu uma vez mais das Diretrizes «Uma Justiça Amiga das Crianças» e abordou a temática dos Direitos Humanos da Criança.",
			"Acreditando que a continuidade destes trabalhos é de extrema importância para a reflexão sobre os direitos das nossas Crianças e determinante para despoletar nos mais novos a confiança no sistema judicial, vamos realizar no dia 5 de Junho de 2023, no Edifício Multiusos do Parque das Devesas Altas, em Oleiros, um Encontro sobre o tema tendo em vista a apresentação pública das conclusões do III Congresso Europeu Sobre Uma Justiça Amiga das Crianças, seguida de debate e reflexão.",
			"Este Encontro realiza-se em parceria com a Câmara Municipal de Oleiros e com várias Entidades públicas e privadas, nomeadamente a Procuradoria-Geral da República, a Provedoria de Justiça, a Ordem dos Advogados, a Comissão Nacional de Promoção dos Direitos e Proteção das Crianças e Jovens, a Direção-Geral de Reinserção e Serviços Prisionais, o Centro de Estudos Judiciários, o Instituto da Segurança Social, IP, a Santa Casa da Misericórdia de Lisboa, a Casa Pia de Lisboa, o Centro de Direito da Família da Universidade de Coimbra, o Centro Interdisciplinar de Ciências Sociais da Universidade Nova de Lisboa, a Universidade Atlântica e a Crescer – Associação Portuguesa para o Direito dos Menores e da Família.",
			"Convidamo-lo uma vez mais a juntar-se a nós e a este desafio, participando nesta Sessão com o seu saber, experiência e opinião.",
			"Contamos consigo!"
		]
	}
})


// var c_cientifica = new Vue({
// 	el: "#idCientifica",
// 	data: {
// 		header: 'Comissão Científica',
// 		membros: [
// 			{ nome: 'Professor Doutor Fausto Amaro' },
// 			{ nome: 'Doutora Maria João Leote de Carvalho' },
// 			{ nome: 'Doutora Rosa Clemente' }
// 		]
// 	}
// })

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
				"título": "Sessão de Abertura e Inauguração da Exposição de Trabalhos sobre o Projeto Youth-Friendly Justice",
				"debate": false,
				"tema": false
			},
			{
				"hora": "10h00",
				"título": "Os Direitos Humanos num Mundo em Mudança",
				"debate": false,
				"tema": true
			},
			{
				"hora": "10h45",
				"título": "Pausa para Café",
				"debate": false,
				"tema": false
			},
			{
				"hora": "11h00",
				"título": "Leitura das Conclusões do III Congresso Europeu Sobre Uma Justiça Amiga das Crianças",
				"debate": false,
				"tema": true
			},
			{
				"hora": "12h00",
				"título": "Projeto Youth-Friendly Justice",
				"debate": false,
				"tema": false
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
				"debate": false,
				"tema": false
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
				"debate": true,
				"tema": false
			}
			,
			{
				"hora": "17h15",
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
				"title": "Os Direitos Humanos num Mundo em Mudança",
				"oradores": [
					{
						"nome": "Rosa Clemente",
						"cargo": "Centro de Direito da Família da Faculdade de Direito de Coimbra",
						"nb": "NB2023/NB_RC.pdf",
						"presidente": true
					},
					{
						"nome": "João da Silva Miguel",
						"cargo": "Juiz Conselheiro Jubilado",
						"nb": "NB2023/NB_JSM.pdf",
						"presidente": false
					}
				],
				"layout": 2
			},
			{
				"id": "c_2",
				"title": "Leitura das Conclusões do III Congresso Europeu Sobre Uma Justiça Amiga das Crianças",
				"oradores": [
					{
						"nome": "Paulo Guerra",
						"cargo": "Juiz Desembargador",
						"nb": "NB2023/NB_PG.pdf",
						"presidente": false,
						"extra": true,
						"texto": "Coordenador"
					}
				],
				"layout": 1
			}
		]
	}
})
