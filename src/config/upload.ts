import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

/** Dentro da interface, falamons que dentro de 'config', vamos receber 'aws', que recebe um 'bucket' no
 * formato string */
interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpFolder: string;
  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  /** Dentro de 'config', acrescentamos a informação 'aws' e passamos  'bucket', que é para onde são enviados
   * os nossos arquivos uppados */
  config: {
    disk: {},
    aws: {
      bucket: 'bootcamp-app-gobarber',
    },
  },
} as IUploadConfig;
