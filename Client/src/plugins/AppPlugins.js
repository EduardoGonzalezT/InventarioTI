import 'primeicons/primeicons.css'
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Message from "primevue/message";
import Avatar from "primevue/avatar";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import SplitButton from "primevue/splitbutton";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Dialog from 'primevue/dialog';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ToastService from 'primevue/toastservice';



export default (app) => {
	app.component('Button', Button)
	app.component('InputText', InputText)
	app.component('Password', Password)
	app.component('Card', Card)
	app.component('Avatar', Avatar)
	app.component('Message', Message)
	app.component('Splitter', Splitter)
	app.component('SplitterPanel', SplitterPanel)
	app.component('Toolbar', Toolbar)
	app.component('Menubar', Menubar)
	app.component('SplitButton', SplitButton)
	app.component('IconField', IconField)
	app.component('InputIcon', InputIcon)
	app.component('Dialog', Dialog)
	app.component('Select', Select)
	app.component('Checkbox', Checkbox)
	app.component('Panel', Panel)
	app.component('Tag', Tag)
	app.component('Toast', Toast)
	app.component('DataTable', DataTable)
	app.component('Column', Column)
	app.use(ToastService);
}
