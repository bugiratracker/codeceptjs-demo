require('dotenv').config();

const project = process.env.bugira_project;
const user = process.env.bugira_user;
const password = process.env.bugira_password;
const host = 'https://codeceptjs.bugira.app';

exports.config = {
  tests: './*_test.js',
  output: './output',
  bootstrap: () => {
    // injecting config
    codeceptjs.container.append({
      support: { project }
    })
  },  
  helpers: {
    Puppeteer: {
      url: host,
      show: process.profile === 'show',
      windowSize: '1600x1200',
      keepCookies: true,
      restart: false,
      chrome: {
        args: ['--no-sandbox']
      }
    },
    ApiDataFactory: {
      endpoint: `${host}/api/${project}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      onRequest: async (request) => {
        let cookies = await codeceptjs.container.helpers('Puppeteer').grabCookie();
        request.headers = { Cookie: cookies.map(c => `${c.name}=${c.value}`).join('; ') };
      },      
      factories: {
        ticket: {
           uri: "/tickets",
           factory: "./data/ticket_factory"
        }
      }
    }
   
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
      retries: 5,
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        admin: {
          // login function is defined in `steps_file.js`
          login: (I) => I.login(user, password),
          // if we see `CodeceptJS Projects` on page, we assume we are logged in
          check: (I) => {
            //   pause();
             I.amOnPage('/');
            //  console.log('check');
             I.see('CodeceptJS Projects');
          }
        }
      }
    }
  },
  mocha: {},
  name: 'codeceptjs-bugira'
}