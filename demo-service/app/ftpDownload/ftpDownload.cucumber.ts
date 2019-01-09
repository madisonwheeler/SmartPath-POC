import { binding, when, then } from 'cucumber-tsflow';
import { expect } from 'chai';
import { get } from 'request-promise';

@binding()
export class FtpDownloadSteps {
  fileContent: string;
  constructor() {
    this.fileContent = '';
  }
  @when(/user send the request to FTP server/)
  public async sendFTPRequest() {
    const params = {
      url: `https://ykuw2dvqv3.execute-api.us-east-1.amazonaws.com/dev/ftpDownload`,
      method: 'get'
    }
    this.fileContent = JSON.parse(await get(params)).message;
  }

  @then(/user should receive the content of the file/)
  public validateContent() {
    expect(this.fileContent.length).to.equal(10);
  }
}
