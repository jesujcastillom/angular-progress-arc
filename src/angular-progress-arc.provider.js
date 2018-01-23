import angular from "angular";

const defaults = {
	size: 200,
	strokeWidth: 20,
	stroke: 'black',
	background: null
};

export default class AngularProgressArcProvider {

	$get() {
		return function (attr) {
			angular.forEach(defaults, (value, key) => {
				if (!attr[key]) {
					attr[key] = value;
				}
			});
		};
	}

	setDefault(name, value) {
		defaults[name] = value;
		return this;
	}
}