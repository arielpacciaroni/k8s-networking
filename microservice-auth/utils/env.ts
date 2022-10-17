import { str, envsafe, port } from 'envsafe';

export const env = envsafe({
  NODE_ENV: str({
    devDefault: 'development',
    choices: ['development', 'production'],
  }),
  PORT: port({
    devDefault: 3003,
    desc: 'The port the app is running on',
    example: 80,
  }),
});