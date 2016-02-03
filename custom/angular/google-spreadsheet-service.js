(function() {
	angular.module('myApp', [])

	.service('gapps-service', function () {
		// Your Client ID can be retrieved from your project in the Google
		// Developer Console, https://console.developers.google.com
		this.clientId  = '820420379643-cf9kbcq8ahl8gjcl4s797dndbecgn022.apps.googleusercontent.com';

		this.scopes = ['https://www.googleapis.com/auth/drive'];

		/**
		 * Check if current user has authorized this application.
         */
		this.checkAuth = function () {
			gapi.auth.authorize(
			  {
			    'client_id': this.clientId,
			    'scope': this.scopes.join(' '),
			    'immediate': true
			  }, this.handleAuthResult);
		};

		/**
		* Handle response from authorization server.
		*
		* @param {Object} authResult Authorization result.
		*/
		this.handleAuthResult = function (authResult) {
			this.isAuthorized = authResult && !authResult.error;
		};

		/**
		* Initiate auth flow in response to user clicking authorize button.
		*/
		this.handleAuthClick = function () {
			gapi.auth.authorize(
			  {client_id: this.clientId, scope: this.scopes, immediate: false},
			  this.handleAuthResult);
		}

		/**
		* Calls an Apps Script function to list the folders in the user's
		* root Drive folder.
		*/
		this.callScriptFunction = function () {
	        var scriptId = "MqJHBOjcG4ho8l_sg6XLiIp7zrY1BwJmy";

	        // Create an execution request object.
	        var request = {
	            'function': 'getFoldersUnderRoot'
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
					this.appendPre('Error calling API:');
					this.appendPre(JSON.stringify(resp, null, 2));

					return;
				}

				if (resp.error) {
					// The API executed, but the script returned an error.

					// Extract the first (and only) set of error details.
					// The values of this object are the script's 'errorMessage' and
					// 'errorType', and an array of stack trace elements.
					var error = resp.error.details[0];
					this.appendPre('Script error message: ' + error.errorMessage);

					if (error.scriptStackTraceElements) {
					  // There may not be a stacktrace if the script didn't start
					  // executing.
					  this.appendPre('Script error stacktrace:');
					  for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
					    var trace = error.scriptStackTraceElements[i];
					    this.appendPre('\t' + trace.function + ':' + trace.lineNumber);
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
	                this.appendPre('No folders returned!');
	            } else {
	              this.appendPre('Folders under your root folder:');
	              Object.keys(folderSet).forEach(function(id){
	                this.appendPre('\t' + folderSet[id] + ' (' + id  + ')');
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
		this.appendPre = function (message) {
			this.message += message;
		};
	});
})();