import { Component } from '@angular/core';
import { AppItem, Footer, Header, Menu, MenuItem, MenuOptions, Theme } from 'ngx-corebox';
import { ProfileOptions } from 'projects/ngx-corebox/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'labs';

	profileOptions = new ProfileOptions(
		() => alert('Logout Event Trigged!'),
		'Logout',
		'Sevéro Wayne',
		'sign-out',
		'Kenkko Group',
		'',
		'/profile',
		'My profile',
		'user'
	);

	themes: Theme[] = [
		new Theme(
			true,
			'Default',
			'#f9f9f9',
			'#ed4b4b',
			new Header(),
			new Menu(),
			new Footer('Kenkko'),
			new MenuOptions(true, '', '../assets/logo-desktop.png', '../assets/logo-mobile.png', 'https://github.com/lucassvasconcelos/ngx-corebox')
		)
	];

	appItems: AppItem[] = [new AppItem('App 1', '/url1'), new AppItem('App 2', '/url2', 'whatsapp', 'fab')];

	menuItems: MenuItem[] = [
		new MenuItem(null, 'Cadastro', [
			new MenuItem(null, 'Farmácia', [
				new MenuItem('/example', 'Categorias', undefined, true, undefined),
				new MenuItem('/example', 'Grupos Farmacológicos', undefined, undefined, undefined),
				new MenuItem('/example', 'Medicamentos', undefined, undefined, undefined),
				new MenuItem('/example', 'Medidas', undefined, undefined, undefined),
				new MenuItem('/example', 'Níveis de Controle', undefined, undefined, undefined),
				new MenuItem('/example', 'Princípios Ativos', undefined, undefined, undefined),
			], true, undefined),
			new MenuItem(null, 'Globais', [
				new MenuItem('/example', 'Agendas Médicas', undefined, true, undefined),
				new MenuItem('/example', 'Convênios', undefined, undefined, undefined),
				new MenuItem('/example', 'Empresas', undefined, undefined, undefined),
				new MenuItem('/example', 'Especialidades', undefined, undefined, undefined),
				new MenuItem('/example', 'Feriados', undefined, undefined, undefined),
				new MenuItem('/example', 'Fornecedores', undefined, undefined, undefined),
				new MenuItem('/example', 'Locais', undefined, undefined, undefined),
				new MenuItem('/example', 'Médicos', undefined, undefined, undefined),
				new MenuItem('/example', 'Posologias', undefined, undefined, undefined),
				new MenuItem('/example', 'Procedimentos', undefined, undefined, undefined),
				new MenuItem('/example', 'Vias de Administração', undefined, undefined, undefined)
			], true, undefined)
		], undefined, undefined, 'file-lines'),
		new MenuItem(null, 'Centro Cirúrgico', [
			new MenuItem('/example', 'Agenda', undefined, true, undefined),
		], undefined, undefined, 'syringe'),
		new MenuItem(null, 'Financeiro', [
			new MenuItem('/example', 'Contas', undefined, true, undefined),
			new MenuItem('/example', 'Contas Contábeis', undefined, true, undefined),
			new MenuItem('/example', 'Lançamentos', undefined, true, undefined)
		], undefined, undefined, 'piggy-bank'),
		new MenuItem('/example', 'Prontuário', undefined, true, undefined, 'book-medical'),
		new MenuItem(null, 'Recepção', [
			new MenuItem('/example', 'Agenda', undefined, true, undefined),
			new MenuItem('/example', 'Atendimentos', undefined, true, undefined),
			new MenuItem('/example', 'Pacientes', undefined, true, undefined),
		], undefined, undefined, 'bell-concierge'),
		new MenuItem('/example', 'Sessões Ativas', undefined, true, undefined, 'user-clock'),
		new MenuItem(null, 'Licença', [
			new MenuItem('/example', 'Usuários', undefined, true, undefined),
		], undefined, undefined, 'scroll')
	];
}
