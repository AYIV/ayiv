(function() {
	angular.module('myApp', [])

	.service('gapps-service', function () {
		var service = this;
		// Your Client ID can be retrieved from your project in the Google
		// Developer Console, https://console.developers.google.com
		service.clientId  = '820420379643-cf9kbcq8ahl8gjcl4s797dndbecgn022.apps.googleusercontent.com';

		service.scopes = ['https://www.googleapis.com/auth/spreadsheets'];

		/**
		 * Check if current user has authorized this application.
         */
		service.checkAuth = function () {
			gapi.auth.authorize(
			  {
			    'client_id': service.clientId,
			    'scope': service.scopes.join(' '),
			    'immediate': true
			  }, service.handleAuthResult);
		};

		/**
		* Handle response from authorization server.
		*
		* @param {Object} authResult Authorization result.
		*/
		service.handleAuthResult = function (authResult) {
			service.isAuthorized = authResult && !authResult.error;
		};

		/**
		* Initiate auth flow in response to user clicking authorize button.
		*/
		service.handleAuthClick = function () {
			gapi.auth.authorize(
			  {client_id: service.clientId, scope: service.scopes, immediate: false},
			  service.handleAuthResult);
		}

		/**
		* Calls an Apps Script function to list the folders in the user's
		* root Drive folder.
		*/
		service.callScriptFunction = function () {
	        var scriptId = "MqJHBOjcG4ho8l_sg6XLiIp7zrY1BwJmy";

	        // Create an execution request object.
	        var request = {
	            'function': 'test'
            };

	        // Make the API request.
	        var op = gapi.client.request({
	            'root': 'https://script.googleapis.com',
	            'path': 'v1/scripts/' + scriptId + ':run',
	            'method': 'POST',
	            'body': request
	        });

	        op.execute(function(resp) {
				if (resp.error && resp.error.status) {
					// The API encountered a problem before the script
					// started executing.
					service.appendPre('Error calling API:');
					service.appendPre(JSON.stringify(resp, null, 2));

					return;
				}

				if (resp.error) {
					// The API executed, but the script returned an error.

					// Extract the first (and only) set of error details.
					// The values of this object are the script's 'errorMessage' and
					// 'errorType', and an array of stack trace elements.
					var error = resp.error.details[0];
					service.appendPre('Script error message: ' + error.errorMessage);

					if (error.scriptStackTraceElements) {
					  // There may not be a stacktrace if the script didn't start
					  // executing.
					  service.appendPre('Script error stacktrace:');
					  for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
					    var trace = error.scriptStackTraceElements[i];
					    service.appendPre('\t' + trace.function + ':' + trace.lineNumber);
					  }
					}

					return;
				}

	          	// The structure of the result will depend upon what the Apps
	            // Script function returns. Here, the function returns an Apps
	            // Script Object with String keys and values, and so the result
	            // is treated as a JavaScript object (folderSet).
	            var folderSet = resp.response.result;
	            if (Object.keys(folderSet).length == 0) {
	                service.appendPre('No folders returned!');
	            } else {
	              service.appendPre('Folders under your root folder:');
	              Object.keys(folderSet).forEach(function(id){
	                service.appendPre('\t' + folderSet[id] + ' (' + id  + ')');
	              });
	            }
	        });
        };

		/**
		* Append a pre element to the body containing the given message
		* as its text node.
		*
		* @param {string} message Text to be placed in pre element.
		*/
		service.appendPre = function (message) {
			service.message += message;
		};
	});
})();