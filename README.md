# Automated Telekom Business Portal Login

You know the deal: every once in a while you want to log into your Telekom Business Account and your password is expired 
so you need to reset your password again.

The solution to this is to log into you account at least every 4 weeks.

To automate this process, I created this little cypress integration test which does this for you ;)

- **[cypress/integration/login.js](cypress/integration/login.js)**

## Installation

This little script requires Node 12.22 and [nvm](https://github.com/nvm-sh/nvm)

- `git clone https://github.com/bartrail/telekom-bsp-autologin.git`
- `cd telekom-bsp-autologin`
- `nvm use`
  - maybe `nvm install` to install the correct node version   
- `npm install -g yarn`
- `yarn install`
- create a new file `cypress.env.json` with your credentials so it looks like this and replace the credentials with your own:
  ```json
    {
    "USERNAME": "your.username",
    "PASSWORD": "your.password123"
    }
  ```
- `yarn cypress:run` to start the "test"

If you want to repeatedly perform this test, simply add [encrypted repository secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)
named `CYPRESS_USERNAME` and `CYPRESS_PASSWORD` - these are safe and can not be viewed from outside. 
GitHub Actions should run then every sunday at 00:00 automatically ;-)

### Note 

There is a cypress setting in cypress.json called `"chromeWebSecurity": false` - this setting disables
the strict rules of chrome to not mix https and http requests. For some reason that I can not explain right now,
the telekom site throws a mixed content exception **only in cypress** after submitting this form. **This doesn't
happen in the normal chrome viewer..** So I don't think there is an actual security risk and it is safe to
disable `chromeWebSecurity` in this case.
