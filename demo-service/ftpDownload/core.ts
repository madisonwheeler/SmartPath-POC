export const downloadFromFTP = async () => {
  const FTPClient = require('ftp');
  const c = new FTPClient();
  return new Promise((resolve) => {
    c.on('ready', () => {
      c.get('test.txt', (e, stream) => {
        if (e) throw e;
        stream.once('close', () => { c.end();});
        stream.on('data', (chunk) => {
          resolve(chunk.toString('utf8'));
        })
      })
    })
    c.connect({
      host: '13.251.156.227',
      port: 21,
      user: process.env.FTP_USER,
      password: process.env.FTP_PW
    });
  });
}

