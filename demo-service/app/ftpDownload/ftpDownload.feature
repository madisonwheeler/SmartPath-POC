Feature: Download file through FTP

   Connect to an FTP server and download a test file

   Scenario: User request a file from an FTP server
    When user send the request to FTP server
    Then user should receive the content of the file