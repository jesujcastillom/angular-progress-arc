import template from "./angular-progress-arc.directive.html";

export default class AngularProgressArcDirective {
	/* @ngInject */
	constructor(progressArcDefaults) {
		this.template = template;
		this.restrict = "E";
		this.scope = {
			size: "@", // Size of element in pixels.
			strokeWidth: "@", // Width of progress arc stroke.
			stroke: "@", // Color/appearance of stroke.
			counterClockwise: "@", // Boolean value indicating
			complete: "&", // Expression evaluating to float [0.0, 1.0]
			background: "@" // Color of the background ring. Defaults to null.
		};
		this.progressArcDefaults = progressArcDefaults;
	}

	compile(element, attr) {
		this.progressArcDefaults(attr);
		return function (scope) {
			// Firefox has a bug where it doesn't handle rotations and stroke dashes correctly.
			// https://bugzilla.mozilla.org/show_bug.cgi?id=949661
			scope.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
			let updateRadius = function () {
				scope.strokeWidthCapped = Math.min(scope.strokeWidth, scope.size / 2 - 1);
				scope.radius = Math.max((scope.size - scope.strokeWidthCapped) / 2 - 1, 0);
				scope.circumference = 2 * Math.PI * scope.radius;
			};
			scope.$watchCollection('[size, strokeWidth]', updateRadius);
			updateRadius();
		}
	}
}