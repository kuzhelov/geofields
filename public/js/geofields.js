(function() {
	angular.module('geofieldsApp', [])
		.factory('services', function servicesFactory() {

			var commonServiceDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime   quam architecto quo inventore harum ex magni, dicta impedit.";
			var commonMethodDescription = "Vivamus a dictum nisi. Fusce sed dignissim quam, vel ultricies augue. Vivamus tempor, eros non posuere convallis, odio felis accumsan nunc, in commodo est arcu vitae magna";

			return [
				{
					id: "oil",
					name: "Oil",
					icon: "flask",
					brief: commonServiceDescription,
					picture: "img/services/oil.jpg",
					description: "Geofields, offers its customers of the oil industry, tools that enable them to improve the image of its exploration prospects, conduct regional surveys at reasonable cost and decrease the risk in the prospects located in areas of complex tectonics.",
					methods: [
						{
							name: "Magnetotelluric Exploration",
							description: commonMethodDescription
						},
						{
							name: "3D seismic data processing",
							description: commonMethodDescription
						},
						{
							name: "Seismic Interpretation",
							description: commonMethodDescription
						}
					],
					tasks: [
						{
							name: "Reservoir monitoring",
							description: commonMethodDescription
						},
						{
							name: "Exploration of complex tectonics areas",
							description: commonMethodDescription
						}
					]
				},
				{
					id: "mining",
					name: "Mining",
					icon: "diamond",
					brief: commonServiceDescription,
					picture: "img/services/mining.jpg",
					description: "Geofields supports its clients in achieving their exploratory objectives, Geofields has reliable geophysical methods of exploration, experience in mining and oil industries, producing high quality products within the according timeframe and at competitive prices.",
					methods: [
						{
							name: "Electrical methods",
							description: commonMethodDescription
						},
						{
							name: "Magnetic and Gravity Surveys",
							description: commonMethodDescription
						},
						{
							name: "Magnetotelluric studies",
							description: commonMethodDescription
						}
					],
					tasks: [
						{
							name: "Exploration of precious minerals",
							description: commonMethodDescription
						},
						{
							name: "Exploration of coal deposits",
							description: commonMethodDescription
						},
						{
							name: "Exploration of construction materials",
							description: commonMethodDescription
						}
					]
				},
				{
					id: "coal",
					name: "Coal",
					icon: "cube",
					brief: commonServiceDescription,
					picture: "img/services/coal.jpg",
					description: "Geofields, thinking about its customers of the coal industry, has designed some solutions ranging from conventional geophysical methods to more sophisticated methods.",
					methods: [
						{
							name: "Electrical Tomography",
							description: commonMethodDescription
						},
						{
							name: "Vertical Electrical Sounding",
							description: commonMethodDescription
						}
					],
					tasks: [
						{
							name: "Exploration of coal deposits",
							description: commonMethodDescription
						},
						{
							name: "Coal beds tracking",
							description: commonMethodDescription
						}
					]
				},
				{
					id: "groundwater",
					name: "Geothermal and Groundwater",
					icon: "fire",
					brief: commonServiceDescription,
					picture: "img/services/groundwater.png",
					description: "Growing concerns about climate change seen in clean alternative energy is an option to reduce the emission of polluting gases into the atmosphere. The power generation from geothermal sources is a practical alternative to being friendly to the environment because it does not affect the ecosystem by not having to inundate large areas for energy generation. Colombia has great potential for research in this area. Geofields with Magnetotelluric method provides an important tool for locating geothermal sources capable of moving with the aid of steam turbines and generate clean energy.",
					methods: [
						{
							name: "Deep Magnetotelluric Sounding",
							description: commonMethodDescription
						},
						{
							name: "Audio Magnetotelluric Sounding",
							description: commonMethodDescription
						}
					],
					tasks: [
						{
							name: "Aquifers detection",
							description: commonMethodDescription 
						},
						{
							name: "Deep geothermal sources detection",
							description: commonMethodDescription
						}
					]
				},
				{
					id: "civil",
					name: "Civil Works",
					icon: "male",
					brief: commonServiceDescription,
					picture: "img/services/civil.jpg",
					description: "Geofields provides high quality specialized geophysical services for engineering studies to support engineering in the construction of hydroelectric dams, bridges, tunnels and major works. Geofields's commitment is to advise and accompany their clients in selecting the most appropriate to their exploration needs method. That's why we offer to our customers a range of geophysical methods that will help them gain a better understanding about the properties of the subsoil as a basis for its engineering projects.",
					methods: [
						{
							name: "Seismic Refraction",
							description: commonMethodDescription
						},
						{
							name: "Electrical Prospecting methods",
							description: commonMethodDescription
						},
						{
							name: "Magnetotelluric studies",
							description: commonMethodDescription
						}
					],
					tasks: [
						{
							name: "Engineering and Construction support",
							description: commonMethodDescription
						},
						{
							name: "Subsoil properties investigation",
							description: commonMethodDescription
						}
					]
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

			var serviceItems = services.slice();

			while (serviceItems.length) {
				serviceRows.push(
					{
						'services': serviceItems.splice(0, servicesPerRow)
					});
			}

			return serviceRows;
		}])
		.controller('ServicesController', ['$scope', 'serviceRows', function($scope, serviceRows) {

			$scope.serviceRows = serviceRows;
		}])
		.controller('ProjectsController', ['$scope', 'projects', function($scope, projects) {

			$scope.projects = projects;
		}])
		.controller('ServiceModalsController', ['$scope', 'services', function($scope, services) {
			$scope.services = services;
		}]);
})();