(function() {
	angular.module('geofieldsApp', [])
		.factory('services', function servicesFactory() {

			var commonServiceDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime   quam architecto quo inventore harum ex magni, dicta impedit.";

			return [
				{
					id: "oil",
					name: "Oil",
					icon: "flask",
					description: commonServiceDescription
				},
				{
					id: "mining",
					name: "Mining",
					icon: "diamond",
					description: commonServiceDescription
				},
				{
					id: "coal",
					name: "Coal",
					icon: "cube",
					description: commonServiceDescription
				},
				{
					id: "groundwater",
					name: "Geothermal and Groundwater",
					icon: "fire",
					description: commonServiceDescription
				},
				{
					id: "civil",
					name: "Civil Works",
					icon: "male",
					description: commonServiceDescription
				}
			];
		})
		.factory('projects', function projectsFactory() {

			var commonProjectDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxiarchitecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxiarchitecto quo inventore harum ex magni, dicta impedit.";

			return [
				{
					name: "CGL S.A.",
					logoUrl: "img/projects/cgl-logo-ex.png",
					description: commonProjectDescription
				},
				{
					name: "Lukoil Overseas Colombia",
					logoUrl: "img/projects/lukoil-logo-ex.png",
					description: commonProjectDescription
				},
				{
					name: "British Petroleum",
					logoUrl: "img/projects/bp-logo-ex.png",
					description: commonProjectDescription
				}
			]
		})
		.factory('serviceRows', ['services', function serviceRowsFactory(services) {

			const servicesPerRow = 3;
			var serviceRows = [];

			var serviceItems = services;

			while (serviceItems.length) {
				serviceRows.push(
					{
						'services': services.splice(0, servicesPerRow)
					});
			}

			return serviceRows;
		}])
		.controller('ServicesController', ['$scope', 'serviceRows', function($scope, serviceRows) {

			$scope.serviceRows = serviceRows;
		}])
		.controller('ProjectsController', ['$scope', 'projects', function($scope, projects) {

			$scope.projects = projects;
		}]);
})();