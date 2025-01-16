/*eslint-disable */

const { React, ReactDOM, ReactTags } = window;
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import GitHubCorner from "./GithubCorner";

function datePickerComponent() {
	const [startDate, setStartDate] = React.useState(new Date());
	return (
		<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
	);
}

// List of countries in the world
const COUNTRIES = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antigua & Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bosnia & Herzegovina",
	"Botswana",
	"Brazil",
	"British Virgin Islands",
	"Brunei",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Cape Verde",
	"Cayman Islands",
	"Chad",
	"Chile",
	"China",
	"Colombia",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Cote D Ivoire",
	"Croatia",
	"Cruise Ship",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Estonia",
	"Ethiopia",
	"Falkland Islands",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Polynesia",
	"French West Indies",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kuwait",
	"Kyrgyz Republic",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macau",
	"Macedonia",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Namibia",
	"Nepal",
	"Netherlands",
	"Netherlands Antilles",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Palestine",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Reunion",
	"Romania",
	"Russia",
	"Rwanda",
	"Saint Pierre & Miquelon",
	"Samoa",
	"San Marino",
	"Satellite",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"South Africa",
	"South Korea",
	"Spain",
	"Sri Lanka",
	"St Kitts & Nevis",
	"St Lucia",
	"St Vincent",
	"St. Lucia",
	"Sudan",
	"Suriname",
	"Swaziland",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor L'Este",
	"Togo",
	"Tonga",
	"Trinidad & Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks & Caicos",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Venezuela",
	"Vietnam",
	"Virgin Islands (US)",
	"Yemen",
	"Zambia",
	"Zimbabwe",
];

const suggestions = COUNTRIES.map((country) => {
	return {
		id: country,
		text: country,
	};
});

const KeyCodes = {
	comma: 188,
	enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

const Tags = ReactTags.WithOutContext;

const Test = () => {
	return <div>Test</div>;
};

const App = () => {
	const [tags, setTags] = React.useState([
		{ id: "Thailand", text: "Thailand", children: <Test /> },
		{ id: "India", text: "India", children: <Test /> },
		{ id: "Vietnam", text: "Vietnam", children: <Test /> },
		{ id: "Turkey", text: "Turkey", children: <Test /> },
	]);
	const [tags2, setTags2] = React.useState([
		{ id: "1", text: "1", children: <Test /> },
		{ id: "2", text: "2", children: <Test /> },
		{ id: "3", text: "3", children: <Test /> },
		{ id: "4", text: "4", children: <Test /> },
	]);

	const cleanTargetTagData = (targetTag) => {
		setTags((tags) => tags.filter((tag) => tag !== targetTag));
		setTags2((tags) => tags.filter((tag) => tag !== targetTag));
	};

	const handleDelete = (i) => {
		setTags(tags.filter((tag, index) => index !== i));
	};

	const onTagUpdate = (i, newTag) => {
		const updatedTags = tags.slice();
		updatedTags.splice(i, 1, newTag);
		setTags(updatedTags);
	};

	const onTagUpdate2 = (i, newTag) => {
		const updatedTags = tags2.slice();
		updatedTags.splice(i, 1, newTag);
		setTags2(updatedTags);
	};

	const handleAddition = (tag, insertIndex) => {
		console.log(insertIndex);
		setTags([...tags, tag]);

		insertIndex && handleDrag(tag, tags.length, insertIndex);
	};

	const handleAddition2 = (tag, insertIndex) => {
		console.log(insertIndex);
		setTags2([...tags2, tag]);
		insertIndex !== undefined && handleDrag2(tag, tags2.length, insertIndex);
	};

	const handleDrag = (tag, currPos, newPos) => {
		// console.log(currPos, newPos);
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		setTags(newTags);
	};

	const handleDrag2 = (tag, currPos, newPos) => {
		console.log(currPos, newPos);
		const newTags = tags2.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		setTags2(newTags);
	};

	const handleTagClick = (index) => {
		console.log("The tag at index " + index + " was clicked");
	};

	const onClearAll = () => {
		setTags([]);
	};

	return (
		<div className="app">
			<GitHubCorner />

			<h1> React Tags Example 123</h1>
			<div>
				<DndProvider backend={HTML5Backend}>
					<Tags
						tags={tags}
						// suggestions={suggestions}
						delimiters={delimiters}
						handleDelete={handleDelete}
						handleAddition={handleAddition}
						handleDrag={handleDrag}
						handleTagClick={handleTagClick}
						onTagUpdate={onTagUpdate}
						inputFieldPosition="bottom"
						isWhenBlurAutoUpdate
						type="Type1"
						subType="subType1"
						cleanTargetTagData={cleanTargetTagData}
						// autocomplete

						// readOnly
						// clearAll
						// onClearAll={onClearAll}
						inputType="textarea"
						onMouseDown={(e) => {
							e.stopPropagation();
							console.log(e.target.innerText);
						}}
						onMouseUp={(e) => {
							e.stopPropagation();
							console.log(e.target.innerText);
						}}
					/>
					<Tags
						tags={tags2}
						// suggestions={suggestions}
						delimiters={delimiters}
						handleDelete={handleDelete}
						handleAddition={handleAddition2}
						handleDrag={handleDrag2}
						handleTagClick={handleTagClick}
						onTagUpdate={onTagUpdate2}
						inputFieldPosition="bottom"
						isWhenBlurAutoUpdate
						type="Type2"
						subType="subType2"
						cleanTargetTagData={cleanTargetTagData}
						beforeComponent={datePickerComponent}
						// autocomplete

						// readOnly
						// clearAll
						// onClearAll={onClearAll}
						inputType="textarea"
						onMouseDown={(e) => {
							e.stopPropagation();
							console.log(e.target.innerText);
						}}
						onMouseUp={(e) => {
							e.stopPropagation();
							console.log(e.target.innerText);
						}}
					/>
				</DndProvider>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
