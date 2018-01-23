import angular from "angular";

import ngProgressArcDirective from "./src/directive/angular-progress-arc.directive";
import ngProgressArcProvider from "./src/angular-progress-arc.provider";

export default angular.module("angular-progress-arc", [])
	.directive("progressArc", (progressArcDefaults) => new ngProgressArcDirective(progressArcDefaults))
	.provider("progressArcDefaults", ngProgressArcProvider)
	.name;
