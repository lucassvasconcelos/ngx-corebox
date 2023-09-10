import { Component } from '@angular/core';
import { ModalDismissReasons, NgbCalendar, NgbDateStruct, NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397
	}
];
const states = [
	'Alabama',
	'Alaska',
	'American Samoa',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'District Of Columbia',
	'Federated States Of Micronesia',
	'Florida',
	'Georgia',
	'Guam',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Marshall Islands',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Northern Mariana Islands',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Palau',
	'Pennsylvania',
	'Puerto Rico',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virgin Islands',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
];

@Component({
	selector: 'app-example2',
	template: `
		<div class="container">
			<h1 class="mt-4">Bootstrap components</h1>

			<div class="mt-5 component">
				<h3>Accordion</h3>
				<div ngbAccordion>
					<div ngbAccordionItem [collapsed]="false">
						<h2 ngbAccordionHeader>
							<button ngbAccordionButton>Simple</button>
						</h2>
						<div ngbAccordionCollapse>
							<div ngbAccordionBody>
								<ng-template>
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
									officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
									moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
									keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
									vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
									heard of them accusamus labore sustainable VHS.
								</ng-template>
							</div>
						</div>
					</div>
					<div ngbAccordionItem>
						<h2 ngbAccordionHeader>
							<button ngbAccordionButton>
								<span>&#9733; <b>Fancy</b> title &#9733;</span>
							</button>
						</h2>
						<div ngbAccordionCollapse>
							<div ngbAccordionBody>
								<ng-template>
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
									officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
									moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
									keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
									vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
									heard of them accusamus labore sustainable VHS.
								</ng-template>
							</div>
						</div>
					</div>
					<div ngbAccordionItem [disabled]="true">
						<h2 ngbAccordionHeader>
							<button ngbAccordionButton>Disabled</button>
						</h2>
						<div ngbAccordionCollapse>
							<div ngbAccordionBody>
								<ng-template>
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
									officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
									moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
									keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
									vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
									heard of them accusamus labore sustainable VHS.
								</ng-template>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-5 component">
				<h3>Alert</h3>
				<p>
					<ngb-alert [dismissible]="false"> <strong>Warning!</strong> Better check yourself, you're not looking too good. </ngb-alert>
				</p>
			</div>

			<div class="mt-5 component">
				<h3>Carousel</h3>
				<ngb-carousel *ngIf="images">
					<ng-template ngbSlide>
						<div class="picsum-img-wrapper">
							<img [src]="images[0]" alt="Random first slide" />
						</div>
						<div class="carousel-caption">
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</ng-template>
					<ng-template ngbSlide>
						<div class="picsum-img-wrapper">
							<img [src]="images[1]" alt="Random second slide" />
						</div>
						<div class="carousel-caption">
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</ng-template>
					<ng-template ngbSlide>
						<div class="picsum-img-wrapper">
							<img [src]="images[2]" alt="Random third slide" />
						</div>
						<div class="carousel-caption">
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</div>
					</ng-template>
				</ngb-carousel>
			</div>

			<div class="mt-5 component">
				<h3>Collapse</h3>
				<p>
					<button
						type="button"
						class="btn btn-outline-primary"
						(click)="collapse.toggle()"
						[attr.aria-expanded]="!isCollapsed"
						aria-controls="collapseExample"
					>
						Toggle with Function
					</button>
					<button
						type="button"
						class="btn btn-outline-primary ms-2"
						(click)="isCollapsed = !isCollapsed"
						[attr.aria-expanded]="!isCollapsed"
						aria-controls="collapseExample"
					>
						Toggle with Two Way Binding
					</button>
				</p>
				<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
					<div class="card">
						<div class="card-body">You can collapse this card by clicking one Toggle button</div>
					</div>
				</div>
			</div>

			<div class="mt-5 component">
				<h3>Datepicker</h3>

				<p>Simple datepicker</p>

				<ngb-datepicker #dp [(ngModel)]="datePickerModel" (navigate)="date = $event.next"></ngb-datepicker>

				<hr />

				<button class="btn btn-sm btn-outline-primary me-2" (click)="selectToday()">Select Today</button>
				<button class="btn btn-sm btn-outline-primary me-2" (click)="dp.navigateTo()">To current month</button>
				<button class="btn btn-sm btn-outline-primary me-2" (click)="dp.navigateTo({ year: 2013, month: 2 })">To Feb 2013</button>

				<hr />

				<pre>Month: {{ date.month }}.{{ date.year }}</pre>
				<pre>Model: {{ datePickerModel | json }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Dropdown</h3>
				<div class="row">
					<div class="col">
						<div ngbDropdown class="d-inline-block">
							<button type="button" class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>Toggle dropdown</button>
							<div ngbDropdownMenu aria-labelledby="dropdownBasic1">
								<button ngbDropdownItem>Action - 1</button>
								<button ngbDropdownItem>Another Action</button>
								<button ngbDropdownItem>Something else is here</button>
							</div>
						</div>
					</div>

					<div class="col text-end">
						<div ngbDropdown placement="top-end" class="d-inline-block">
							<button type="button" class="btn btn-outline-primary" id="dropdownBasic2" ngbDropdownToggle>Toggle dropup</button>
							<div ngbDropdownMenu aria-labelledby="dropdownBasic2">
								<button ngbDropdownItem>Action - 1</button>
								<button ngbDropdownItem>Another Action</button>
								<button ngbDropdownItem>Something else is here</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-5 component">
				<h3>Modal</h3>

				<ng-template #content let-modal>
					<div class="modal-header">
						<h4 class="modal-title" id="modal-basic-title">Profile update</h4>
						<button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="mb-3">
								<label for="dateOfBirth">Date of birth</label>
								<div class="input-group">
									<input
										id="dateOfBirth"
										class="form-control"
										placeholder="yyyy-mm-dd"
										name="dp"
										ngbDatepicker
										#dp="ngbDatepicker"
									/>
									<button class="btn btn-outline-secondary bi bi-calendar3" (click)="dp.toggle()" type="button"></button>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
					</div>
				</ng-template>

				<button class="btn btn-lg btn-outline-primary" (click)="openModal(content)">Launch demo modal</button>

				<hr />

				<pre>{{ closeResultModal }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Nav</h3>

				<ul ngbNav #nav="ngbNav" [(activeId)]="activeNav" class="nav-tabs">
					<li [ngbNavItem]="1">
						<button ngbNavLink>One</button>
						<ng-template ngbNavContent>
							<p>
								Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
								cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
								dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
								iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
							</p>
						</ng-template>
					</li>
					<li [ngbNavItem]="2">
						<button ngbNavLink>Two</button>
						<ng-template ngbNavContent>
							<p>
								Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
								craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
								cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
								vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts
								beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
								sapiente accusamus tattooed echo park.
							</p>
						</ng-template>
					</li>
					<li [ngbNavItem]="3">
						<button ngbNavLink>Three</button>
						<ng-template ngbNavContent>
							<p>
								Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec
								egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis
								pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut
								ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum
								euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel
								tellus pulvinar feugiat.
							</p>
						</ng-template>
					</li>
				</ul>

				<div [ngbNavOutlet]="nav" class="mt-2"></div>

				<pre>Active: {{ activeNav }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Offcanvas</h3>

				<ng-template #content let-offcanvas>
					<div class="offcanvas-header">
						<h4 class="offcanvas-title" id="offcanvas-basic-title">Profile update</h4>
						<button type="button" class="btn-close" aria-label="Close" (click)="offcanvas.dismiss('Cross click')"></button>
					</div>
					<div class="offcanvas-body">
						<form>
							<div class="mb-3">
								<label for="dateOfBirth">Date of birth</label>
								<div class="input-group">
									<input
										id="dateOfBirth"
										class="form-control"
										placeholder="yyyy-mm-dd"
										name="dp"
										ngbDatepicker
										#dp="ngbDatepicker"
									/>
									<button class="btn btn-outline-secondary bi bi-calendar3" (click)="dp.toggle()" type="button"></button>
								</div>
							</div>
						</form>
						<div class="text-end">
							<button type="button" class="btn btn-outline-dark" (click)="offcanvas.close('Save click')">Save</button>
						</div>
					</div>
				</ng-template>

				<button class="btn btn-lg btn-outline-primary" (click)="openOffcanvas(content)">Launch demo offcanvas</button>

				<hr />

				<pre>{{ closeResultOffcanvas }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Pagination</h3>

				<p>Default pagination:</p>
				<ngb-pagination [collectionSize]="70" [(page)]="page" aria-label="Default pagination"></ngb-pagination>

				<p>No direction links:</p>
				<ngb-pagination [collectionSize]="70" [(page)]="page" [directionLinks]="false"></ngb-pagination>

				<p>With boundary links:</p>
				<ngb-pagination [collectionSize]="70" [(page)]="page" [boundaryLinks]="true"></ngb-pagination>

				<hr />

				<pre>Current page: {{ page }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Popover</h3>
				<button
					type="button"
					class="btn btn-outline-secondary me-2"
					placement="top"
					ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
					popoverTitle="Popover on top"
				>
					Popover on top
				</button>

				<button
					type="button"
					class="btn btn-outline-secondary me-2"
					placement="end"
					ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
					popoverTitle="Popover on right"
				>
					Popover on right
				</button>

				<button
					type="button"
					class="btn btn-outline-secondary me-2"
					placement="bottom"
					ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
					popoverTitle="Popover on bottom"
				>
					Popover on bottom
				</button>

				<button
					type="button"
					class="btn btn-outline-secondary me-2"
					placement="start"
					ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
					popoverTitle="Popover on left"
				>
					Popover on left
				</button>
			</div>

			<div class="mt-5 component">
				<h3>Progressbar</h3>
				<p><ngb-progressbar [showValue]="true" type="success" [value]="25"></ngb-progressbar></p>
				<p><ngb-progressbar [showValue]="true" type="info" [value]="50"></ngb-progressbar></p>
				<p><ngb-progressbar [showValue]="true" type="warning" [value]="150" [max]="200"></ngb-progressbar></p>
				<p><ngb-progressbar [showValue]="true" type="danger" [value]="150" [max]="150"></ngb-progressbar></p>
			</div>

			<div class="mt-5 component">
				<h3>Rating</h3>
				<ngb-rating [(rate)]="currentRate"></ngb-rating>
				<hr />
				<pre>Rate: <b>{{currentRate}}</b></pre>
			</div>

			<div class="mt-5 component">
				<h3>Scrollspy</h3>

				<div ngbScrollSpy #spy="ngbScrollSpy" class="bg-light p-3 rounded-2 mb-3" style="height: 200px">
					<h4 ngbScrollSpyFragment="one">First heading</h4>
					<p>
						Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
						Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
						sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
						american apparel, butcher voluptate nisi qui.
					</p>
					<h4 ngbScrollSpyFragment="two">Second heading</h4>
					<p>
						Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
						Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
						sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
						american apparel, butcher voluptate nisi qui.
					</p>
					<h4 ngbScrollSpyFragment="three">Third heading</h4>
					<p>
						Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
						Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
						sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
						american apparel, butcher voluptate nisi qui.
					</p>
				</div>

				<pre>Active: {{ spy.active }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Table</h3>
				<p>Table is just a mapping of objects to table rows with <code>ngFor</code></p>

				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Country</th>
							<th scope="col">Area</th>
							<th scope="col">Population</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let country of countries; index as i">
							<th scope="row">{{ i + 1 }}</th>
							<td>
								<img [src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag" class="me-2" style="width: 20px" />
								{{ country.name }}
							</td>
							<td>{{ country.area | number }}</td>
							<td>{{ country.population | number }}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="mt-5 component">
				<h3>Timepicker</h3>
				<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
				<hr />
				<pre>Selected time: {{ time | json }}</pre>
			</div>

			<div class="mt-5 component">
				<h3>Toast</h3>
				<div>
					<h6>Body only</h6>
					<ngb-toast [autohide]="false"> I am a simple static toast. </ngb-toast>

					<h6 class="mt-4">With a text header</h6>
					<ngb-toast *ngIf="show" header="Hello" [autohide]="false" (hidden)="show = false">
						I am a simple static toast with a header.
					</ngb-toast>
				</div>
			</div>

			<div class="mt-5 component">
				<h3>Tooltip</h3>

				<button type="button" class="btn btn-outline-secondary me-2" placement="top" ngbTooltip="Tooltip on top">Tooltip on top</button>
				<button type="button" class="btn btn-outline-secondary me-2" placement="end" ngbTooltip="Tooltip on right">Tooltip on right</button>
				<button type="button" class="btn btn-outline-secondary me-2" placement="bottom" ngbTooltip="Tooltip on bottom">
					Tooltip on bottom
				</button>
				<button type="button" class="btn btn-outline-secondary me-2" placement="start" ngbTooltip="Tooltip on left">Tooltip on left</button>
			</div>

			<div class="mt-5 mb-5 component">
				<h3>Typeahead</h3>

				A typeahead example that gets values from a static <code>string[]</code>
				<ul>
					<li><code>debounceTime</code> operator</li>
					<li>kicks in only if 2+ characters typed</li>
					<li>limits to 10 results</li>
				</ul>

				<label for="typeahead-basic">Search for a state:</label>
				<input id="typeahead-basic" type="text" class="form-control" [(ngModel)]="model" [ngbTypeahead]="search" />
				<hr />
				<pre>Model: {{ model | json }}</pre>
			</div>
		</div>
	`,
	styles: [
		`
			.component {
				padding: 20px;
				border: 1px solid #bdbdbd;
			}

			.form-control {
				width: 300px;
			}
		`
	]
})
export class Example2Component {
	activeNav = 1;
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	public isCollapsed = false;
	show = true;
	countries = COUNTRIES;
	currentRate = 8;
	page = 4;
	closeResultModal = '';
	closeResultOffcanvas = '';
	datePickerModel: NgbDateStruct;
	date: { year: number; month: number };
	public model: any;
	time = { hour: 13, minute: 30 };

	constructor(private calendar: NgbCalendar, private modalService: NgbModal, private offcanvasService: NgbOffcanvas) {}

	selectToday() {
		this.datePickerModel = this.calendar.getToday();
	}

	openModal(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResultModal = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResultModal = `Dismissed ${this.getDismissReason(reason)}`;
			}
		);
	}

	openOffcanvas(content: any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResultOffcanvas = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResultOffcanvas = `Dismissed ${this.getDismissReason(reason)}`;
			}
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) => (term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))
		);
}
