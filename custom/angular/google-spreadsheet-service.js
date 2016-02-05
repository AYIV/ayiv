(function() {
	angular.module('myApp', [])

	.service('gappsService', ['$log', function ($log) {
		var service = this;
		
		service.config = {
			scriptId: null,
			clientId: null,
			scopes: []
		};

		service.authorize = function (clientId, scopes) {
			gapi.auth.authorize(
			{
				client_id: clientId ? clientId : service.config.clientId,
				scope:     scopes ? scopes : service.config.scopes,
				immediate: true
			},
			function (authResult) {
				service.isAuthorized = authResult && !authResult.error;
			});
		}

		service.run = function (functionObject, scriptId, successCallback, apiErrorCallback, scriptErrorCallback) {
			if (!service.isAuthorized)
			{
				service.authorize();
			}

	        // Make the API request.
	        gapi.client

	        .request({
	            'root': 'https://script.googleapis.com',
	            'path': 'v1/scripts/' + scriptId ? scriptId : service.config.scriptId + ':run',
	            'method': 'POST',
	            'headers': {"Content-Type": "application/json"},
	            'body': functionObject ? functionObject : {
	            	'function': null,
	            	'parameters': null
            	}
	        })

	        .execute(function(resp) {
				if (apiErrorCallback && (resp.error && resp.error.status)) {
					apiErrorCallback(resp);
					return;
				}

				if (scriptErrorCallback && resp.error) {					
					scriptErrorCallback(resp, resp.error.details[0]);
					return;
				}

				if (successCallback)
				{
					successCallback(resp);
				}

				$log.warn('No callbacks were defined during execution! Ignore this message if no callback needed.');
	        });
        };
	}])

	.service('gappsSpreadsheetService', ['gappsService', function (gapps) {
		this.config = gapps.config;

		this.config.scopes = [
			'https://www.googleapis.com/auth/spreadsheets'
		];

		this.gapps = gapps;
	}])

	.service('gappsSpreadsheetAsDatabaseService', ['gappsSpreadsheetService', function (spreadsheetService) {
		var dbService = this;

		dbService.config = spreadsheetService.config;

		dbService.config.scriptId = 'MqJHBOjcG4ho8l_sg6XLiIp7zrY1BwJmy';
		dbService.config.clientId = '820420379643-cf9kbcq8ahl8gjcl4s797dndbecgn022.apps.googleusercontent.com';

		dbService.set = function () {
			spreadsheetService.gapps.run({ function: 'test' }, null, function () {
				dbService.ok = true;
			});
		};
	}]);
})();