import angular from "angular";

import ngProgressArcDirective from "./src/directive/angular-progress-arc.directive";
import ngProgressArcProvider from "./src/angular-progress-arc.provider";

export default angular.module("ng-progress-arc", [])
	.directive("ngProgressArc", (ngProgressArcDefaults) => new ngProgressArcDirective(ngProgressArcDefaults))
	.provider("ngProgressArcDefaults", ngProgressArcProvider)
	.name;
