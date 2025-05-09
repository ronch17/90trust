// https://stackoverflow.com/questions/24080018/download-file-from-an-asp-net-web-api-method-using-angularjs?answertab=active#tab-top

// Based on an implementation here: web.student.tuwien.ac.at/~e0427417/jsdownload.html
export function downloadFile(httpPath, $http) {
    // Use an arraybuffer
    $http
        .get(httpPath, { responseType: 'arraybuffer' })
        .success(function(data, status, headers) {
            const octetStreamMime = 'application/octet-stream';
            let success = false;

            // Get the headers
            headers = headers();

            // Get the filename from the x-filename header or default to "download.bin"
            const filename = headers['x-filename'] || 'download.bin';

            // Determine the content type from the header or default to "application/octet-stream"
            const contentType = headers['content-type'] || octetStreamMime;

            try {
                // Try using msSaveBlob if supported
                console.log('Trying saveBlob method ...');
                const blob = new Blob([data], { type: contentType });
                if (navigator.msSaveBlob) navigator.msSaveBlob(blob, filename);
                else {
                    // Try using other saveBlob implementations, if available
                    const saveBlob = navigator.webkitSaveBlob || navigator.mozSaveBlob || navigator.saveBlob;
                    if (saveBlob === undefined) throw 'Not supported';
                    saveBlob(blob, filename);
                }
                console.log('saveBlob succeeded');
                success = true;
            } catch (ex) {
                console.log('saveBlob method failed with the following exception:');
                console.log(ex);
            }

            if (!success) {
                // Get the blob url creator
                const urlCreator = window.URL || window.webkitURL || window.mozURL || window.msURL;
                if (urlCreator) {
                    // Try to use a download link
                    const link = document.createElement('a');
                    if ('download' in link) {
                        // Try to simulate a click
                        try {
                            // Prepare a blob URL
                            console.log('Trying download link method with simulated click ...');
                            const blob = new Blob([data], { type: contentType });
                            const url = urlCreator.createObjectURL(blob);
                            link.setAttribute('href', url);

                            // Set the download attribute (Supported in Chrome 14+ / Firefox 20+)
                            link.setAttribute('download', filename);

                            // Simulate clicking the download link
                            const event = document.createEvent('MouseEvents');
                            event.initMouseEvent(
                                'click',
                                true,
                                true,
                                window,
                                1,
                                0,
                                0,
                                0,
                                0,
                                false,
                                false,
                                false,
                                false,
                                0,
                                null
                            );
                            link.dispatchEvent(event);
                            console.log('Download link method with simulated click succeeded');
                            success = true;
                        } catch (ex) {
                            console.log(
                                'Download link method with simulated click failed with the following exception:'
                            );
                            console.log(ex);
                        }
                    }

                    if (!success) {
                        // Fallback to window.location method
                        try {
                            // Prepare a blob URL
                            // Use application/octet-stream when using window.location to force download
                            console.log('Trying download link method with window.location ...');
                            const blob = new Blob([data], { type: octetStreamMime });
                            const url = urlCreator.createObjectURL(blob);
                            window.location = url;
                            console.log('Download link method with window.location succeeded');
                            success = true;
                        } catch (ex) {
                            console.log(
                                'Download link method with window.location failed with the following exception:'
                            );
                            console.log(ex);
                        }
                    }
                }
            }

            if (!success) {
                // Fallback to window.open method
                console.log('No methods worked for saving the arraybuffer, using last resort window.open');
                window.open(httpPath, '_blank', '');
            }
        })
        .error(function(data, status) {
            console.log('Request failed with status: ' + status);

            // Optionally write the error out to scope
            //$scope.errorDetails = 'Request failed with status: ' + status;
        });
}
